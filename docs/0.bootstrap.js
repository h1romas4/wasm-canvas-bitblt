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
    */
    add_resource(width, height) {
        _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["screen_add_resource"](this.ptr, width, height);
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
/*! exports provided: memory, __wbg_screen_free, screen_new, screen_add_resource, screen_get_canvas_bitmap_ptr, screen_get_resource_bitmap_ptr, screen_update, screen_draw, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free */
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
                _this.screen.add_resource(image.width, image.height);
                var imageData = new Uint8Array(wasm_canvas_bitblt_bg_1.memory.buffer, _this.screen.get_resource_bitmap_ptr(_this.loadedCount), image.width * image.height * Bitblt.RGBA);
                // resource bitmap trancefar
                imageData.set(resourceImageData.data);
                // save resource number
                _this.resources[resource] = _this.loadedCount;
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
                _this.resourceLoaded = true;
                window.clearInterval(wait);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vcGtnL3dhc21fY2FudmFzX2JpdGJsdC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFEOztBQUVyRDs7QUFFQTtBQUNBO0FBQ0EsdUVBQXVFLGtFQUFXO0FBQ2xGLDZDQUE2QyxrRUFBVztBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsa0JBQWtCOztBQUUzQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0Esa0JBQWtCLDZFQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQiw4RUFBdUI7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQTtBQUNBLGtCQUFrQiw2RUFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsOEVBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1RUFBdUUsa0VBQVc7QUFDbEYsNkNBQTZDLGtFQUFXO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQVEsNkVBQXNCO0FBQzlCO0FBQ0E7QUFD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dHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHdhc20gZnJvbSAnLi93YXNtX2NhbnZhc19iaXRibHRfYmcud2FzbSc7XG5cbmxldCBjYWNoZWRUZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigndXRmLTgnKTtcblxubGV0IGNhY2hlZ2V0VWludDhNZW1vcnkgPSBudWxsO1xuZnVuY3Rpb24gZ2V0VWludDhNZW1vcnkoKSB7XG4gICAgaWYgKGNhY2hlZ2V0VWludDhNZW1vcnkgPT09IG51bGwgfHwgY2FjaGVnZXRVaW50OE1lbW9yeS5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikge1xuICAgICAgICBjYWNoZWdldFVpbnQ4TWVtb3J5ID0gbmV3IFVpbnQ4QXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0VWludDhNZW1vcnk7XG59XG5cbmZ1bmN0aW9uIGdldFN0cmluZ0Zyb21XYXNtKHB0ciwgbGVuKSB7XG4gICAgcmV0dXJuIGNhY2hlZFRleHREZWNvZGVyLmRlY29kZShnZXRVaW50OE1lbW9yeSgpLnN1YmFycmF5KHB0ciwgcHRyICsgbGVuKSk7XG59XG5cbmNvbnN0IGhlYXAgPSBuZXcgQXJyYXkoMzIpO1xuXG5oZWFwLmZpbGwodW5kZWZpbmVkKTtcblxuaGVhcC5wdXNoKHVuZGVmaW5lZCwgbnVsbCwgdHJ1ZSwgZmFsc2UpO1xuXG5sZXQgaGVhcF9uZXh0ID0gaGVhcC5sZW5ndGg7XG5cbmZ1bmN0aW9uIGFkZEhlYXBPYmplY3Qob2JqKSB7XG4gICAgaWYgKGhlYXBfbmV4dCA9PT0gaGVhcC5sZW5ndGgpIGhlYXAucHVzaChoZWFwLmxlbmd0aCArIDEpO1xuICAgIGNvbnN0IGlkeCA9IGhlYXBfbmV4dDtcbiAgICBoZWFwX25leHQgPSBoZWFwW2lkeF07XG5cbiAgICBoZWFwW2lkeF0gPSBvYmo7XG4gICAgcmV0dXJuIGlkeDtcbn1cblxuZnVuY3Rpb24gZ2V0T2JqZWN0KGlkeCkgeyByZXR1cm4gaGVhcFtpZHhdOyB9XG5cbmxldCBXQVNNX1ZFQ1RPUl9MRU4gPSAwO1xuXG5sZXQgY2FjaGVkVGV4dEVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoJ3V0Zi04Jyk7XG5cbmxldCBwYXNzU3RyaW5nVG9XYXNtO1xuaWYgKHR5cGVvZiBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcGFzc1N0cmluZ1RvV2FzbSA9IGZ1bmN0aW9uKGFyZykge1xuXG5cbiAgICAgICAgbGV0IHNpemUgPSBhcmcubGVuZ3RoO1xuICAgICAgICBsZXQgcHRyID0gd2FzbS5fX3diaW5kZ2VuX21hbGxvYyhzaXplKTtcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IG1lbSA9IGdldFVpbnQ4TWVtb3J5KCk7XG4gICAgICAgICAgICBmb3IgKDsgb2Zmc2V0IDwgYXJnLmxlbmd0aDsgb2Zmc2V0KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2RlID0gYXJnLmNoYXJDb2RlQXQob2Zmc2V0KTtcbiAgICAgICAgICAgICAgICBpZiAoY29kZSA+IDB4N0YpIGJyZWFrO1xuICAgICAgICAgICAgICAgIG1lbVtwdHIgKyBvZmZzZXRdID0gY29kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvZmZzZXQgIT09IGFyZy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFyZyA9IGFyZy5zbGljZShvZmZzZXQpO1xuICAgICAgICAgICAgcHRyID0gd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MocHRyLCBzaXplLCBzaXplID0gb2Zmc2V0ICsgYXJnLmxlbmd0aCAqIDMpO1xuICAgICAgICAgICAgY29uc3QgdmlldyA9IGdldFVpbnQ4TWVtb3J5KCkuc3ViYXJyYXkocHRyICsgb2Zmc2V0LCBwdHIgKyBzaXplKTtcbiAgICAgICAgICAgIGNvbnN0IHJldCA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8oYXJnLCB2aWV3KTtcblxuICAgICAgICAgICAgb2Zmc2V0ICs9IHJldC53cml0dGVuO1xuICAgICAgICB9XG4gICAgICAgIFdBU01fVkVDVE9SX0xFTiA9IG9mZnNldDtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9O1xufSBlbHNlIHtcbiAgICBwYXNzU3RyaW5nVG9XYXNtID0gZnVuY3Rpb24oYXJnKSB7XG5cblxuICAgICAgICBsZXQgc2l6ZSA9IGFyZy5sZW5ndGg7XG4gICAgICAgIGxldCBwdHIgPSB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jKHNpemUpO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbWVtID0gZ2V0VWludDhNZW1vcnkoKTtcbiAgICAgICAgICAgIGZvciAoOyBvZmZzZXQgPCBhcmcubGVuZ3RoOyBvZmZzZXQrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBhcmcuY2hhckNvZGVBdChvZmZzZXQpO1xuICAgICAgICAgICAgICAgIGlmIChjb2RlID4gMHg3RikgYnJlYWs7XG4gICAgICAgICAgICAgICAgbWVtW3B0ciArIG9mZnNldF0gPSBjb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9mZnNldCAhPT0gYXJnLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgYnVmID0gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlKGFyZy5zbGljZShvZmZzZXQpKTtcbiAgICAgICAgICAgIHB0ciA9IHdhc20uX193YmluZGdlbl9yZWFsbG9jKHB0ciwgc2l6ZSwgc2l6ZSA9IG9mZnNldCArIGJ1Zi5sZW5ndGgpO1xuICAgICAgICAgICAgZ2V0VWludDhNZW1vcnkoKS5zZXQoYnVmLCBwdHIgKyBvZmZzZXQpO1xuICAgICAgICAgICAgb2Zmc2V0ICs9IGJ1Zi5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgV0FTTV9WRUNUT1JfTEVOID0gb2Zmc2V0O1xuICAgICAgICByZXR1cm4gcHRyO1xuICAgIH07XG59XG5cbmxldCBjYWNoZWdldEludDMyTWVtb3J5ID0gbnVsbDtcbmZ1bmN0aW9uIGdldEludDMyTWVtb3J5KCkge1xuICAgIGlmIChjYWNoZWdldEludDMyTWVtb3J5ID09PSBudWxsIHx8IGNhY2hlZ2V0SW50MzJNZW1vcnkuYnVmZmVyICE9PSB3YXNtLm1lbW9yeS5idWZmZXIpIHtcbiAgICAgICAgY2FjaGVnZXRJbnQzMk1lbW9yeSA9IG5ldyBJbnQzMkFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWdldEludDMyTWVtb3J5O1xufVxuXG5mdW5jdGlvbiBkcm9wT2JqZWN0KGlkeCkge1xuICAgIGlmIChpZHggPCAzNikgcmV0dXJuO1xuICAgIGhlYXBbaWR4XSA9IGhlYXBfbmV4dDtcbiAgICBoZWFwX25leHQgPSBpZHg7XG59XG5cbmZ1bmN0aW9uIHRha2VPYmplY3QoaWR4KSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGlkeCk7XG4gICAgZHJvcE9iamVjdChpZHgpO1xuICAgIHJldHVybiByZXQ7XG59XG4vKipcbiovXG5leHBvcnQgY2xhc3MgU2NyZWVuIHtcblxuICAgIHN0YXRpYyBfX3dyYXAocHRyKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IE9iamVjdC5jcmVhdGUoU2NyZWVuLnByb3RvdHlwZSk7XG4gICAgICAgIG9iai5wdHIgPSBwdHI7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBmcmVlKCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLnB0cjtcbiAgICAgICAgdGhpcy5wdHIgPSAwO1xuXG4gICAgICAgIHdhc20uX193Ymdfc2NyZWVuX2ZyZWUocHRyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAgICAqIEByZXR1cm5zIHtTY3JlZW59XG4gICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20uc2NyZWVuX25ldyh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIFNjcmVlbi5fX3dyYXAocmV0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAgICAqL1xuICAgIGFkZF9yZXNvdXJjZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHdhc20uc2NyZWVuX2FkZF9yZXNvdXJjZSh0aGlzLnB0ciwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAqL1xuICAgIGdldF9jYW52YXNfYml0bWFwX3B0cigpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS5zY3JlZW5fZ2V0X2NhbnZhc19iaXRtYXBfcHRyKHRoaXMucHRyKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbm9cbiAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBnZXRfcmVzb3VyY2VfYml0bWFwX3B0cihubykge1xuICAgICAgICBjb25zdCByZXQgPSB3YXNtLnNjcmVlbl9nZXRfcmVzb3VyY2VfYml0bWFwX3B0cih0aGlzLnB0ciwgbm8pO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICAvKipcbiAgICAqL1xuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgd2FzbS5zY3JlZW5fdXBkYXRlKHRoaXMucHRyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKi9cbiAgICBkcmF3KCkge1xuICAgICAgICB3YXNtLnNjcmVlbl9kcmF3KHRoaXMucHRyKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBfX3diZ19sb2dfY2VjMmNkMDQzOGJhMGI2ZCA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICBjb25zb2xlLmxvZyhnZXRTdHJpbmdGcm9tV2FzbShhcmcwLCBhcmcxKSk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfbmV3XzU5Y2I3NGU0MjM3NThlZGUgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCByZXQgPSBuZXcgRXJyb3IoKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX3N0YWNrXzU1OGJhNTkxN2I0NjZlZGQgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzEpLnN0YWNrO1xuICAgIGNvbnN0IHJldDAgPSBwYXNzU3RyaW5nVG9XYXNtKHJldCk7XG4gICAgY29uc3QgcmV0MSA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICBnZXRJbnQzMk1lbW9yeSgpW2FyZzAgLyA0ICsgMF0gPSByZXQwO1xuICAgIGdldEludDMyTWVtb3J5KClbYXJnMCAvIDQgKyAxXSA9IHJldDE7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfZXJyb3JfNGJiNmMyYTk3NDA3MTI5YSA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCB2MCA9IGdldFN0cmluZ0Zyb21XYXNtKGFyZzAsIGFyZzEpLnNsaWNlKCk7XG4gICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUoYXJnMCwgYXJnMSAqIDEpO1xuICAgIGNvbnNvbGUuZXJyb3IodjApO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHRha2VPYmplY3QoYXJnMCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmluZGdlbl90aHJvdyA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZ2V0U3RyaW5nRnJvbVdhc20oYXJnMCwgYXJnMSkpO1xufTtcblxuIiwiaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSBcIndhc20tY2FudmFzLWJpdGJsdFwiO1xuaW1wb3J0IHsgbWVtb3J5IH0gZnJvbSBcIndhc20tY2FudmFzLWJpdGJsdC93YXNtX2NhbnZhc19iaXRibHRfYmdcIjtcblxuLyoqXG4gKiBXZWJBc3NlbWJseSBCaXRibHQgVGVzdFxuICovXG5jbGFzcyBCaXRibHQge1xuICAgIHN0YXRpYyByZWFkb25seSBDQU5WQVNfV0lEVEggPSA3Njg7XG4gICAgc3RhdGljIHJlYWRvbmx5IENBTlZBU19IRUlHSFQgPSA1NzY7XG4gICAgc3RhdGljIHJlYWRvbmx5IFJHQkEgPSA0O1xuXG4gICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgY2FudmFzQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgY2FudmFzSW1hZ2VEYXRhOiBJbWFnZURhdGE7XG4gICAgcHJpdmF0ZSBzY3JlZW46IFNjcmVlbjtcbiAgICBwcml2YXRlIGltYWdlRGF0YTogVWludDhBcnJheTtcblxuICAgIHByaXZhdGUgYW5pbWVJZDogbnVtYmVyO1xuICAgIHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBmcmFtZTogbnVtYmVyO1xuICAgIHByaXZhdGUgZnBzOiBudW1iZXI7XG5cbiAgICAvLyBUT0RPOiBpbWFnZSBmaWxlIG9ubHlcbiAgICBwcml2YXRlIHJlc291cmNlczogeyBba2V5OiBzdHJpbmddOiBudW1iZXI7IH0gPSB7XG4gICAgICAgIFwicmVzb3VyY2VzL3J1c3RhY2Vhbi1mbGF0LWhhcHB5LTc2OHg1MTIucG5nXCI6IG51bGxcbiAgICB9O1xuICAgIHByaXZhdGUgbG9hZGVkQ291bnQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHJlc291cmNlTG9hZGVkOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmVlbicpO1xuICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgYCR7Qml0Ymx0LkNBTlZBU19XSURUSH1gKTtcbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBgJHtCaXRibHQuQ0FOVkFTX0hFSUdIVH1gKTtcbiAgICAgICAgLy8gZm9yIGRldmljZSB3aWR0aFxuICAgICAgICBsZXQgcGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID8gd2luZG93LmRldmljZVBpeGVsUmF0aW8gOiAxO1xuICAgICAgICBpZihwaXhlbFJhdGlvID4gMSAmJiB3aW5kb3cuc2NyZWVuLndpZHRoIDwgQml0Ymx0LkNBTlZBU19XSURUSCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSAzMjAgKyBcInB4XCI7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSAyNDAgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY3JlYXRlIGNhbnZhcyBjb250ZXh0XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuY2FudmFzSW1hZ2VEYXRhID0gdGhpcy5jYW52YXNDb250ZXh0LmNyZWF0ZUltYWdlRGF0YShcbiAgICAgICAgICAgIEJpdGJsdC5DQU5WQVNfV0lEVEgsIEJpdGJsdC5DQU5WQVNfSEVJR0hUKTtcbiAgICAgICAgLy8gaGVsbG8gd2FzbSB3b3JsZFxuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBTY3JlZW4oQml0Ymx0LkNBTlZBU19XSURUSCwgQml0Ymx0LkNBTlZBU19IRUlHSFQpO1xuICAgICAgICAvLyBmb3IgZnBzIHByaW50XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5mb250ID0gXCIxNnB4IHNhbnMtc2VyaWZcIjtcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmZpbGxTdHlsZSA9IFwiIzBmMFwiO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLmZwcyA9IDA7XG4gICAgICAgIHRoaXMuZnJhbWUgPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHN0YXJ0XG4gICAgICovXG4gICAgcHVibGljIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgdGhpcy5sb29wKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogbG9vcFxuICAgICAqL1xuICAgIHB1YmxpYyBsb29wKCkge1xuICAgICAgICAvLyByZXNvdXJjZSB3YWl0XG4gICAgICAgIGlmKHRoaXMucmVzb3VyY2VMb2FkZWQpIHtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSAoVE9ETzogc3BsaXQgdXBkYXRlL2RyYXcpXG4gICAgICAgICAgICB0aGlzLnNjcmVlbi51cGRhdGUoKTtcbiAgICAgICAgICAgIC8vIGRyYXdcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuLmRyYXcoKTtcbiAgICAgICAgICAgIC8vIHJlY3JlYXRlIFVpbnQ4QXJyYXlcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9lbXNjcmlwdGVuLWNvcmUvZW1zY3JpcHRlbi9pc3N1ZXMvNjc0N1xuICAgICAgICAgICAgdGhpcy5pbWFnZURhdGEgPSBuZXcgVWludDhBcnJheShcbiAgICAgICAgICAgICAgICBtZW1vcnkuYnVmZmVyLFxuICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuLmdldF9jYW52YXNfYml0bWFwX3B0cigpLFxuICAgICAgICAgICAgICAgIEJpdGJsdC5DQU5WQVNfV0lEVEggKiBCaXRibHQuQ0FOVkFTX0hFSUdIVCAqIEJpdGJsdC5SR0JBKTtcbiAgICAgICAgICAgIC8vIGRyYXcgd2FzbSBjYWxjdWxhdGVkIGJpdG1hcFxuICAgICAgICAgICAgdGhpcy5jYW52YXNJbWFnZURhdGEuZGF0YS5zZXQodGhpcy5pbWFnZURhdGEpO1xuICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LnB1dEltYWdlRGF0YSh0aGlzLmNhbnZhc0ltYWdlRGF0YSwgMCwgMCk7XG4gICAgICAgICAgICAvLyBwcmludCBmcHNcbiAgICAgICAgICAgIHRoaXMuZnJhbWUrKztcbiAgICAgICAgICAgIGlmKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUgPj0gMTAwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZnBzID0gdGhpcy5mcmFtZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmZpbGxUZXh0KFwiZnBzOiBcIiArIHRoaXMuZnBzLCAwLCAxNik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbmV4dCB0aWNrXG4gICAgICAgIHRoaXMuYW5pbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmxvb3AoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVzb3VyY2UgbG9hZCAoc3luYylcbiAgICAgKi9cbiAgICBwcml2YXRlIGxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZGVkQ291bnQgPSAwO1xuICAgICAgICB0aGlzLnJlc291cmNlTG9hZGVkID0gZmFsc2U7XG4gICAgICAgIGZvcihsZXQgcmVzb3VyY2UgaW4gdGhpcy5yZXNvdXJjZXMpIHtcbiAgICAgICAgICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgcmVzb3VyY2UgaGlkZGVuIGNhbnZhc1xuICAgICAgICAgICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGltYWdlLndpZHRoO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgICAgICAvLyBkcmF3IGltYWdlXG4gICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xuICAgICAgICAgICAgICAgIC8vIGdldCBpbWFnZSB0eXBlZGFycmF5XG4gICAgICAgICAgICAgICAgbGV0IHJlc291cmNlSW1hZ2VEYXRhID0gY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgLy8gYWxsb2Mgd2FzbSBtZW1vcnlcbiAgICAgICAgICAgICAgICB0aGlzLnNjcmVlbi5hZGRfcmVzb3VyY2UoaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgbGV0IGltYWdlRGF0YSA9IG5ldyBVaW50OEFycmF5KFxuICAgICAgICAgICAgICAgICAgICBtZW1vcnkuYnVmZmVyLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcmVlbi5nZXRfcmVzb3VyY2VfYml0bWFwX3B0cih0aGlzLmxvYWRlZENvdW50KSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uud2lkdGggKiBpbWFnZS5oZWlnaHQgKiBCaXRibHQuUkdCQSk7XG4gICAgICAgICAgICAgICAgLy8gcmVzb3VyY2UgYml0bWFwIHRyYW5jZWZhclxuICAgICAgICAgICAgICAgIGltYWdlRGF0YS5zZXQocmVzb3VyY2VJbWFnZURhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgLy8gc2F2ZSByZXNvdXJjZSBudW1iZXJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlc1tyZXNvdXJjZV0gPSB0aGlzLmxvYWRlZENvdW50O1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgaGlkZGVuIGNhbnZhc1xuICAgICAgICAgICAgICAgIGNhbnZhcy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gcmVzb3VyY2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2FpdCByZXNvdXJjZSBsb2FkZWRcbiAgICAgICAgbGV0IHdhaXQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYoT2JqZWN0LmtleXModGhpcy5yZXNvdXJjZXMpLmxlbmd0aCA8PSB0aGlzLmxvYWRlZENvdW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwod2FpdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwKTtcbiAgICB9XG59XG5cbm5ldyBCaXRibHQoKS5zdGFydCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==