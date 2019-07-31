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
            height: height,
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
            ptr::write_bytes(vram, 0x00, self.width * self.height * RGBA);
        }
    }

    ///
    /// bitblt (nonoverlapping)
    ///
    pub fn bitblt(
        &mut self,
        src: &Bitblt,
        sp: (isize, isize),
        ss: (usize, usize),
        dp: (isize, isize),
    ) {
        let (swidth, _) = src.get_size();
        let (dwidth, _) = self.get_size();
        let vram = src.get_vram();
        let mut dy = dp.1;
        for sy in sp.1..ss.1 as isize {
            let spos = ((sy * swidth as isize + sp.0) * RGBA as isize) as isize;
            let dpos = ((dy * dwidth as isize + dp.0) * RGBA as isize) as isize;
            // TODO: no cliping, how dangerous!
            unsafe {
                ptr::copy_nonoverlapping(
                    vram.as_ptr().offset(spos),
                    self.vram.as_mut_ptr().offset(dpos),
                    ss.0 as usize * RGBA,
                );
            }
            dy += 1;
        }
    }

    ///
    /// raster
    ///
    pub fn raster(&mut self, sy: isize, shift: isize) {
        let (start_x, to_x, width_x, pad_x) = if shift < 0 {
            (
                -shift,
                0,
                self.width + shift as usize,
                self.width + shift as usize,
            )
        } else {
            (0, shift, self.width - shift as usize, 0)
        };
        let spos = ((sy * self.width as isize + start_x) * RGBA as isize) as isize;
        let dpos = ((sy * self.width as isize + to_x) * RGBA as isize) as isize;
        unsafe {
            ptr::copy(
                self.vram.as_mut_ptr().offset(spos),
                self.vram.as_mut_ptr().offset(dpos),
                width_x as usize * RGBA,
            );
        }
        for lx in pad_x..pad_x + isize::abs(shift) as usize {
            self.pset((lx as isize, sy), (0x00, 0x00, 0x00));
        }
    }

    ///
    /// rotate
    ///
    pub fn rotate(&mut self, dst: &mut Bitblt, angle: f32) {
        let (sin, cos) = (f32::sin(angle), f32::cos(angle));
        let hx: f32 = self.width as f32 / 2_f32;
        let hy: f32 = self.height as f32 / 2_f32;

        for y in 0..self.height {
            for x in 0..self.width {
                let cx: f32 = x as f32 - hx;
                let cy: f32 = y as f32 - hy;
                let sx = ((cx * cos - cy * sin) + hx) as isize;
                let sy = ((cx * sin + cy * cos) + hy) as isize;
                if sx < 0 || sx >= self.width as isize || sy < 0 || sy >= self.height as isize {
                    continue;
                }
                let spos = ((sy * self.width as isize + sx) * RGBA as isize) as usize;
                dst.pset(
                    (x as isize, y as isize),
                    (
                        self.vram[spos + 0],
                        self.vram[spos + 1],
                        self.vram[spos + 2],
                    ),
                );
            }
        }
        unsafe {
            ptr::copy_nonoverlapping(
                dst.get_vram_ptr().offset(0),
                self.vram.as_mut_ptr().offset(0),
                self.width * self.height * RGBA,
            );
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
                4,
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
    pub fn triangle_fill(
        &mut self,
        p0: (isize, isize),
        p1: (isize, isize),
        p2: (isize, isize),
        color: (u8, u8, u8),
    ) {
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
                (v0.0 as f32
                    + ((v1.1 - v0.1) as f32 / (v2.1 - v0.1) as f32) as f32 * (v2.0 - v0.0) as f32)
                    as isize,
                v1.1,
            );
            self.triangle_fill_buttom_flat(v0, v1, v3, color);
            self.triangle_fill_top_flat(v1, v3, v2, color);
        }
    }

    ///
    /// Triangle Fill(Buttom flat)
    ///
    fn triangle_fill_buttom_flat(
        &mut self,
        v0: (isize, isize),
        v1: (isize, isize),
        v2: (isize, isize),
        color: (u8, u8, u8),
    ) {
        let invslope1: f32 = ((v1.0 - v0.0) as f32 / (v1.1 - v0.1) as f32) as f32;
        let invslope2: f32 = ((v2.0 - v0.0) as f32 / (v2.1 - v0.1) as f32) as f32;

        let mut curx1: f32 = v0.0 as f32;
        let mut curx2: f32 = v0.0 as f32;

        for scanline_y in v0.1..=v1.1 {
            self.line(
                (curx1 as isize, scanline_y),
                (curx2 as isize, scanline_y),
                color,
            );
            curx1 += invslope1;
            curx2 += invslope2;
        }
    }

    ///
    /// Triangle Fill(Top flat)
    ///
    fn triangle_fill_top_flat(
        &mut self,
        v0: (isize, isize),
        v1: (isize, isize),
        v2: (isize, isize),
        color: (u8, u8, u8),
    ) {
        let invslope1: f32 = ((v2.0 - v0.0) as f32 / (v2.1 - v0.1) as f32) as f32;
        let invslope2: f32 = ((v2.0 - v1.0) as f32 / (v2.1 - v1.1) as f32) as f32;

        let mut curx1: f32 = v2.0 as f32;
        let mut curx2: f32 = v2.0 as f32;

        for scanline_y in (v0.1..v2.1).rev() {
            self.line(
                (curx1 as isize, scanline_y),
                (curx2 as isize, scanline_y),
                color,
            );
            curx1 -= invslope1;
            curx2 -= invslope2;
        }
    }
}
