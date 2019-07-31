mod bitblt;
mod utils;

use std::f32;
use wasm_bindgen::prelude::*;

use bitblt::Bitblt;
use utils::*;

const PI: f32 = f32::consts::PI;

#[wasm_bindgen]
#[allow(dead_code)]
pub struct Screen {
    canvas: Bitblt,
    width: usize,
    height: usize,
    resource: Vec<Bitblt>,
    // for demo (TODO: move state)
    tick: usize,
    vram2: Bitblt,
}
#[wasm_bindgen]
#[allow(dead_code)]
impl Screen {
    #[wasm_bindgen(constructor)]
    pub fn new(width: usize, height: usize) -> Self {
        Screen {
            canvas: Bitblt::new(width, height),
            width: width,
            height: height,
            resource: Vec::new(),
            // for demo (TODO: move state)
            tick: 0,
            vram2: Bitblt::new(width, height),
        }
    }

    pub fn add_resource(&mut self, width: usize, height: usize) -> usize {
        self.resource.push(Bitblt::new(width, height));
        self.resource.len() - 1
    }

    pub fn get_canvas_bitmap_ptr(&mut self) -> *mut u8 {
        self.canvas.get_vram_ptr()
    }

    pub fn get_resource_bitmap_ptr(&mut self, no: usize) -> *mut u8 {
        self.resource[no].get_vram_ptr()
    }

    pub fn init(&mut self) {}

    pub fn update(&mut self) {
        self.tick += 1;
        if self.tick >= 360 {
            self.tick = 0;
        }
    }

    pub fn draw(&mut self) {
        self.demo();
    }

    fn demo(&mut self) {
        self.canvas.clear();
        self.vram2.clear();

        self.vram2.bitblt(
            &self.resource[0],
            (0, 0),
            self.resource[0].get_size(),
            (0, 50),
        );
        for y in 50..500 {
            self.vram2.raster(
                y,
                (30_f32 * f32::sin(2_f32 * PI * (self.tick as f32 / 60_f32 - y as f32 / 200_f32)))
                    as isize,
            );
        }
        self.vram2
            .rotate(&mut self.canvas, self.tick as f32 * PI / 180_f32);

        // let rd: f32 = 16_f32;
        // let rd0 = self.rotation(self.tick as f32, 0_f32) * PI / 180_f32;
        // let rd1 = self.rotation(self.tick as f32, 120_f32) * PI / 180_f32;
        // let rd2 = self.rotation(self.tick as f32, 240_f32) * PI / 180_f32;
        // for by in (32..self.height).step_by(32) {
        //     for bx in (32..self.width).step_by(32) {
        //         let p0: (isize, isize) = (
        //             (f32::sin(rd0) * rd + bx as f32) as isize,
        //             (f32::cos(rd0) * rd + by as f32) as isize
        //         );
        //         let p1: (isize, isize) = (
        //             (f32::sin(rd1) * rd + bx as f32) as isize,
        //             (f32::cos(rd1) * rd + by as f32) as isize
        //         );
        //         let p2: (isize, isize) = (
        //             (f32::sin(rd2) * rd + bx as f32) as isize,
        //             (f32::cos(rd2) * rd + by as f32) as isize
        //         );
        //         self.canvas.pset((bx as isize, by as isize), (0xf0, 0xf0, 0x00));
        //         self.canvas.triangle_fill(p0, p1, p2, (0x00, 0x00, 0x40));
        //     }
        // }
    }

    fn rotation(&self, angle: f32, add: f32) -> f32 {
        let mut next = angle + add;
        if next >= 360_f32 {
            next -= 360_f32
        }
        next
    }
}

#[wasm_bindgen(start)]
pub fn init() {
    set_panic_hook();
    console_log!("wasm start");
}

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
