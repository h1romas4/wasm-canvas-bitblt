(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/wasm_canvas_bitblt.js":
/*!************************************!*\
  !*** ../pkg/wasm_canvas_bitblt.js ***!
  \************************************/
/*! exports provided: Screen, __wbg_log_cec2cd0438ba0b6d, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbg_error_4bb6c2a97407129a, __wbindgen_object_drop_ref, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return Screen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_log_cec2cd0438ba0b6d", function() { return __wbg_log_cec2cd0438ba0b6d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_59cb74e423758ede", function() { return __wbg_new_59cb74e423758ede; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_stack_558ba5917b466edd", function() { return __wbg_stack_558ba5917b466edd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_error_4bb6c2a97407129a", function() { return __wbg_error_4bb6c2a97407129a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return __wbindgen_object_drop_ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return __wbindgen_throw; });
/* harmony import */ var _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_canvas_bitblt_bg.wasm */ "../pkg/wasm_canvas_bitblt_bg.wasm");


let cachedTextDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint8Memory = new Uint8Array(_wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

const heap = new Array(32);

heap.fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function getObject(idx) { return heap[idx]; }

let WASM_VECTOR_LEN = 0;

let cachedTextEncoder = new TextEncoder('utf-8');

let passStringToWasm;
if (typeof cachedTextEncoder.encodeInto === 'function') {
    passStringToWasm = function(arg) {


        let size = arg.length;
        let ptr = _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"](size);
        let offset = 0;
        {
            const mem = getUint8Memory();
            for (; offset < arg.length; offset++) {
                const code = arg.charCodeAt(offset);
                if (code > 0x7F) break;
                mem[ptr + offset] = code;
            }
        }

        if (offset !== arg.length) {
            arg = arg.slice(offset);
            ptr = _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"](ptr, size, size = offset + arg.length * 3);
            const view = getUint8Memory().subarray(ptr + offset, ptr + size);
            const ret = cachedTextEncoder.encodeInto(arg, view);

            offset += ret.written;
        }
        WASM_VECTOR_LEN = offset;
        return ptr;
    };
} else {
    passStringToWasm = function(arg) {


        let size = arg.length;
        let ptr = _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"](size);
        let offset = 0;
        {
            const mem = getUint8Memory();
            for (; offset < arg.length; offset++) {
                const code = arg.charCodeAt(offset);
                if (code > 0x7F) break;
                mem[ptr + offset] = code;
            }
        }

        if (offset !== arg.length) {
            const buf = cachedTextEncoder.encode(arg.slice(offset));
            ptr = _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"](ptr, size, size = offset + buf.length);
            getUint8Memory().set(buf, ptr + offset);
            offset += buf.length;
        }
        WASM_VECTOR_LEN = offset;
        return ptr;
    };
}

let cachegetInt32Memory = null;
function getInt32Memory() {
    if (cachegetInt32Memory === null || cachegetInt32Memory.buffer !== _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetInt32Memory = new Int32Array(_wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetInt32Memory;
}

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}
/**
*/
class Screen {

    static __wrap(ptr) {
        const obj = Object.create(Screen.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_screen_free"](ptr);
    }
    /**
    * @param {number} width
    * @param {number} height
    * @returns {Screen}
    */
    constructor(width, height) {
        const ret = _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["screen_new"](width, height);
        return Screen.__wrap(ret);
    }
    /**
    * @param {number} width
    * @param {number} height
    * @returns {number}
    */
    add_resource(width, height) {
        const ret = _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["screen_add_resource"](this.ptr, width, height);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    get_canvas_bitmap_ptr() {
        const ret = _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["screen_get_canvas_bitmap_ptr"](this.ptr);
        return ret;
    }
    /**
    * @param {number} no
    * @returns {number}
    */
    get_resource_bitmap_ptr(no) {
        const ret = _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["screen_get_resource_bitmap_ptr"](this.ptr, no);
        return ret;
    }
    /**
    */
    init() {
        _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["screen_init"](this.ptr);
    }
    /**
    */
    update() {
        _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["screen_update"](this.ptr);
    }
    /**
    */
    draw() {
        _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["screen_draw"](this.ptr);
    }
}

const __wbg_log_cec2cd0438ba0b6d = function(arg0, arg1) {
    console.log(getStringFromWasm(arg0, arg1));
};

const __wbg_new_59cb74e423758ede = function() {
    const ret = new Error();
    return addHeapObject(ret);
};

const __wbg_stack_558ba5917b466edd = function(arg0, arg1) {
    const ret = getObject(arg1).stack;
    const ret0 = passStringToWasm(ret);
    const ret1 = WASM_VECTOR_LEN;
    getInt32Memory()[arg0 / 4 + 0] = ret0;
    getInt32Memory()[arg0 / 4 + 1] = ret1;
};

const __wbg_error_4bb6c2a97407129a = function(arg0, arg1) {
    const v0 = getStringFromWasm(arg0, arg1).slice();
    _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](arg0, arg1 * 1);
    console.error(v0);
};

const __wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm(arg0, arg1));
};



/***/ }),

