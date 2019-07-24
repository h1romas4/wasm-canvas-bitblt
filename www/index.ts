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
    private canvasContext: CanvasRenderingContext2D;
    private canvasImageData: ImageData;
    private screen: Screen;
    private imageData: Uint8Array;

    private animeId: number;
    private startTime: number;
    private frame: number;
    private fps: number;

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
        this.canvasContext = this.canvas.getContext('2d');
        this.canvasImageData = this.canvasContext.createImageData(
            Bitblt.CANVAS_WIDTH, Bitblt.CANVAS_HEIGHT);
        this.canvasContext.font = "16px sans-serif";
        this.canvasContext.fillStyle = "#0f0";

        this.screen = new Screen(Bitblt.CANVAS_WIDTH, Bitblt.CANVAS_HEIGHT);
        this.imageData = new Uint8Array(
            memory.buffer,
            this.screen.get_canvas_bitmap_ptr(),
            Bitblt.CANVAS_WIDTH * Bitblt.CANVAS_HEIGHT * Bitblt.RGBA);

        this.startTime = new Date().getTime();
        this.fps = 0;
        this.frame = 0;
    }

    /**
     * loop
     */
    public loop() {
        // update
        this.screen.update();
        // draw
        this.screen.draw();
        this.canvasImageData.data.set(this.imageData);
        this.canvasContext.putImageData(this.canvasImageData, 0, 0);
        // fps
        this.frame++;
        if(new Date().getTime() - this.startTime >= 1000) {
            this.fps = this.frame;
            this.frame = 0;
            this.startTime = new Date().getTime();
        }
        this.canvasContext.fillText("fps: " + this.fps, 0, 16);
        // next tick
        this.animeId = requestAnimationFrame(() => this.loop());
    }
}

new Bitblt().loop();
