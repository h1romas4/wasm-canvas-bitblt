import { Screen } from "wasm-canvas-bitblt";
import { memory } from "wasm-canvas-bitblt/wasm_canvas_bitblt_bg";

/**
 * BitbltCanvas
 */
class Bitblt {
    static readonly CANVAS_WIDTH = 768;
    static readonly CANVAS_HEIGHT = 576;
    static readonly RGBA = 4;

    private canvas: HTMLCanvasElement;
    private canvas_context: CanvasRenderingContext2D;
    private canvas_image_data: ImageData;
    private screen: Screen;
    private image_data: Uint8Array;

    private anime_id: number;

    /**
     * constructor
     */
    constructor() {
        this.canvas = <HTMLCanvasElement>document.getElementById('screen');
        this.canvas.setAttribute('width', `${Bitblt.CANVAS_WIDTH}`);
        this.canvas.setAttribute('height', `${Bitblt.CANVAS_HEIGHT}`);
        let pixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
        if(pixelRatio > 1 && window.screen.width < Bitblt.CANVAS_WIDTH) {
            this.canvas.style.width = 320 + "px";
            this.canvas.style.height = 240 + "px";
        }
        this.canvas_context = this.canvas.getContext('2d');
        this.canvas_image_data = this.canvas_context.createImageData(
            Bitblt.CANVAS_WIDTH, Bitblt.CANVAS_HEIGHT);

        this.screen = new Screen(Bitblt.CANVAS_WIDTH, Bitblt.CANVAS_HEIGHT);
        this.image_data = new Uint8Array(
            memory.buffer,
            this.screen.get_canvas_bitmap_ptr(),
            Bitblt.CANVAS_WIDTH * Bitblt.CANVAS_HEIGHT * Bitblt.RGBA);
    }

    /**
     * loop
     */
    public loop() {
        // update
        this.screen.update();
        // draw
        this.screen.draw();
        this.canvas_image_data.data.set(this.image_data);
        this.canvas_context.putImageData(this.canvas_image_data, 0, 0);
        // next tick
        this.anime_id = requestAnimationFrame(() => this.loop());
    }
}

new Bitblt().loop();
