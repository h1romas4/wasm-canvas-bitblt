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
/*! exports provided: memory, __wbg_screen_free, screen_new, screen_get_canvas_bitmap_ptr, screen_update, screen_draw, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free */
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
 * BitbltCanvas
 */
var Bitblt = /** @class */ (function () {
    /**
     * constructor
     */
    function Bitblt() {
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
    }
    /**
     * loop
     */
    Bitblt.prototype.loop = function () {
        var _this = this;
        // update
        this.screen.update();
        // draw
        this.screen.draw();
        this.canvasImageData.data.set(this.imageData);
        this.canvasContext.putImageData(this.canvasImageData, 0, 0);
        // fps
        this.frame++;
        if (new Date().getTime() - this.startTime >= 1000) {
            this.fps = this.frame;
            this.frame = 0;
            this.startTime = new Date().getTime();
        }
        this.canvasContext.fillText("fps: " + this.fps, 0, 16);
        // next tick
        this.animeId = requestAnimationFrame(function () { return _this.loop(); });
    };
    Bitblt.CANVAS_WIDTH = 768;
    Bitblt.CANVAS_HEIGHT = 576;
    Bitblt.RGBA = 4;
    return Bitblt;
}());
new Bitblt().loop();


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vcGtnL3dhc21fY2FudmFzX2JpdGJsdC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFEOztBQUVyRDs7QUFFQTtBQUNBO0FBQ0EsdUVBQXVFLGtFQUFXO0FBQ2xGLDZDQUE2QyxrRUFBVztBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsa0JBQWtCOztBQUUzQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0Esa0JBQWtCLDZFQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQiw4RUFBdUI7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQTtBQUNBLGtCQUFrQiw2RUFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsOEVBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1RUFBdUUsa0VBQVc7QUFDbEYsNkNBQTZDLGtFQUFXO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQVEsNkVBQXNCO0FBQzlCO0FBQ0E7QUFD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SSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUQsTUFBTTtRQUNOLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtZQUM5QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDekM7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkQsWUFBWTtRQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcscUJBQXFCLENBQUMsY0FBTSxZQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQTlEZSxtQkFBWSxHQUFHLEdBQUcsQ0FBQztJQUNuQixvQkFBYSxHQUFHLEdBQUcsQ0FBQztJQUNwQixXQUFJLEdBQUcsQ0FBQyxDQUFDO0lBNkQ3QixhQUFDO0NBQUE7QUFFRCxJQUFJLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDIiwiZmlsZSI6IjAuYm9vdHN0cmFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgd2FzbSBmcm9tICcuL3dhc21fY2FudmFzX2JpdGJsdF9iZy53YXNtJztcblxubGV0IGNhY2hlZFRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcpO1xuXG5sZXQgY2FjaGVnZXRVaW50OE1lbW9yeSA9IG51bGw7XG5mdW5jdGlvbiBnZXRVaW50OE1lbW9yeSgpIHtcbiAgICBpZiAoY2FjaGVnZXRVaW50OE1lbW9yeSA9PT0gbnVsbCB8fCBjYWNoZWdldFVpbnQ4TWVtb3J5LmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0VWludDhNZW1vcnkgPSBuZXcgVWludDhBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRVaW50OE1lbW9yeTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbVdhc20ocHRyLCBsZW4pIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKGdldFVpbnQ4TWVtb3J5KCkuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW4pKTtcbn1cblxuY29uc3QgaGVhcCA9IG5ldyBBcnJheSgzMik7XG5cbmhlYXAuZmlsbCh1bmRlZmluZWQpO1xuXG5oZWFwLnB1c2godW5kZWZpbmVkLCBudWxsLCB0cnVlLCBmYWxzZSk7XG5cbmxldCBoZWFwX25leHQgPSBoZWFwLmxlbmd0aDtcblxuZnVuY3Rpb24gYWRkSGVhcE9iamVjdChvYmopIHtcbiAgICBpZiAoaGVhcF9uZXh0ID09PSBoZWFwLmxlbmd0aCkgaGVhcC5wdXNoKGhlYXAubGVuZ3RoICsgMSk7XG4gICAgY29uc3QgaWR4ID0gaGVhcF9uZXh0O1xuICAgIGhlYXBfbmV4dCA9IGhlYXBbaWR4XTtcblxuICAgIGhlYXBbaWR4XSA9IG9iajtcbiAgICByZXR1cm4gaWR4O1xufVxuXG5mdW5jdGlvbiBnZXRPYmplY3QoaWR4KSB7IHJldHVybiBoZWFwW2lkeF07IH1cblxubGV0IFdBU01fVkVDVE9SX0xFTiA9IDA7XG5cbmxldCBjYWNoZWRUZXh0RW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigndXRmLTgnKTtcblxubGV0IHBhc3NTdHJpbmdUb1dhc207XG5pZiAodHlwZW9mIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8gPT09ICdmdW5jdGlvbicpIHtcbiAgICBwYXNzU3RyaW5nVG9XYXNtID0gZnVuY3Rpb24oYXJnKSB7XG5cblxuICAgICAgICBsZXQgc2l6ZSA9IGFyZy5sZW5ndGg7XG4gICAgICAgIGxldCBwdHIgPSB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jKHNpemUpO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbWVtID0gZ2V0VWludDhNZW1vcnkoKTtcbiAgICAgICAgICAgIGZvciAoOyBvZmZzZXQgPCBhcmcubGVuZ3RoOyBvZmZzZXQrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBhcmcuY2hhckNvZGVBdChvZmZzZXQpO1xuICAgICAgICAgICAgICAgIGlmIChjb2RlID4gMHg3RikgYnJlYWs7XG4gICAgICAgICAgICAgICAgbWVtW3B0ciArIG9mZnNldF0gPSBjb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9mZnNldCAhPT0gYXJnLmxlbmd0aCkge1xuICAgICAgICAgICAgYXJnID0gYXJnLnNsaWNlKG9mZnNldCk7XG4gICAgICAgICAgICBwdHIgPSB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyhwdHIsIHNpemUsIHNpemUgPSBvZmZzZXQgKyBhcmcubGVuZ3RoICogMyk7XG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gZ2V0VWludDhNZW1vcnkoKS5zdWJhcnJheShwdHIgKyBvZmZzZXQsIHB0ciArIHNpemUpO1xuICAgICAgICAgICAgY29uc3QgcmV0ID0gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byhhcmcsIHZpZXcpO1xuXG4gICAgICAgICAgICBvZmZzZXQgKz0gcmV0LndyaXR0ZW47XG4gICAgICAgIH1cbiAgICAgICAgV0FTTV9WRUNUT1JfTEVOID0gb2Zmc2V0O1xuICAgICAgICByZXR1cm4gcHRyO1xuICAgIH07XG59IGVsc2Uge1xuICAgIHBhc3NTdHJpbmdUb1dhc20gPSBmdW5jdGlvbihhcmcpIHtcblxuXG4gICAgICAgIGxldCBzaXplID0gYXJnLmxlbmd0aDtcbiAgICAgICAgbGV0IHB0ciA9IHdhc20uX193YmluZGdlbl9tYWxsb2Moc2l6ZSk7XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBtZW0gPSBnZXRVaW50OE1lbW9yeSgpO1xuICAgICAgICAgICAgZm9yICg7IG9mZnNldCA8IGFyZy5sZW5ndGg7IG9mZnNldCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29kZSA9IGFyZy5jaGFyQ29kZUF0KG9mZnNldCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPiAweDdGKSBicmVhaztcbiAgICAgICAgICAgICAgICBtZW1bcHRyICsgb2Zmc2V0XSA9IGNvZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob2Zmc2V0ICE9PSBhcmcubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBidWYgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGUoYXJnLnNsaWNlKG9mZnNldCkpO1xuICAgICAgICAgICAgcHRyID0gd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MocHRyLCBzaXplLCBzaXplID0gb2Zmc2V0ICsgYnVmLmxlbmd0aCk7XG4gICAgICAgICAgICBnZXRVaW50OE1lbW9yeSgpLnNldChidWYsIHB0ciArIG9mZnNldCk7XG4gICAgICAgICAgICBvZmZzZXQgKz0gYnVmLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBXQVNNX1ZFQ1RPUl9MRU4gPSBvZmZzZXQ7XG4gICAgICAgIHJldHVybiBwdHI7XG4gICAgfTtcbn1cblxubGV0IGNhY2hlZ2V0SW50MzJNZW1vcnkgPSBudWxsO1xuZnVuY3Rpb24gZ2V0SW50MzJNZW1vcnkoKSB7XG4gICAgaWYgKGNhY2hlZ2V0SW50MzJNZW1vcnkgPT09IG51bGwgfHwgY2FjaGVnZXRJbnQzMk1lbW9yeS5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikge1xuICAgICAgICBjYWNoZWdldEludDMyTWVtb3J5ID0gbmV3IEludDMyQXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0SW50MzJNZW1vcnk7XG59XG5cbmZ1bmN0aW9uIGRyb3BPYmplY3QoaWR4KSB7XG4gICAgaWYgKGlkeCA8IDM2KSByZXR1cm47XG4gICAgaGVhcFtpZHhdID0gaGVhcF9uZXh0O1xuICAgIGhlYXBfbmV4dCA9IGlkeDtcbn1cblxuZnVuY3Rpb24gdGFrZU9iamVjdChpZHgpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoaWR4KTtcbiAgICBkcm9wT2JqZWN0KGlkeCk7XG4gICAgcmV0dXJuIHJldDtcbn1cbi8qKlxuKi9cbmV4cG9ydCBjbGFzcyBTY3JlZW4ge1xuXG4gICAgc3RhdGljIF9fd3JhcChwdHIpIHtcbiAgICAgICAgY29uc3Qgb2JqID0gT2JqZWN0LmNyZWF0ZShTY3JlZW4ucHJvdG90eXBlKTtcbiAgICAgICAgb2JqLnB0ciA9IHB0cjtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGZyZWUoKSB7XG4gICAgICAgIGNvbnN0IHB0ciA9IHRoaXMucHRyO1xuICAgICAgICB0aGlzLnB0ciA9IDA7XG5cbiAgICAgICAgd2FzbS5fX3diZ19zY3JlZW5fZnJlZShwdHIpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICAgICogQHJldHVybnMge1NjcmVlbn1cbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS5zY3JlZW5fbmV3KHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICByZXR1cm4gU2NyZWVuLl9fd3JhcChyZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBnZXRfY2FudmFzX2JpdG1hcF9wdHIoKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20uc2NyZWVuX2dldF9jYW52YXNfYml0bWFwX3B0cih0aGlzLnB0cik7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICovXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB3YXNtLnNjcmVlbl91cGRhdGUodGhpcy5wdHIpO1xuICAgIH1cbiAgICAvKipcbiAgICAqL1xuICAgIGRyYXcoKSB7XG4gICAgICAgIHdhc20uc2NyZWVuX2RyYXcodGhpcy5wdHIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IF9fd2JnX2xvZ19jZWMyY2QwNDM4YmEwYjZkID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIGNvbnNvbGUubG9nKGdldFN0cmluZ0Zyb21XYXNtKGFyZzAsIGFyZzEpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19uZXdfNTljYjc0ZTQyMzc1OGVkZSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJldCA9IG5ldyBFcnJvcigpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193Ymdfc3RhY2tfNTU4YmE1OTE3YjQ2NmVkZCA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMSkuc3RhY2s7XG4gICAgY29uc3QgcmV0MCA9IHBhc3NTdHJpbmdUb1dhc20ocmV0KTtcbiAgICBjb25zdCByZXQxID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgIGdldEludDMyTWVtb3J5KClbYXJnMCAvIDQgKyAwXSA9IHJldDA7XG4gICAgZ2V0SW50MzJNZW1vcnkoKVthcmcwIC8gNCArIDFdID0gcmV0MTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19lcnJvcl80YmI2YzJhOTc0MDcxMjlhID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHYwID0gZ2V0U3RyaW5nRnJvbVdhc20oYXJnMCwgYXJnMSkuc2xpY2UoKTtcbiAgICB3YXNtLl9fd2JpbmRnZW5fZnJlZShhcmcwLCBhcmcxICogMSk7XG4gICAgY29uc29sZS5lcnJvcih2MCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdGFrZU9iamVjdChhcmcwKTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX3Rocm93ID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihnZXRTdHJpbmdGcm9tV2FzbShhcmcwLCBhcmcxKSk7XG59O1xuXG4iLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tIFwid2FzbS1jYW52YXMtYml0Ymx0XCI7XG5pbXBvcnQgeyBtZW1vcnkgfSBmcm9tIFwid2FzbS1jYW52YXMtYml0Ymx0L3dhc21fY2FudmFzX2JpdGJsdF9iZ1wiO1xuXG4vKipcbiAqIEJpdGJsdENhbnZhc1xuICovXG5jbGFzcyBCaXRibHQge1xuICAgIHN0YXRpYyByZWFkb25seSBDQU5WQVNfV0lEVEggPSA3Njg7XG4gICAgc3RhdGljIHJlYWRvbmx5IENBTlZBU19IRUlHSFQgPSA1NzY7XG4gICAgc3RhdGljIHJlYWRvbmx5IFJHQkEgPSA0O1xuXG4gICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgY2FudmFzQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgY2FudmFzSW1hZ2VEYXRhOiBJbWFnZURhdGE7XG4gICAgcHJpdmF0ZSBzY3JlZW46IFNjcmVlbjtcbiAgICBwcml2YXRlIGltYWdlRGF0YTogVWludDhBcnJheTtcblxuICAgIHByaXZhdGUgYW5pbWVJZDogbnVtYmVyO1xuICAgIHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBmcmFtZTogbnVtYmVyO1xuICAgIHByaXZhdGUgZnBzOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NyZWVuJyk7XG4gICAgICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBgJHtCaXRibHQuQ0FOVkFTX1dJRFRIfWApO1xuICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGAke0JpdGJsdC5DQU5WQVNfSEVJR0hUfWApO1xuICAgICAgICBsZXQgcGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID8gd2luZG93LmRldmljZVBpeGVsUmF0aW8gOiAxO1xuICAgICAgICBpZihwaXhlbFJhdGlvID4gMSAmJiB3aW5kb3cuc2NyZWVuLndpZHRoIDwgQml0Ymx0LkNBTlZBU19XSURUSCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSAzMjAgKyBcInB4XCI7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSAyNDAgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5jYW52YXNJbWFnZURhdGEgPSB0aGlzLmNhbnZhc0NvbnRleHQuY3JlYXRlSW1hZ2VEYXRhKFxuICAgICAgICAgICAgQml0Ymx0LkNBTlZBU19XSURUSCwgQml0Ymx0LkNBTlZBU19IRUlHSFQpO1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZm9udCA9IFwiMTZweCBzYW5zLXNlcmlmXCI7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5maWxsU3R5bGUgPSBcIiMwZjBcIjtcblxuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBTY3JlZW4oQml0Ymx0LkNBTlZBU19XSURUSCwgQml0Ymx0LkNBTlZBU19IRUlHSFQpO1xuICAgICAgICB0aGlzLmltYWdlRGF0YSA9IG5ldyBVaW50OEFycmF5KFxuICAgICAgICAgICAgbWVtb3J5LmJ1ZmZlcixcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuLmdldF9jYW52YXNfYml0bWFwX3B0cigpLFxuICAgICAgICAgICAgQml0Ymx0LkNBTlZBU19XSURUSCAqIEJpdGJsdC5DQU5WQVNfSEVJR0hUICogQml0Ymx0LlJHQkEpO1xuXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogbG9vcFxuICAgICAqL1xuICAgIHB1YmxpYyBsb29wKCkge1xuICAgICAgICAvLyB1cGRhdGVcbiAgICAgICAgdGhpcy5zY3JlZW4udXBkYXRlKCk7XG4gICAgICAgIC8vIGRyYXdcbiAgICAgICAgdGhpcy5zY3JlZW4uZHJhdygpO1xuICAgICAgICB0aGlzLmNhbnZhc0ltYWdlRGF0YS5kYXRhLnNldCh0aGlzLmltYWdlRGF0YSk7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5wdXRJbWFnZURhdGEodGhpcy5jYW52YXNJbWFnZURhdGEsIDAsIDApO1xuICAgICAgICAvLyBmcHNcbiAgICAgICAgdGhpcy5mcmFtZSsrO1xuICAgICAgICBpZihuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lID49IDEwMDApIHtcbiAgICAgICAgICAgIHRoaXMuZnBzID0gdGhpcy5mcmFtZTtcbiAgICAgICAgICAgIHRoaXMuZnJhbWUgPSAwO1xuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbFRleHQoXCJmcHM6IFwiICsgdGhpcy5mcHMsIDAsIDE2KTtcbiAgICAgICAgLy8gbmV4dCB0aWNrXG4gICAgICAgIHRoaXMuYW5pbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmxvb3AoKSk7XG4gICAgfVxufVxuXG5uZXcgQml0Ymx0KCkubG9vcCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==