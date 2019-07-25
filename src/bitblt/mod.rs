use std::f32;
use std::ptr;

const RGBA: usize = 4;

pub struct Bitblt {
    vram: Vec<u8>,
    width: usize,
    height: usize,
}

///
/// Bitblt
///
#[allow(dead_code)]
impl Bitblt {
    ///
    /// constractor
    ///
    pub fn new(width: usize, height: usize) -> Self {
        Bitblt {
            vram: vec![0x00; width * height * RGBA],
            width: width,
            height: height
        }
    }

    ///
    /// get_vram_ptr
    ///
    pub fn get_vram_ptr(&mut self) -> *mut u8 {
        self.vram.as_mut_ptr()
    }

    ///
    /// get_vram
    ///
    pub fn get_vram(&self) -> &[u8] {
        self.vram.as_slice()
    }

    ///
    /// get_size
    ///
    pub fn get_size(&self) -> (usize, usize) {
        (self.width, self.height)
    }

    ///
    /// Clear VRAM
    ///
    pub fn clear(&mut self) {
        unsafe {
            let vram = self.vram.as_mut_ptr();
            ptr::write_bytes(vram, 0x00, (self.width * self.height - 1) * 4);
        }
    }

    ///
    /// bitblt
    ///
    pub fn bitblt(&mut self, src: &Bitblt, p: (isize, isize), s: (isize, isize)) {
        let (width, _) = src.get_size();
        let vram = src.get_vram();
        for yy in p.1..=s.1 {
            let pos = ((yy * width as isize + p.0) * RGBA as isize) as isize;
            unsafe {
                ptr::copy_nonoverlapping(
                    vram.as_ptr().offset(pos),
                    self.vram.as_mut_ptr().offset(pos),
                    s.0 as usize * RGBA
                );
            }
        }
    }

    ///
    /// Point Set
    ///
    #[inline(always)]
    pub fn pset(&mut self, p: (isize, isize), color: (u8, u8, u8)) {
        let pos = (p.1 * self.width as isize + p.0) * RGBA as isize;
        // cliping
        if pos < 0 || pos >= (self.width * self.height * RGBA) as isize {
            return;
        }
        let pos = pos as isize;
        unsafe {
            ptr::copy_nonoverlapping(
                [color.0, color.1, color.2, 0xff].as_ptr(),
                self.vram.as_mut_ptr().offset(pos),
                4
            );
        }
    }

    ///
    /// Bresenham's Line Algorithm
    ///
    #[inline(always)]
    pub fn line(&mut self, p0: (isize, isize), p1: (isize, isize), color: (u8, u8, u8)) {
        let dx = isize::abs(p1.0 - p0.0);
        let dy = isize::abs(p1.1 - p0.1);
        let sx = if p0.0 < p1.0 { 1 } else { -1 };
        let sy = if p0.1 < p1.1 { 1 } else { -1 };

        let mut x0 = p0.0;
        let mut y0 = p0.1;
        let mut err = dx - dy;

        loop {
            self.pset((x0, y0), color);
            if x0 == p1.0 && y0 == p1.1 {
                break;
            }
            let e2 = 2 * err;
            if e2 > -dy {
                err -= dy;
                x0 += sx;
            }
            if e2 < dx {
                err += dx;
                y0 += sy;
            }
        }
    }

    ///
    /// Midpoint Circle Algorithm
    ///
    pub fn circle(&mut self, p: (isize, isize), r: usize, color: (u8, u8, u8)) {
        let mut x = r as isize;
        let mut y: isize = 0;
        let mut err: isize = 0;

        while x >= y {
            self.pset((p.0 + x, p.1 + y), color);
            self.pset((p.0 + y, p.1 + x), color);
            self.pset((p.0 - y, p.1 + x), color);
            self.pset((p.0 - x, p.1 + y), color);
            self.pset((p.0 - x, p.1 - y), color);
            self.pset((p.0 - y, p.1 - x), color);
            self.pset((p.0 + y, p.1 - x), color);
            self.pset((p.0 + x, p.1 - y), color);
            if err <= 0 {
                y += 1;
                err += 2 * y + 1;
            }
            if err > 0 {
                x -= 1;
                err -= 2 * x + 1;
            }
        }
    }

    ///
    /// Triangle Fill
    ///
    pub fn triangle_fill(&mut self, p0: (isize, isize), p1: (isize, isize), p2: (isize, isize), color: (u8, u8, u8)) {
        let v0: (isize, isize);
        let v1: (isize, isize);
        let v2: (isize, isize);

        let mut sorted = vec![p0, p1, p2];
        sorted.sort_by(|a, b| a.1.cmp(&b.1));
        v0 = sorted[0];
        v1 = sorted[1];
        v2 = sorted[2];

        if v1.1 == v2.1 {
            self.triangle_fill_buttom_flat(v0, v1, v2, color);
        } else if v0.1 == v1.1 {
            self.triangle_fill_top_flat(v0, v1, v2, color);
        } else {
            let v3 = (
                (v0.0 as f32 + ((v1.1 - v0.1) as f32 / (v2.1 - v0.1) as f32) as f32 * (v2.0 - v0.0) as f32) as isize
                , v1.1
            );
            self.triangle_fill_buttom_flat(v0, v1, v3, color);
            self.triangle_fill_top_flat(v1, v3, v2, color);
        }
    }

    ///
    /// Triangle Fill(Buttom flat)
    ///
    fn triangle_fill_buttom_flat(&mut self, v0: (isize, isize), v1: (isize, isize), v2: (isize, isize), color: (u8, u8, u8)) {
        let invslope1: f32 = ((v1.0 - v0.0) as f32 / (v1.1 - v0.1) as f32) as f32;
        let invslope2: f32 = ((v2.0 - v0.0) as f32 / (v2.1 - v0.1) as f32) as f32;

        let mut curx1: f32 = v0.0 as f32;
        let mut curx2: f32 = v0.0 as f32;

        for scanline_y in v0.1..=v1.1 {
            self.line((curx1 as isize, scanline_y), (curx2 as isize, scanline_y), color);
            curx1 += invslope1;
            curx2 += invslope2;
        }
    }

    ///
    /// Triangle Fill(Top flat)
    ///
    fn triangle_fill_top_flat(&mut self, v0: (isize, isize), v1: (isize, isize), v2: (isize, isize), color: (u8, u8, u8)) {
        let invslope1: f32 = ((v2.0 - v0.0) as f32 / (v2.1 - v0.1) as f32) as f32;
        let invslope2: f32 = ((v2.0 - v1.0) as f32 / (v2.1 - v1.1) as f32) as f32;

        let mut curx1: f32 = v2.0 as f32;
        let mut curx2: f32 = v2.0 as f32;

        for scanline_y in (v0.1..v2.1).rev() {
            self.line((curx1 as isize, scanline_y), (curx2 as isize, scanline_y), color);
            curx1 -= invslope1;
            curx2 -= invslope2;
        }
    }
}
