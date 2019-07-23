mod utils;

use wasm_bindgen::prelude::*;
use utils::*;

const RGBA: usize = 4;

#[wasm_bindgen]
pub struct Screen {
    vram: Vec<u8>,
    width: usize,
    height: usize
}

#[wasm_bindgen]
impl Screen {
    #[wasm_bindgen(constructor)]
    pub fn new(width: usize, height: usize) -> Self {
        set_panic_hook();
        console_log!("wasm start");
        Screen {
            vram: vec![0xff; width * height * RGBA],
            width: width,
            height: height
        }
    }

    pub fn get_canvas_bitmap_ptr(&mut self) -> *mut u8 {
        self.vram.as_mut_ptr()
    }

    pub fn update(&mut self) {
    }

    pub fn draw(&mut self) {
        self.circle((100, 100), 50, (0x00, 0x00, 0x00));
        self.line((0, 0), (100, 100), (0x00, 0x00, 0x00));
        self.line((100, 100), (200, 100), (0x00, 0x00, 0x00));
        self.triangle_fill_buttom_flat((300, 0), (200, 100), (400, 100), (0x00, 0x00, 0x00));
        self.triangle_fill_top_flat((300, 0), (500, 0), (400, 100), (0x00, 0x00, 0x00));
    }

    ///
    /// Point Set
    ///
    fn pset(&mut self, p: (isize, isize), color: (u8, u8, u8)) {
        let pos = (p.1 * self.width as isize + p.0) * RGBA as isize;
        // cliping
        if pos < 0 && pos > (self.width * self.height) as isize {
            return;
        }
        let pos: usize = pos as usize;
        self.vram[pos + 0] = color.0;
        self.vram[pos + 1] = color.1;
        self.vram[pos + 2] = color.2;
        self.vram[pos + 3] = 0xff;
    }

    ///
    /// Midpoint Circle Algorithm
    ///
    fn circle(&mut self, p: (isize, isize), r: usize, color: (u8, u8, u8)) {
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
    /// Bresenham's Line Algorithm
    ///
    fn line(&mut self, p0: (isize, isize), p1: (isize, isize), color: (u8, u8, u8)) {
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
    /// Triangle Fill
    ///
    fn triangle_fill(&mut self, v0: (isize, isize), v1: (isize, isize), v2: (isize, isize), color: (u8, u8, u8)) {
    }

    //
    /// Triangle Fill(Buttom flat)
    //
    fn triangle_fill_buttom_flat(&mut self, v0: (isize, isize), v1: (isize, isize), v2: (isize, isize), color: (u8, u8, u8)) {
        let invslope1: isize = (v1.0 - v0.0) / (v1.1 - v0.1);
        let invslope2: isize = (v2.0 - v0.0) / (v2.1 - v0.1);

        let mut curx1: isize = v0.0;
        let mut curx2: isize = v0.0;

        for scanline_y in v0.1..=v1.1 {
            self.line((curx1, scanline_y), (curx2, scanline_y), color);
            curx1 += invslope1;
            curx2 += invslope2;
        }
    }

    //
    /// Triangle Fill(Top flat)
    //
    fn triangle_fill_top_flat(&mut self, v0: (isize, isize), v1: (isize, isize), v2: (isize, isize), color: (u8, u8, u8)) {
        let invslope1: isize = (v2.0 - v0.0) / (v2.1 - v0.1);
        let invslope2: isize = (v2.0 - v1.0) / (v2.1 - v1.1);

        let mut curx1: isize = v2.0;
        let mut curx2: isize = v2.0;

        for scanline_y in (v0.1..v2.1).rev() {
            self.line((curx1, scanline_y), (curx2, scanline_y), color);
            curx1 -= invslope1;
            curx2 -= invslope2;
        }
    }
}

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[test]
fn it_works() {
    Screen::new(768, 576);
}
