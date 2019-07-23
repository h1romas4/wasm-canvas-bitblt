mod utils;

use std::f32;
use wasm_bindgen::prelude::*;
use utils::*;

const RGBA: usize = 4;
const PI: f32 = f32::consts::PI;

#[wasm_bindgen]
pub struct Screen {
    vram: Vec<u8>,
    width: usize,
    height: usize,
    tick: usize
}

#[wasm_bindgen]
impl Screen {
    #[wasm_bindgen(constructor)]
    pub fn new(width: usize, height: usize) -> Self {
        set_panic_hook();
        console_log!("wasm start");
        Screen {
            vram: vec![0x00; width * height * RGBA],
            width: width,
            height: height,
            tick: 0
        }
    }

    pub fn get_canvas_bitmap_ptr(&mut self) -> *mut u8 {
        self.vram.as_mut_ptr()
    }

    pub fn update(&mut self) {
        self.tick += 1;
        if self.tick >= 360 {
            self.tick = 0;
        }
    }

    pub fn draw(&mut self) {
        let bx: f32 = self.width as f32 / 2_f32;
        let by: f32 = self.height as f32  / 2_f32;
        let rd: f32 = 200_f32;

        let rd0 = self.rotation(self.tick as f32, 0_f32) * PI / 180_f32;
        let rd1 = self.rotation(self.tick as f32, 120_f32) * PI / 180_f32;
        let rd2 = self.rotation(self.tick as f32, 240_f32) * PI / 180_f32;
        let p0: (isize, isize) = ((f32::sin(rd0) * rd + (f32::sin(rd2) * 200_f32 + bx)) as isize, (f32::cos(rd0) * rd + by) as isize);
        let p1: (isize, isize) = ((f32::sin(rd1) * rd + bx) as isize, (f32::cos(rd1) * rd + by) as isize);
        let p2: (isize, isize) = ((f32::sin(rd2) * rd + bx) as isize, (f32::cos(rd2) * rd + by) as isize);

        self.clear();
        self.triangle_fill(p0, p1, p2, (0xf0, 0xf0, 0x00));
    }

    fn clear(&mut self) {
        for pos in 0..(self.width * self.height) * 4 {
            self.vram[pos] = 0x00;
        }
    }

    fn rotation(&self, angle: f32, add: f32) -> f32 {
        let mut next = angle + add;
        if next >= 360_f32 {
            next -= 360_f32
        }
        next
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
    #[allow(dead_code)]
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
    fn triangle_fill(&mut self, p0: (isize, isize), p1: (isize, isize), p2: (isize, isize), color: (u8, u8, u8)) {
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

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
