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
/*! exports provided: memory, __wbg_screen_free, screen_new, screen_get_canvas_bitmap_ptr, screen_get_resource_bitmap_ptr, screen_update, screen_draw, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free */
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
        this.resources = [
            "resources/rustacean-flat-happy-768x512.png"
        ];
        this.canvas = document.getElementById('screen');
        this.canvas.setAttribute('width', "" + Bitblt.CANVAS_WIDTH);
        this.canvas.setAttribute('height', "" + Bitblt.CANVAS_HEIGHT);
        var pixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
        if (pixelRatio > 1 && window.screen.width < Bitblt.CANVAS_WIDTH) {
            this.canvas.style.width = 320 + "px";
            this.canvas.style.height = 240 + "px";
        }
        this.canvasContext = this.canvas.getContext('2d');
        this.canvasImageData = this.canvasContext.createImageData(Bitblt.CANVAS_WIDTH, Bitblt.CANVAS_HEIGHT);
        this.canvasContext.font = "16px sans-serif";
        this.canvasContext.fillStyle = "#0f0";
        this.screen = new wasm_canvas_bitblt_1.Screen(Bitblt.CANVAS_WIDTH, Bitblt.CANVAS_HEIGHT);
        this.imageData = new Uint8Array(wasm_canvas_bitblt_bg_1.memory.buffer, this.screen.get_canvas_bitmap_ptr(), Bitblt.CANVAS_WIDTH * Bitblt.CANVAS_HEIGHT * Bitblt.RGBA);
        this.startTime = new Date().getTime();
        this.fps = 0;
        this.frame = 0;
    }
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
        // create resource canvas
        var cv = document.createElement('canvas');
        cv.width = Bitblt.CANVAS_WIDTH;
        cv.height = Bitblt.CANVAS_HEIGHT;
        var cx = cv.getContext('2d');
        var _loop_1 = function (resource) {
            var image = new Image();
            image.addEventListener('load', function () {
                // draw image
                cx.drawImage(image, 0, 0);
                // get typedarray
                var resourceImageData = cx.getImageData(0, 0, image.width, image.height);
                // alloc wasm memory
                var imageData = new Uint8Array(wasm_canvas_bitblt_bg_1.memory.buffer, _this.screen.get_resource_bitmap_ptr(0), Bitblt.CANVAS_WIDTH * Bitblt.CANVAS_HEIGHT * Bitblt.RGBA);
                imageData.set(resourceImageData.data);
                _this.loadedCount++;
            });
            image.src = resource;
        };
        for (var _i = 0, _a = this.resources; _i < _a.length; _i++) {
            var resource = _a[_i];
            _loop_1(resource);
        }
        // resource load wait
        var wait = window.setInterval(function () {
            if (_this.resources.length <= _this.loadedCount) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vcGtnL3dhc21fY2FudmFzX2JpdGJsdC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFEOztBQUVyRDs7QUFFQTtBQUNBO0FBQ0EsdUVBQXVFLGtFQUFXO0FBQ2xGLDZDQUE2QyxrRUFBVztBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsa0JBQWtCOztBQUUzQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0Esa0JBQWtCLDZFQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQiw4RUFBdUI7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQTtBQUNBLGtCQUFrQiw2RUFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsOEVBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1RUFBdUUsa0VBQVc7QUFDbEYsNkNBQTZDLGtFQUFXO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQVEsNkVBQXNCO0FBQzlCO0FBQ0E7QUFD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S0FBb0IsVUFBYyxFQUFkLFNBQUksQ0FBQyxTQUFTLEVBQWQsY0FBYyxFQUFkLElBQWM7WUFBOUIsSUFBSSxRQUFRO29CQUFSLFFBQVE7U0FnQmY7UUFDRCxxQkFBcUI7UUFDckIsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUMxQixJQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLEtBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQzFDLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzlCO1FBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXBIZSxtQkFBWSxHQUFHLEdBQUcsQ0FBQztJQUNuQixvQkFBYSxHQUFHLEdBQUcsQ0FBQztJQUNwQixXQUFJLEdBQUcsQ0FBQyxDQUFDO0lBbUg3QixhQUFDO0NBQUE7QUFFRCxJQUFJLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDIiwiZmlsZSI6IjAuYm9vdHN0cmFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgd2FzbSBmcm9tICcuL3dhc21fY2FudmFzX2JpdGJsdF9iZy53YXNtJztcblxubGV0IGNhY2hlZFRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcpO1xuXG5sZXQgY2FjaGVnZXRVaW50OE1lbW9yeSA9IG51bGw7XG5mdW5jdGlvbiBnZXRVaW50OE1lbW9yeSgpIHtcbiAgICBpZiAoY2FjaGVnZXRVaW50OE1lbW9yeSA9PT0gbnVsbCB8fCBjYWNoZWdldFVpbnQ4TWVtb3J5LmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0VWludDhNZW1vcnkgPSBuZXcgVWludDhBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRVaW50OE1lbW9yeTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbVdhc20ocHRyLCBsZW4pIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKGdldFVpbnQ4TWVtb3J5KCkuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW4pKTtcbn1cblxuY29uc3QgaGVhcCA9IG5ldyBBcnJheSgzMik7XG5cbmhlYXAuZmlsbCh1bmRlZmluZWQpO1xuXG5oZWFwLnB1c2godW5kZWZpbmVkLCBudWxsLCB0cnVlLCBmYWxzZSk7XG5cbmxldCBoZWFwX25leHQgPSBoZWFwLmxlbmd0aDtcblxuZnVuY3Rpb24gYWRkSGVhcE9iamVjdChvYmopIHtcbiAgICBpZiAoaGVhcF9uZXh0ID09PSBoZWFwLmxlbmd0aCkgaGVhcC5wdXNoKGhlYXAubGVuZ3RoICsgMSk7XG4gICAgY29uc3QgaWR4ID0gaGVhcF9uZXh0O1xuICAgIGhlYXBfbmV4dCA9IGhlYXBbaWR4XTtcblxuICAgIGhlYXBbaWR4XSA9IG9iajtcbiAgICByZXR1cm4gaWR4O1xufVxuXG5mdW5jdGlvbiBnZXRPYmplY3QoaWR4KSB7IHJldHVybiBoZWFwW2lkeF07IH1cblxubGV0IFdBU01fVkVDVE9SX0xFTiA9IDA7XG5cbmxldCBjYWNoZWRUZXh0RW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigndXRmLTgnKTtcblxubGV0IHBhc3NTdHJpbmdUb1dhc207XG5pZiAodHlwZW9mIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8gPT09ICdmdW5jdGlvbicpIHtcbiAgICBwYXNzU3RyaW5nVG9XYXNtID0gZnVuY3Rpb24oYXJnKSB7XG5cblxuICAgICAgICBsZXQgc2l6ZSA9IGFyZy5sZW5ndGg7XG4gICAgICAgIGxldCBwdHIgPSB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jKHNpemUpO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbWVtID0gZ2V0VWludDhNZW1vcnkoKTtcbiAgICAgICAgICAgIGZvciAoOyBvZmZzZXQgPCBhcmcubGVuZ3RoOyBvZmZzZXQrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBhcmcuY2hhckNvZGVBdChvZmZzZXQpO1xuICAgICAgICAgICAgICAgIGlmIChjb2RlID4gMHg3RikgYnJlYWs7XG4gICAgICAgICAgICAgICAgbWVtW3B0ciArIG9mZnNldF0gPSBjb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9mZnNldCAhPT0gYXJnLmxlbmd0aCkge1xuICAgICAgICAgICAgYXJnID0gYXJnLnNsaWNlKG9mZnNldCk7XG4gICAgICAgICAgICBwdHIgPSB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyhwdHIsIHNpemUsIHNpemUgPSBvZmZzZXQgKyBhcmcubGVuZ3RoICogMyk7XG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gZ2V0VWludDhNZW1vcnkoKS5zdWJhcnJheShwdHIgKyBvZmZzZXQsIHB0ciArIHNpemUpO1xuICAgICAgICAgICAgY29uc3QgcmV0ID0gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byhhcmcsIHZpZXcpO1xuXG4gICAgICAgICAgICBvZmZzZXQgKz0gcmV0LndyaXR0ZW47XG4gICAgICAgIH1cbiAgICAgICAgV0FTTV9WRUNUT1JfTEVOID0gb2Zmc2V0O1xuICAgICAgICByZXR1cm4gcHRyO1xuICAgIH07XG59IGVsc2Uge1xuICAgIHBhc3NTdHJpbmdUb1dhc20gPSBmdW5jdGlvbihhcmcpIHtcblxuXG4gICAgICAgIGxldCBzaXplID0gYXJnLmxlbmd0aDtcbiAgICAgICAgbGV0IHB0ciA9IHdhc20uX193YmluZGdlbl9tYWxsb2Moc2l6ZSk7XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBtZW0gPSBnZXRVaW50OE1lbW9yeSgpO1xuICAgICAgICAgICAgZm9yICg7IG9mZnNldCA8IGFyZy5sZW5ndGg7IG9mZnNldCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29kZSA9IGFyZy5jaGFyQ29kZUF0KG9mZnNldCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPiAweDdGKSBicmVhaztcbiAgICAgICAgICAgICAgICBtZW1bcHRyICsgb2Zmc2V0XSA9IGNvZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob2Zmc2V0ICE9PSBhcmcubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBidWYgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGUoYXJnLnNsaWNlKG9mZnNldCkpO1xuICAgICAgICAgICAgcHRyID0gd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MocHRyLCBzaXplLCBzaXplID0gb2Zmc2V0ICsgYnVmLmxlbmd0aCk7XG4gICAgICAgICAgICBnZXRVaW50OE1lbW9yeSgpLnNldChidWYsIHB0ciArIG9mZnNldCk7XG4gICAgICAgICAgICBvZmZzZXQgKz0gYnVmLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBXQVNNX1ZFQ1RPUl9MRU4gPSBvZmZzZXQ7XG4gICAgICAgIHJldHVybiBwdHI7XG4gICAgfTtcbn1cblxubGV0IGNhY2hlZ2V0SW50MzJNZW1vcnkgPSBudWxsO1xuZnVuY3Rpb24gZ2V0SW50MzJNZW1vcnkoKSB7XG4gICAgaWYgKGNhY2hlZ2V0SW50MzJNZW1vcnkgPT09IG51bGwgfHwgY2FjaGVnZXRJbnQzMk1lbW9yeS5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikge1xuICAgICAgICBjYWNoZWdldEludDMyTWVtb3J5ID0gbmV3IEludDMyQXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0SW50MzJNZW1vcnk7XG59XG5cbmZ1bmN0aW9uIGRyb3BPYmplY3QoaWR4KSB7XG4gICAgaWYgKGlkeCA8IDM2KSByZXR1cm47XG4gICAgaGVhcFtpZHhdID0gaGVhcF9uZXh0O1xuICAgIGhlYXBfbmV4dCA9IGlkeDtcbn1cblxuZnVuY3Rpb24gdGFrZU9iamVjdChpZHgpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoaWR4KTtcbiAgICBkcm9wT2JqZWN0KGlkeCk7XG4gICAgcmV0dXJuIHJldDtcbn1cbi8qKlxuKi9cbmV4cG9ydCBjbGFzcyBTY3JlZW4ge1xuXG4gICAgc3RhdGljIF9fd3JhcChwdHIpIHtcbiAgICAgICAgY29uc3Qgb2JqID0gT2JqZWN0LmNyZWF0ZShTY3JlZW4ucHJvdG90eXBlKTtcbiAgICAgICAgb2JqLnB0ciA9IHB0cjtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGZyZWUoKSB7XG4gICAgICAgIGNvbnN0IHB0ciA9IHRoaXMucHRyO1xuICAgICAgICB0aGlzLnB0ciA9IDA7XG5cbiAgICAgICAgd2FzbS5fX3diZ19zY3JlZW5fZnJlZShwdHIpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICAgICogQHJldHVybnMge1NjcmVlbn1cbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS5zY3JlZW5fbmV3KHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICByZXR1cm4gU2NyZWVuLl9fd3JhcChyZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBnZXRfY2FudmFzX2JpdG1hcF9wdHIoKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20uc2NyZWVuX2dldF9jYW52YXNfYml0bWFwX3B0cih0aGlzLnB0cik7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICogQHBhcmFtIHtudW1iZXJ9IG5vXG4gICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgZ2V0X3Jlc291cmNlX2JpdG1hcF9wdHIobm8pIHtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS5zY3JlZW5fZ2V0X3Jlc291cmNlX2JpdG1hcF9wdHIodGhpcy5wdHIsIG5vKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgLyoqXG4gICAgKi9cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHdhc20uc2NyZWVuX3VwZGF0ZSh0aGlzLnB0cik7XG4gICAgfVxuICAgIC8qKlxuICAgICovXG4gICAgZHJhdygpIHtcbiAgICAgICAgd2FzbS5zY3JlZW5fZHJhdyh0aGlzLnB0cik7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgX193YmdfbG9nX2NlYzJjZDA0MzhiYTBiNmQgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgY29uc29sZS5sb2coZ2V0U3RyaW5nRnJvbVdhc20oYXJnMCwgYXJnMSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX25ld181OWNiNzRlNDIzNzU4ZWRlID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IEVycm9yKCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19zdGFja181NThiYTU5MTdiNDY2ZWRkID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcxKS5zdGFjaztcbiAgICBjb25zdCByZXQwID0gcGFzc1N0cmluZ1RvV2FzbShyZXQpO1xuICAgIGNvbnN0IHJldDEgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgZ2V0SW50MzJNZW1vcnkoKVthcmcwIC8gNCArIDBdID0gcmV0MDtcbiAgICBnZXRJbnQzMk1lbW9yeSgpW2FyZzAgLyA0ICsgMV0gPSByZXQxO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2Vycm9yXzRiYjZjMmE5NzQwNzEyOWEgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgdjAgPSBnZXRTdHJpbmdGcm9tV2FzbShhcmcwLCBhcmcxKS5zbGljZSgpO1xuICAgIHdhc20uX193YmluZGdlbl9mcmVlKGFyZzAsIGFyZzEgKiAxKTtcbiAgICBjb25zb2xlLmVycm9yKHYwKTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX29iamVjdF9kcm9wX3JlZiA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICB0YWtlT2JqZWN0KGFyZzApO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5fdGhyb3cgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGdldFN0cmluZ0Zyb21XYXNtKGFyZzAsIGFyZzEpKTtcbn07XG5cbiIsImltcG9ydCB7IFNjcmVlbiB9IGZyb20gXCJ3YXNtLWNhbnZhcy1iaXRibHRcIjtcbmltcG9ydCB7IG1lbW9yeSB9IGZyb20gXCJ3YXNtLWNhbnZhcy1iaXRibHQvd2FzbV9jYW52YXNfYml0Ymx0X2JnXCI7XG5cbi8qKlxuICogV2ViQXNzZW1ibHkgQml0Ymx0IFRlc3RcbiAqL1xuY2xhc3MgQml0Ymx0IHtcbiAgICBzdGF0aWMgcmVhZG9ubHkgQ0FOVkFTX1dJRFRIID0gNzY4O1xuICAgIHN0YXRpYyByZWFkb25seSBDQU5WQVNfSEVJR0hUID0gNTc2O1xuICAgIHN0YXRpYyByZWFkb25seSBSR0JBID0gNDtcblxuICAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIGNhbnZhc0NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIGNhbnZhc0ltYWdlRGF0YTogSW1hZ2VEYXRhO1xuICAgIHByaXZhdGUgc2NyZWVuOiBTY3JlZW47XG4gICAgcHJpdmF0ZSBpbWFnZURhdGE6IFVpbnQ4QXJyYXk7XG5cbiAgICBwcml2YXRlIGFuaW1lSWQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyO1xuICAgIHByaXZhdGUgZnJhbWU6IG51bWJlcjtcbiAgICBwcml2YXRlIGZwczogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSByZXNvdXJjZXM6IHN0cmluZ1tdID0gW1xuICAgICAgICBcInJlc291cmNlcy9ydXN0YWNlYW4tZmxhdC1oYXBweS03Njh4NTEyLnBuZ1wiXG4gICAgXTtcblxuICAgIHByaXZhdGUgbG9hZGVkQ291bnQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHJlc291cmNlTG9hZGVkOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmVlbicpO1xuICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgYCR7Qml0Ymx0LkNBTlZBU19XSURUSH1gKTtcbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBgJHtCaXRibHQuQ0FOVkFTX0hFSUdIVH1gKTtcbiAgICAgICAgbGV0IHBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA/IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIDogMTtcbiAgICAgICAgaWYocGl4ZWxSYXRpbyA+IDEgJiYgd2luZG93LnNjcmVlbi53aWR0aCA8IEJpdGJsdC5DQU5WQVNfV0lEVEgpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gMzIwICsgXCJweFwiO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gMjQwICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuY2FudmFzSW1hZ2VEYXRhID0gdGhpcy5jYW52YXNDb250ZXh0LmNyZWF0ZUltYWdlRGF0YShcbiAgICAgICAgICAgIEJpdGJsdC5DQU5WQVNfV0lEVEgsIEJpdGJsdC5DQU5WQVNfSEVJR0hUKTtcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmZvbnQgPSBcIjE2cHggc2Fucy1zZXJpZlwiO1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbFN0eWxlID0gXCIjMGYwXCI7XG5cbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgU2NyZWVuKEJpdGJsdC5DQU5WQVNfV0lEVEgsIEJpdGJsdC5DQU5WQVNfSEVJR0hUKTtcbiAgICAgICAgdGhpcy5pbWFnZURhdGEgPSBuZXcgVWludDhBcnJheShcbiAgICAgICAgICAgIG1lbW9yeS5idWZmZXIsXG4gICAgICAgICAgICB0aGlzLnNjcmVlbi5nZXRfY2FudmFzX2JpdG1hcF9wdHIoKSxcbiAgICAgICAgICAgIEJpdGJsdC5DQU5WQVNfV0lEVEggKiBCaXRibHQuQ0FOVkFTX0hFSUdIVCAqIEJpdGJsdC5SR0JBKTtcblxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLmZwcyA9IDA7XG4gICAgICAgIHRoaXMuZnJhbWUgPSAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgIHRoaXMubG9vcCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGxvb3BcbiAgICAgKi9cbiAgICBwdWJsaWMgbG9vcCgpIHtcbiAgICAgICAgLy8gcmVzb3VyY2Ugd2FpdFxuICAgICAgICBpZih0aGlzLnJlc291cmNlTG9hZGVkKSB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgKFRPRE86IHNwbGl0IHVwZGF0ZS9kcmF3KVxuICAgICAgICAgICAgdGhpcy5zY3JlZW4udXBkYXRlKCk7XG4gICAgICAgICAgICAvLyBkcmF3XG4gICAgICAgICAgICB0aGlzLnNjcmVlbi5kcmF3KCk7XG4gICAgICAgICAgICB0aGlzLmNhbnZhc0ltYWdlRGF0YS5kYXRhLnNldCh0aGlzLmltYWdlRGF0YSk7XG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQucHV0SW1hZ2VEYXRhKHRoaXMuY2FudmFzSW1hZ2VEYXRhLCAwLCAwKTtcbiAgICAgICAgICAgIC8vIHByaW50IGZwc1xuICAgICAgICAgICAgdGhpcy5mcmFtZSsrO1xuICAgICAgICAgICAgaWYobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSA+PSAxMDAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mcHMgPSB0aGlzLmZyYW1lO1xuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWUgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbFRleHQoXCJmcHM6IFwiICsgdGhpcy5mcHMsIDAsIDE2KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBuZXh0IHRpY2tcbiAgICAgICAgdGhpcy5hbmltZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMubG9vcCgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXNvdXJjZSBsb2FkIChzeW5jKVxuICAgICAqL1xuICAgIHByaXZhdGUgbG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkZWRDb3VudCA9IDA7XG4gICAgICAgIHRoaXMucmVzb3VyY2VMb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gY3JlYXRlIHJlc291cmNlIGNhbnZhc1xuICAgICAgICBsZXQgY3YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgICBjdi53aWR0aCA9IEJpdGJsdC5DQU5WQVNfV0lEVEg7XG4gICAgICAgIGN2LmhlaWdodCA9IEJpdGJsdC5DQU5WQVNfSEVJR0hUO1xuICAgICAgICBsZXQgY3ggPSBjdi5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBmb3IobGV0IHJlc291cmNlIG9mIHRoaXMucmVzb3VyY2VzKSB7XG4gICAgICAgICAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gZHJhdyBpbWFnZVxuICAgICAgICAgICAgICAgIGN4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHR5cGVkYXJyYXlcbiAgICAgICAgICAgICAgICBsZXQgcmVzb3VyY2VJbWFnZURhdGEgPSBjeC5nZXRJbWFnZURhdGEoMCwgMCwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgLy8gYWxsb2Mgd2FzbSBtZW1vcnlcbiAgICAgICAgICAgICAgICBsZXQgaW1hZ2VEYXRhID0gbmV3IFVpbnQ4QXJyYXkoXG4gICAgICAgICAgICAgICAgICAgIG1lbW9yeS5idWZmZXIsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuLmdldF9yZXNvdXJjZV9iaXRtYXBfcHRyKDApLFxuICAgICAgICAgICAgICAgICAgICBCaXRibHQuQ0FOVkFTX1dJRFRIICogQml0Ymx0LkNBTlZBU19IRUlHSFQgKiBCaXRibHQuUkdCQSk7XG4gICAgICAgICAgICAgICAgaW1hZ2VEYXRhLnNldChyZXNvdXJjZUltYWdlRGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZENvdW50Kys7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IHJlc291cmNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlc291cmNlIGxvYWQgd2FpdFxuICAgICAgICBsZXQgd2FpdCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZih0aGlzLnJlc291cmNlcy5sZW5ndGggPD0gdGhpcy5sb2FkZWRDb3VudCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2VMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHdhaXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMCk7XG4gICAgfVxufVxuXG5uZXcgQml0Ymx0KCkuc3RhcnQoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=