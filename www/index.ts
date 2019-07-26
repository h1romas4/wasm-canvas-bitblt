import { Screen } from "wasm-canvas-bitblt";
import { memory } from "wasm-canvas-bitblt/wasm_canvas_bitblt_bg";

/**
 * WebAssembly Bitblt Test
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

    // TODO: image file only
    private resources: { [key: string]: number; } = {
        "resources/rustacean-flat-happy-768x512.png": null
    };
    private loadedCount: number;
    private resourceLoaded: boolean;

    /**
     * constructor
     */
    constructor() {
        this.canvas = <HTMLCanvasElement>document.getElementById('screen');
        this.canvas.setAttribute('width', `${Bitblt.CANVAS_WIDTH}`);
        this.canvas.setAttribute('height', `${Bitblt.CANVAS_HEIGHT}`);
        // for device width
        let pixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
        if(pixelRatio > 1 && window.screen.width < Bitblt.CANVAS_WIDTH) {
            this.canvas.style.width = 320 + "px";
            this.canvas.style.height = 240 + "px";
        }
        // create canvas context
        this.canvasContext = this.canvas.getContext('2d');
        this.canvasImageData = this.canvasContext.createImageData(
            Bitblt.CANVAS_WIDTH, Bitblt.CANVAS_HEIGHT);
        // hello wasm world
        this.screen = new Screen(Bitblt.CANVAS_WIDTH, Bitblt.CANVAS_HEIGHT);
        // for fps print
        this.canvasContext.font = "16px sans-serif";
        this.canvasContext.fillStyle = "#0f0";
        this.startTime = new Date().getTime();
        this.fps = 0;
        this.frame = 0;
    }

    /**
     * start
     */
    public start() {
        this.load();
        this.loop();
    }

    /**
     * loop
     */
    public loop() {
        // resource wait
        if(this.resourceLoaded) {
            // update (TODO: split update/draw)
            this.screen.update();
            // draw
            this.screen.draw();
            // recreate Uint8Array
            // https://github.com/emscripten-core/emscripten/issues/6747
            this.imageData = new Uint8Array(
                memory.buffer,
                this.screen.get_canvas_bitmap_ptr(),
                Bitblt.CANVAS_WIDTH * Bitblt.CANVAS_HEIGHT * Bitblt.RGBA);
            // draw wasm calculated bitmap
            this.canvasImageData.data.set(this.imageData);
            this.canvasContext.putImageData(this.canvasImageData, 0, 0);
            // print fps
            this.frame++;
            if(new Date().getTime() - this.startTime >= 1000) {
                this.fps = this.frame;
                this.frame = 0;
                this.startTime = new Date().getTime();
            }
            this.canvasContext.fillText("fps: " + this.fps, 0, 16);
        }
        // next tick
        this.animeId = requestAnimationFrame(() => this.loop());
    }

    /**
     * resource load (sync)
     */
    private load() {
        this.loadedCount = 0;
        this.resourceLoaded = false;
        for(let resource in this.resources) {
            let image = new Image();
            image.addEventListener('load', () => {
                // create resource hidden canvas
                let canvas = document.createElement('canvas')
                canvas.width = image.width;
                canvas.height = image.height;
                let context = canvas.getContext('2d');
                // draw image
                context.drawImage(image, 0, 0);
                // get image typedarray
                let resourceImageData = context.getImageData(0, 0, image.width, image.height);
                // alloc wasm memory
                this.screen.add_resource(image.width, image.height);
                let imageData = new Uint8Array(
                    memory.buffer,
                    this.screen.get_resource_bitmap_ptr(this.loadedCount),
                    image.width * image.height * Bitblt.RGBA);
                // resource bitmap trancefar
                imageData.set(resourceImageData.data);
                // save resource number
                this.resources[resource] = this.loadedCount;
                this.loadedCount++;
                // remove hidden canvas
                canvas.remove();
            });
            image.src = resource;
        }
        // wait resource loaded
        let wait = window.setInterval(() => {
            if(Object.keys(this.resources).length <= this.loadedCount) {
                this.resourceLoaded = true;
                window.clearInterval(wait);
            }
        }, 10);
    }
}

new Bitblt().start();
