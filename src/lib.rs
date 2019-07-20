mod utils;

use wasm_bindgen::prelude::*;

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
        utils::set_panic_hook();
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
        self.pset(0, 0, (0xff, 0x00, 0x00));
    }

    fn pset(&mut self, x:isize, y: isize, color: (u8, u8, u8)) {
        let pos = (y * self.width as isize + x) * RGBA as isize;
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
}

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[test]
fn it_works() {
    Screen::new(768, 576);
}