/***/ "../pkg/wasm_canvas_bitblt_bg.wasm":
/*!*****************************************!*\
  !*** ../pkg/wasm_canvas_bitblt_bg.wasm ***!
  \*****************************************/
/*! exports provided: memory, __wbg_screen_free, screen_new, screen_add_resource, screen_get_canvas_bitmap_ptr, screen_get_resource_bitmap_ptr, screen_init, screen_update, screen_draw, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];
__webpack_require__.r(exports);
// export exports from WebAssembly module
for(var name in wasmExports) if(name != "__webpack_init__") exports[name] = wasmExports[name];
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_canvas_bitblt.js */ "../pkg/wasm_canvas_bitblt.js");


// exec wasm module
wasmExports["__webpack_init__"]()

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var wasm_canvas_bitblt_1 = __webpack_require__(/*! wasm-canvas-bitblt */ "../pkg/wasm_canvas_bitblt.js");
var wasm_canvas_bitblt_bg_1 = __webpack_require__(/*! wasm-canvas-bitblt/wasm_canvas_bitblt_bg */ "../pkg/wasm_canvas_bitblt_bg.wasm");
/**
 * WebAssembly Bitblt Test
 */
var Bitblt = /** @class */ (function () {
    /**
     * constructor
     */
    function Bitblt() {
        // TODO: image file only
        this.resources = {
            "resources/rustacean-flat-happy-768x512.png": null
        };
        this.canvas = document.getElementById('screen');
        this.canvas.setAttribute('width', "" + Bitblt.CANVAS_WIDTH);
        this.canvas.setAttribute('height', "" + Bitblt.CANVAS_HEIGHT);
        // for device width
        var pixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
        if (pixelRatio > 1 && window.screen.width < Bitblt.CANVAS_WIDTH) {
            this.canvas.style.width = 320 + "px";
            this.canvas.style.height = 240 + "px";
        }
        // create canvas context
        this.canvasContext = this.canvas.getContext('2d');
        this.canvasImageData = this.canvasContext.createImageData(Bitblt.CANVAS_WIDTH, Bitblt.CANVAS_HEIGHT);
        // hello wasm world
        this.screen = new wasm_canvas_bitblt_1.Screen(Bitblt.CANVAS_WIDTH, Bitblt.CANVAS_HEIGHT);
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
    Bitblt.prototype.start = function () {
        this.load();
        this.loop();
    };
    /**
     * loop
     */
    Bitblt.prototype.loop = function () {
        var _this = this;
        // resource wait
        if (this.resourceLoaded) {
            // update (TODO: split update/draw)
            this.screen.update();
            // draw
            this.screen.draw();
            // recreate Uint8Array
            // https://github.com/emscripten-core/emscripten/issues/6747
            this.imageData = new Uint8Array(wasm_canvas_bitblt_bg_1.memory.buffer, this.screen.get_canvas_bitmap_ptr(), Bitblt.CANVAS_WIDTH * Bitblt.CANVAS_HEIGHT * Bitblt.RGBA);
            // draw wasm calculated bitmap
            this.canvasImageData.data.set(this.imageData);
            this.canvasContext.putImageData(this.canvasImageData, 0, 0);
            // print fps
            this.frame++;
            if (new Date().getTime() - this.startTime >= 1000) {
                this.fps = this.frame;
                this.frame = 0;
                this.startTime = new Date().getTime();
            }
            this.canvasContext.fillText("fps: " + this.fps, 0, 16);
        }
        // next tick
        this.animeId = requestAnimationFrame(function () { return _this.loop(); });
    };
    /**
     * resource load (sync)
     */
    Bitblt.prototype.load = function () {
        var _this = this;
        this.loadedCount = 0;
        this.resourceLoaded = false;
        var _loop_1 = function (resource) {
            var image = new Image();
            image.addEventListener('load', function () {
                // create resource hidden canvas
                var canvas = document.createElement('canvas');
                canvas.width = image.width;
                canvas.height = image.height;
                var context = canvas.getContext('2d');
                // draw image
                context.drawImage(image, 0, 0);
                // get image typedarray
                var resourceImageData = context.getImageData(0, 0, image.width, image.height);
                // alloc wasm memory
                var resourceNumber = _this.screen.add_resource(image.width, image.height);
                var imageData = new Uint8Array(wasm_canvas_bitblt_bg_1.memory.buffer, _this.screen.get_resource_bitmap_ptr(_this.loadedCount), image.width * image.height * Bitblt.RGBA);
                // resource bitmap trancefar
                imageData.set(resourceImageData.data);
                // save resource number
                _this.resources[resource] = resourceNumber;
                _this.loadedCount++;
                // remove hidden canvas
                canvas.remove();
            });
            image.src = resource;
        };
        for (var resource in this.resources) {
            _loop_1(resource);
        }
        // wait resource loaded
        var wait = window.setInterval(function () {
            if (Object.keys(_this.resources).length <= _this.loadedCount) {
                window.clearInterval(wait);
                // application init
                _this.screen.init();
                // go
                _this.resourceLoaded = true;
            }
        }, 10);
    };
    Bitblt.CANVAS_WIDTH = 768;
    Bitblt.CANVAS_HEIGHT = 576;
    Bitblt.RGBA = 4;
    return Bitblt;
}());
new Bitblt().start();


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vcGtnL3dhc21fY2FudmFzX2JpdGJsdC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFEOztBQUVyRDs7QUFFQTtBQUNBO0FBQ0EsdUVBQXVFLGtFQUFXO0FBQ2xGLDZDQUE2QyxrRUFBVztBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsa0JBQWtCOztBQUUzQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0Esa0JBQWtCLDZFQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQiw4RUFBdUI7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQTtBQUNBLGtCQUFrQiw2RUFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsOEVBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1RUFBdUUsa0VBQVc7QUFDbEYsNkNBQTZDLGtFQUFXO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQVEsNkVBQXNCO0FBQzlCO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0Esb0JBQW9CLHNFQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxvQkFBb0IsK0VBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0Esb0JBQW9CLHdGQUFpQztBQUNyRDtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxvQkFBb0IsMEZBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVFQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseUVBQWtCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1RUFBZ0I7QUFDeEI7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLElBQUksMkVBQW9CO0FBQ3hCO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqTkEseUdBQTRDO0FBQzVDLHVJQUFrRTtBQUVsRTs7R0FFRztBQUNIO0lBdUJJOztPQUVHO0lBQ0g7UUFWQSx3QkFBd0I7UUFDaEIsY0FBUyxHQUErQjtZQUM1Qyw0Q0FBNEMsRUFBRSxJQUFJO1NBQ3JELENBQUM7UUFRRSxJQUFJLENBQUMsTUFBTSxHQUFzQixRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFHLE1BQU0sQ0FBQyxZQUFjLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsS0FBRyxNQUFNLENBQUMsYUFBZSxDQUFDLENBQUM7UUFDOUQsbUJBQW1CO1FBQ25CLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkUsSUFBRyxVQUFVLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7WUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7U0FDekM7UUFDRCx3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUNyRCxNQUFNLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvQyxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLDJCQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEUsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1FBQzVDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxzQkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7T0FFRztJQUNJLHFCQUFJLEdBQVg7UUFBQSxpQkEyQkM7UUExQkcsZ0JBQWdCO1FBQ2hCLElBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNwQixtQ0FBbUM7WUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNyQixPQUFPO1lBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNuQixzQkFBc0I7WUFDdEIsNERBQTREO1lBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxVQUFVLENBQzNCLDhCQUFNLENBQUMsTUFBTSxFQUNiLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsRUFDbkMsTUFBTSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5RCw4QkFBOEI7WUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1RCxZQUFZO1lBQ1osSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2IsSUFBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO2dCQUM5QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN6QztZQUNELElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUMxRDtRQUNELFlBQVk7UUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLHFCQUFxQixDQUFDLGNBQU0sWUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRDs7T0FFRztJQUNLLHFCQUFJLEdBQVo7UUFBQSxpQkF5Q0M7UUF4Q0csSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7Z0NBQ3BCLFFBQVE7WUFDWixJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7Z0JBQzNCLGdDQUFnQztnQkFDaEMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7Z0JBQzdDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztnQkFDM0IsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUM3QixJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxhQUFhO2dCQUNiLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsdUJBQXVCO2dCQUN2QixJQUFJLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUUsb0JBQW9CO2dCQUNwQixJQUFJLGNBQWMsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekUsSUFBSSxTQUFTLEdBQUcsSUFBSSxVQUFVLENBQzFCLDhCQUFNLENBQUMsTUFBTSxFQUNiLEtBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxFQUNyRCxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5Qyw0QkFBNEI7Z0JBQzVCLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RDLHVCQUF1QjtnQkFDdkIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxjQUFjLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbkIsdUJBQXVCO2dCQUN2QixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFLLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQzs7UUExQnpCLEtBQUksSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVM7b0JBQTFCLFFBQVE7U0EyQmY7UUFDRCx1QkFBdUI7UUFDdkIsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUMxQixJQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFJLENBQUMsV0FBVyxFQUFFO2dCQUN2RCxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMzQixtQkFBbUI7Z0JBQ25CLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ25CLEtBQUs7Z0JBQ0wsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7YUFDOUI7UUFDTCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBckllLG1CQUFZLEdBQUcsR0FBRyxDQUFDO0lBQ25CLG9CQUFhLEdBQUcsR0FBRyxDQUFDO0lBQ3BCLFdBQUksR0FBRyxDQUFDLENBQUM7SUFvSTdCLGFBQUM7Q0FBQTtBQUVELElBQUksTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMiLCJmaWxlIjoiMC5ib290c3RyYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB3YXNtIGZyb20gJy4vd2FzbV9jYW52YXNfYml0Ymx0X2JnLndhc20nO1xuXG5sZXQgY2FjaGVkVGV4dERlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoJ3V0Zi04Jyk7XG5cbmxldCBjYWNoZWdldFVpbnQ4TWVtb3J5ID0gbnVsbDtcbmZ1bmN0aW9uIGdldFVpbnQ4TWVtb3J5KCkge1xuICAgIGlmIChjYWNoZWdldFVpbnQ4TWVtb3J5ID09PSBudWxsIHx8IGNhY2hlZ2V0VWludDhNZW1vcnkuYnVmZmVyICE9PSB3YXNtLm1lbW9yeS5idWZmZXIpIHtcbiAgICAgICAgY2FjaGVnZXRVaW50OE1lbW9yeSA9IG5ldyBVaW50OEFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWdldFVpbnQ4TWVtb3J5O1xufVxuXG5mdW5jdGlvbiBnZXRTdHJpbmdGcm9tV2FzbShwdHIsIGxlbikge1xuICAgIHJldHVybiBjYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoZ2V0VWludDhNZW1vcnkoKS5zdWJhcnJheShwdHIsIHB0ciArIGxlbikpO1xufVxuXG5jb25zdCBoZWFwID0gbmV3IEFycmF5KDMyKTtcblxuaGVhcC5maWxsKHVuZGVmaW5lZCk7XG5cbmhlYXAucHVzaCh1bmRlZmluZWQsIG51bGwsIHRydWUsIGZhbHNlKTtcblxubGV0IGhlYXBfbmV4dCA9IGhlYXAubGVuZ3RoO1xuXG5mdW5jdGlvbiBhZGRIZWFwT2JqZWN0KG9iaikge1xuICAgIGlmIChoZWFwX25leHQgPT09IGhlYXAubGVuZ3RoKSBoZWFwLnB1c2goaGVhcC5sZW5ndGggKyAxKTtcbiAgICBjb25zdCBpZHggPSBoZWFwX25leHQ7XG4gICAgaGVhcF9uZXh0ID0gaGVhcFtpZHhdO1xuXG4gICAgaGVhcFtpZHhdID0gb2JqO1xuICAgIHJldHVybiBpZHg7XG59XG5cbmZ1bmN0aW9uIGdldE9iamVjdChpZHgpIHsgcmV0dXJuIGhlYXBbaWR4XTsgfVxuXG5sZXQgV0FTTV9WRUNUT1JfTEVOID0gMDtcblxubGV0IGNhY2hlZFRleHRFbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCd1dGYtOCcpO1xuXG5sZXQgcGFzc1N0cmluZ1RvV2FzbTtcbmlmICh0eXBlb2YgY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHBhc3NTdHJpbmdUb1dhc20gPSBmdW5jdGlvbihhcmcpIHtcblxuXG4gICAgICAgIGxldCBzaXplID0gYXJnLmxlbmd0aDtcbiAgICAgICAgbGV0IHB0ciA9IHdhc20uX193YmluZGdlbl9tYWxsb2Moc2l6ZSk7XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBtZW0gPSBnZXRVaW50OE1lbW9yeSgpO1xuICAgICAgICAgICAgZm9yICg7IG9mZnNldCA8IGFyZy5sZW5ndGg7IG9mZnNldCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29kZSA9IGFyZy5jaGFyQ29kZUF0KG9mZnNldCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPiAweDdGKSBicmVhaztcbiAgICAgICAgICAgICAgICBtZW1bcHRyICsgb2Zmc2V0XSA9IGNvZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob2Zmc2V0ICE9PSBhcmcubGVuZ3RoKSB7XG4gICAgICAgICAgICBhcmcgPSBhcmcuc2xpY2Uob2Zmc2V0KTtcbiAgICAgICAgICAgIHB0ciA9IHdhc20uX193YmluZGdlbl9yZWFsbG9jKHB0ciwgc2l6ZSwgc2l6ZSA9IG9mZnNldCArIGFyZy5sZW5ndGggKiAzKTtcbiAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBnZXRVaW50OE1lbW9yeSgpLnN1YmFycmF5KHB0ciArIG9mZnNldCwgcHRyICsgc2l6ZSk7XG4gICAgICAgICAgICBjb25zdCByZXQgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvKGFyZywgdmlldyk7XG5cbiAgICAgICAgICAgIG9mZnNldCArPSByZXQud3JpdHRlbjtcbiAgICAgICAgfVxuICAgICAgICBXQVNNX1ZFQ1RPUl9MRU4gPSBvZmZzZXQ7XG4gICAgICAgIHJldHVybiBwdHI7XG4gICAgfTtcbn0gZWxzZSB7XG4gICAgcGFzc1N0cmluZ1RvV2FzbSA9IGZ1bmN0aW9uKGFyZykge1xuXG5cbiAgICAgICAgbGV0IHNpemUgPSBhcmcubGVuZ3RoO1xuICAgICAgICBsZXQgcHRyID0gd2FzbS5fX3diaW5kZ2VuX21hbGxvYyhzaXplKTtcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IG1lbSA9IGdldFVpbnQ4TWVtb3J5KCk7XG4gICAgICAgICAgICBmb3IgKDsgb2Zmc2V0IDwgYXJnLmxlbmd0aDsgb2Zmc2V0KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2RlID0gYXJnLmNoYXJDb2RlQXQob2Zmc2V0KTtcbiAgICAgICAgICAgICAgICBpZiAoY29kZSA+IDB4N0YpIGJyZWFrO1xuICAgICAgICAgICAgICAgIG1lbVtwdHIgKyBvZmZzZXRdID0gY29kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvZmZzZXQgIT09IGFyZy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcuc2xpY2Uob2Zmc2V0KSk7XG4gICAgICAgICAgICBwdHIgPSB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyhwdHIsIHNpemUsIHNpemUgPSBvZmZzZXQgKyBidWYubGVuZ3RoKTtcbiAgICAgICAgICAgIGdldFVpbnQ4TWVtb3J5KCkuc2V0KGJ1ZiwgcHRyICsgb2Zmc2V0KTtcbiAgICAgICAgICAgIG9mZnNldCArPSBidWYubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIFdBU01fVkVDVE9SX0xFTiA9IG9mZnNldDtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9O1xufVxuXG5sZXQgY2FjaGVnZXRJbnQzMk1lbW9yeSA9IG51bGw7XG5mdW5jdGlvbiBnZXRJbnQzMk1lbW9yeSgpIHtcbiAgICBpZiAoY2FjaGVnZXRJbnQzMk1lbW9yeSA9PT0gbnVsbCB8fCBjYWNoZWdldEludDMyTWVtb3J5LmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0SW50MzJNZW1vcnkgPSBuZXcgSW50MzJBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRJbnQzMk1lbW9yeTtcbn1cblxuZnVuY3Rpb24gZHJvcE9iamVjdChpZHgpIHtcbiAgICBpZiAoaWR4IDwgMzYpIHJldHVybjtcbiAgICBoZWFwW2lkeF0gPSBoZWFwX25leHQ7XG4gICAgaGVhcF9uZXh0ID0gaWR4O1xufVxuXG5mdW5jdGlvbiB0YWtlT2JqZWN0KGlkeCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChpZHgpO1xuICAgIGRyb3BPYmplY3QoaWR4KTtcbiAgICByZXR1cm4gcmV0O1xufVxuLyoqXG4qL1xuZXhwb3J0IGNsYXNzIFNjcmVlbiB7XG5cbiAgICBzdGF0aWMgX193cmFwKHB0cikge1xuICAgICAgICBjb25zdCBvYmogPSBPYmplY3QuY3JlYXRlKFNjcmVlbi5wcm90b3R5cGUpO1xuICAgICAgICBvYmoucHRyID0gcHRyO1xuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgZnJlZSgpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5wdHI7XG4gICAgICAgIHRoaXMucHRyID0gMDtcblxuICAgICAgICB3YXNtLl9fd2JnX3NjcmVlbl9mcmVlKHB0cik7XG4gICAgfVxuICAgIC8qKlxuICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gICAgKiBAcmV0dXJucyB7U2NyZWVufVxuICAgICovXG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xuICAgICAgICBjb25zdCByZXQgPSB3YXNtLnNjcmVlbl9uZXcod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHJldHVybiBTY3JlZW4uX193cmFwKHJldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgYWRkX3Jlc291cmNlKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS5zY3JlZW5fYWRkX3Jlc291cmNlKHRoaXMucHRyLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHJldCA+Pj4gMDtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgZ2V0X2NhbnZhc19iaXRtYXBfcHRyKCkge1xuICAgICAgICBjb25zdCByZXQgPSB3YXNtLnNjcmVlbl9nZXRfY2FudmFzX2JpdG1hcF9wdHIodGhpcy5wdHIpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBub1xuICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAqL1xuICAgIGdldF9yZXNvdXJjZV9iaXRtYXBfcHRyKG5vKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20uc2NyZWVuX2dldF9yZXNvdXJjZV9iaXRtYXBfcHRyKHRoaXMucHRyLCBubyk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgd2FzbS5zY3JlZW5faW5pdCh0aGlzLnB0cik7XG4gICAgfVxuICAgIC8qKlxuICAgICovXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB3YXNtLnNjcmVlbl91cGRhdGUodGhpcy5wdHIpO1xuICAgIH1cbiAgICAvKipcbiAgICAqL1xuICAgIGRyYXcoKSB7XG4gICAgICAgIHdhc20uc2NyZWVuX2RyYXcodGhpcy5wdHIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IF9fd2JnX2xvZ19jZWMyY2QwNDM4YmEwYjZkID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIGNvbnNvbGUubG9nKGdldFN0cmluZ0Zyb21XYXNtKGFyZzAsIGFyZzEpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19uZXdfNTljYjc0ZTQyMzc1OGVkZSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJldCA9IG5ldyBFcnJvcigpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193Ymdfc3RhY2tfNTU4YmE1OTE3YjQ2NmVkZCA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMSkuc3RhY2s7XG4gICAgY29uc3QgcmV0MCA9IHBhc3NTdHJpbmdUb1dhc20ocmV0KTtcbiAgICBjb25zdCByZXQxID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgIGdldEludDMyTWVtb3J5KClbYXJnMCAvIDQgKyAwXSA9IHJldDA7XG4gICAgZ2V0SW50MzJNZW1vcnkoKVthcmcwIC8gNCArIDFdID0gcmV0MTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19lcnJvcl80YmI2YzJhOTc0MDcxMjlhID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHYwID0gZ2V0U3RyaW5nRnJvbVdhc20oYXJnMCwgYXJnMSkuc2xpY2UoKTtcbiAgICB3YXNtLl9fd2JpbmRnZW5fZnJlZShhcmcwLCBhcmcxICogMSk7XG4gICAgY29uc29sZS5lcnJvcih2MCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdGFrZU9iamVjdChhcmcwKTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX3Rocm93ID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihnZXRTdHJpbmdGcm9tV2FzbShhcmcwLCBhcmcxKSk7XG59O1xuXG4iLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tIFwid2FzbS1jYW52YXMtYml0Ymx0XCI7XG5pbXBvcnQgeyBtZW1vcnkgfSBmcm9tIFwid2FzbS1jYW52YXMtYml0Ymx0L3dhc21fY2FudmFzX2JpdGJsdF9iZ1wiO1xuXG4vKipcbiAqIFdlYkFzc2VtYmx5IEJpdGJsdCBUZXN0XG4gKi9cbmNsYXNzIEJpdGJsdCB7XG4gICAgc3RhdGljIHJlYWRvbmx5IENBTlZBU19XSURUSCA9IDc2ODtcbiAgICBzdGF0aWMgcmVhZG9ubHkgQ0FOVkFTX0hFSUdIVCA9IDU3NjtcbiAgICBzdGF0aWMgcmVhZG9ubHkgUkdCQSA9IDQ7XG5cbiAgICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjYW52YXNDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSBjYW52YXNJbWFnZURhdGE6IEltYWdlRGF0YTtcbiAgICBwcml2YXRlIHNjcmVlbjogU2NyZWVuO1xuICAgIHByaXZhdGUgaW1hZ2VEYXRhOiBVaW50OEFycmF5O1xuXG4gICAgcHJpdmF0ZSBhbmltZUlkOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlcjtcbiAgICBwcml2YXRlIGZyYW1lOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBmcHM6IG51bWJlcjtcblxuICAgIC8vIFRPRE86IGltYWdlIGZpbGUgb25seVxuICAgIHByaXZhdGUgcmVzb3VyY2VzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlcjsgfSA9IHtcbiAgICAgICAgXCJyZXNvdXJjZXMvcnVzdGFjZWFuLWZsYXQtaGFwcHktNzY4eDUxMi5wbmdcIjogbnVsbFxuICAgIH07XG4gICAgcHJpdmF0ZSBsb2FkZWRDb3VudDogbnVtYmVyO1xuICAgIHByaXZhdGUgcmVzb3VyY2VMb2FkZWQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NyZWVuJyk7XG4gICAgICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBgJHtCaXRibHQuQ0FOVkFTX1dJRFRIfWApO1xuICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGAke0JpdGJsdC5DQU5WQVNfSEVJR0hUfWApO1xuICAgICAgICAvLyBmb3IgZGV2aWNlIHdpZHRoXG4gICAgICAgIGxldCBwaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gPyB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA6IDE7XG4gICAgICAgIGlmKHBpeGVsUmF0aW8gPiAxICYmIHdpbmRvdy5zY3JlZW4ud2lkdGggPCBCaXRibHQuQ0FOVkFTX1dJRFRIKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IDMyMCArIFwicHhcIjtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IDI0MCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBjcmVhdGUgY2FudmFzIGNvbnRleHRcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5jYW52YXNJbWFnZURhdGEgPSB0aGlzLmNhbnZhc0NvbnRleHQuY3JlYXRlSW1hZ2VEYXRhKFxuICAgICAgICAgICAgQml0Ymx0LkNBTlZBU19XSURUSCwgQml0Ymx0LkNBTlZBU19IRUlHSFQpO1xuICAgICAgICAvLyBoZWxsbyB3YXNtIHdvcmxkXG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IFNjcmVlbihCaXRibHQuQ0FOVkFTX1dJRFRILCBCaXRibHQuQ0FOVkFTX0hFSUdIVCk7XG4gICAgICAgIC8vIGZvciBmcHMgcHJpbnRcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmZvbnQgPSBcIjE2cHggc2Fucy1zZXJpZlwiO1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbFN0eWxlID0gXCIjMGYwXCI7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHRoaXMuZnBzID0gMDtcbiAgICAgICAgdGhpcy5mcmFtZSA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc3RhcnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICB0aGlzLmxvb3AoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBsb29wXG4gICAgICovXG4gICAgcHVibGljIGxvb3AoKSB7XG4gICAgICAgIC8vIHJlc291cmNlIHdhaXRcbiAgICAgICAgaWYodGhpcy5yZXNvdXJjZUxvYWRlZCkge1xuICAgICAgICAgICAgLy8gdXBkYXRlIChUT0RPOiBzcGxpdCB1cGRhdGUvZHJhdylcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuLnVwZGF0ZSgpO1xuICAgICAgICAgICAgLy8gZHJhd1xuICAgICAgICAgICAgdGhpcy5zY3JlZW4uZHJhdygpO1xuICAgICAgICAgICAgLy8gcmVjcmVhdGUgVWludDhBcnJheVxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2Vtc2NyaXB0ZW4tY29yZS9lbXNjcmlwdGVuL2lzc3Vlcy82NzQ3XG4gICAgICAgICAgICB0aGlzLmltYWdlRGF0YSA9IG5ldyBVaW50OEFycmF5KFxuICAgICAgICAgICAgICAgIG1lbW9yeS5idWZmZXIsXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JlZW4uZ2V0X2NhbnZhc19iaXRtYXBfcHRyKCksXG4gICAgICAgICAgICAgICAgQml0Ymx0LkNBTlZBU19XSURUSCAqIEJpdGJsdC5DQU5WQVNfSEVJR0hUICogQml0Ymx0LlJHQkEpO1xuICAgICAgICAgICAgLy8gZHJhdyB3YXNtIGNhbGN1bGF0ZWQgYml0bWFwXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0ltYWdlRGF0YS5kYXRhLnNldCh0aGlzLmltYWdlRGF0YSk7XG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQucHV0SW1hZ2VEYXRhKHRoaXMuY2FudmFzSW1hZ2VEYXRhLCAwLCAwKTtcbiAgICAgICAgICAgIC8vIHByaW50IGZwc1xuICAgICAgICAgICAgdGhpcy5mcmFtZSsrO1xuICAgICAgICAgICAgaWYobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSA+PSAxMDAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mcHMgPSB0aGlzLmZyYW1lO1xuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWUgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbFRleHQoXCJmcHM6IFwiICsgdGhpcy5mcHMsIDAsIDE2KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBuZXh0IHRpY2tcbiAgICAgICAgdGhpcy5hbmltZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMubG9vcCgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXNvdXJjZSBsb2FkIChzeW5jKVxuICAgICAqL1xuICAgIHByaXZhdGUgbG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkZWRDb3VudCA9IDA7XG4gICAgICAgIHRoaXMucmVzb3VyY2VMb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yKGxldCByZXNvdXJjZSBpbiB0aGlzLnJlc291cmNlcykge1xuICAgICAgICAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSByZXNvdXJjZSBoaWRkZW4gY2FudmFzXG4gICAgICAgICAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gaW1hZ2Uud2lkdGg7XG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGltYWdlLmhlaWdodDtcbiAgICAgICAgICAgICAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICAgIC8vIGRyYXcgaW1hZ2VcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IGltYWdlIHR5cGVkYXJyYXlcbiAgICAgICAgICAgICAgICBsZXQgcmVzb3VyY2VJbWFnZURhdGEgPSBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAvLyBhbGxvYyB3YXNtIG1lbW9yeVxuICAgICAgICAgICAgICAgIGxldCByZXNvdXJjZU51bWJlciA9IHRoaXMuc2NyZWVuLmFkZF9yZXNvdXJjZShpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBsZXQgaW1hZ2VEYXRhID0gbmV3IFVpbnQ4QXJyYXkoXG4gICAgICAgICAgICAgICAgICAgIG1lbW9yeS5idWZmZXIsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuLmdldF9yZXNvdXJjZV9iaXRtYXBfcHRyKHRoaXMubG9hZGVkQ291bnQpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZS53aWR0aCAqIGltYWdlLmhlaWdodCAqIEJpdGJsdC5SR0JBKTtcbiAgICAgICAgICAgICAgICAvLyByZXNvdXJjZSBiaXRtYXAgdHJhbmNlZmFyXG4gICAgICAgICAgICAgICAgaW1hZ2VEYXRhLnNldChyZXNvdXJjZUltYWdlRGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICAvLyBzYXZlIHJlc291cmNlIG51bWJlclxuICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2VzW3Jlc291cmNlXSA9IHJlc291cmNlTnVtYmVyO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgaGlkZGVuIGNhbnZhc1xuICAgICAgICAgICAgICAgIGNhbnZhcy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gcmVzb3VyY2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2FpdCByZXNvdXJjZSBsb2FkZWRcbiAgICAgICAgbGV0IHdhaXQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYoT2JqZWN0LmtleXModGhpcy5yZXNvdXJjZXMpLmxlbmd0aCA8PSB0aGlzLmxvYWRlZENvdW50KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwod2FpdCk7XG4gICAgICAgICAgICAgICAgLy8gYXBwbGljYXRpb24gaW5pdFxuICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuLmluaXQoKTtcbiAgICAgICAgICAgICAgICAvLyBnb1xuICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2VMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMCk7XG4gICAgfVxufVxuXG5uZXcgQml0Ymx0KCkuc3RhcnQoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=