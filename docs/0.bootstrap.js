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
        this.canvas_context = this.canvas.getContext('2d');
        this.canvas_image_data = this.canvas_context.createImageData(Bitblt.CANVAS_WIDTH, Bitblt.CANVAS_HEIGHT);
        this.screen = new wasm_canvas_bitblt_1.Screen(Bitblt.CANVAS_WIDTH, Bitblt.CANVAS_HEIGHT);
        this.image_data = new Uint8Array(wasm_canvas_bitblt_bg_1.memory.buffer, this.screen.get_canvas_bitmap_ptr(), Bitblt.CANVAS_WIDTH * Bitblt.CANVAS_HEIGHT * Bitblt.RGBA);
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
        this.canvas_image_data.data.set(this.image_data);
        this.canvas_context.putImageData(this.canvas_image_data, 0, 0);
        // next tick
        this.anime_id = requestAnimationFrame(function () { return _this.loop(); });
    };
    Bitblt.CANVAS_WIDTH = 768;
    Bitblt.CANVAS_HEIGHT = 576;
    Bitblt.RGBA = 4;
    return Bitblt;
}());
new Bitblt().loop();


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vcGtnL3dhc21fY2FudmFzX2JpdGJsdC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFEOztBQUVyRDs7QUFFQTtBQUNBO0FBQ0EsdUVBQXVFLGtFQUFXO0FBQ2xGLDZDQUE2QyxrRUFBVztBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsa0JBQWtCOztBQUUzQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0Esa0JBQWtCLDZFQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQiw4RUFBdUI7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQTtBQUNBLGtCQUFrQiw2RUFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsOEVBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1RUFBdUUsa0VBQVc7QUFDbEYsNkNBQTZDLGtFQUFXO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQVEsNkVBQXNCO0FBQzlCO0FBQ0E7QUFD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QVcsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUEvQ2UsbUJBQVksR0FBRyxHQUFHLENBQUM7SUFDbkIsb0JBQWEsR0FBRyxHQUFHLENBQUM7SUFDcEIsV0FBSSxHQUFHLENBQUMsQ0FBQztJQThDN0IsYUFBQztDQUFBO0FBRUQsSUFBSSxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyIsImZpbGUiOiIwLmJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHdhc20gZnJvbSAnLi93YXNtX2NhbnZhc19iaXRibHRfYmcud2FzbSc7XG5cbmxldCBjYWNoZWRUZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigndXRmLTgnKTtcblxubGV0IGNhY2hlZ2V0VWludDhNZW1vcnkgPSBudWxsO1xuZnVuY3Rpb24gZ2V0VWludDhNZW1vcnkoKSB7XG4gICAgaWYgKGNhY2hlZ2V0VWludDhNZW1vcnkgPT09IG51bGwgfHwgY2FjaGVnZXRVaW50OE1lbW9yeS5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikge1xuICAgICAgICBjYWNoZWdldFVpbnQ4TWVtb3J5ID0gbmV3IFVpbnQ4QXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0VWludDhNZW1vcnk7XG59XG5cbmZ1bmN0aW9uIGdldFN0cmluZ0Zyb21XYXNtKHB0ciwgbGVuKSB7XG4gICAgcmV0dXJuIGNhY2hlZFRleHREZWNvZGVyLmRlY29kZShnZXRVaW50OE1lbW9yeSgpLnN1YmFycmF5KHB0ciwgcHRyICsgbGVuKSk7XG59XG5cbmNvbnN0IGhlYXAgPSBuZXcgQXJyYXkoMzIpO1xuXG5oZWFwLmZpbGwodW5kZWZpbmVkKTtcblxuaGVhcC5wdXNoKHVuZGVmaW5lZCwgbnVsbCwgdHJ1ZSwgZmFsc2UpO1xuXG5sZXQgaGVhcF9uZXh0ID0gaGVhcC5sZW5ndGg7XG5cbmZ1bmN0aW9uIGFkZEhlYXBPYmplY3Qob2JqKSB7XG4gICAgaWYgKGhlYXBfbmV4dCA9PT0gaGVhcC5sZW5ndGgpIGhlYXAucHVzaChoZWFwLmxlbmd0aCArIDEpO1xuICAgIGNvbnN0IGlkeCA9IGhlYXBfbmV4dDtcbiAgICBoZWFwX25leHQgPSBoZWFwW2lkeF07XG5cbiAgICBoZWFwW2lkeF0gPSBvYmo7XG4gICAgcmV0dXJuIGlkeDtcbn1cblxuZnVuY3Rpb24gZ2V0T2JqZWN0KGlkeCkgeyByZXR1cm4gaGVhcFtpZHhdOyB9XG5cbmxldCBXQVNNX1ZFQ1RPUl9MRU4gPSAwO1xuXG5sZXQgY2FjaGVkVGV4dEVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoJ3V0Zi04Jyk7XG5cbmxldCBwYXNzU3RyaW5nVG9XYXNtO1xuaWYgKHR5cGVvZiBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcGFzc1N0cmluZ1RvV2FzbSA9IGZ1bmN0aW9uKGFyZykge1xuXG5cbiAgICAgICAgbGV0IHNpemUgPSBhcmcubGVuZ3RoO1xuICAgICAgICBsZXQgcHRyID0gd2FzbS5fX3diaW5kZ2VuX21hbGxvYyhzaXplKTtcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IG1lbSA9IGdldFVpbnQ4TWVtb3J5KCk7XG4gICAgICAgICAgICBmb3IgKDsgb2Zmc2V0IDwgYXJnLmxlbmd0aDsgb2Zmc2V0KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2RlID0gYXJnLmNoYXJDb2RlQXQob2Zmc2V0KTtcbiAgICAgICAgICAgICAgICBpZiAoY29kZSA+IDB4N0YpIGJyZWFrO1xuICAgICAgICAgICAgICAgIG1lbVtwdHIgKyBvZmZzZXRdID0gY29kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvZmZzZXQgIT09IGFyZy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFyZyA9IGFyZy5zbGljZShvZmZzZXQpO1xuICAgICAgICAgICAgcHRyID0gd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MocHRyLCBzaXplLCBzaXplID0gb2Zmc2V0ICsgYXJnLmxlbmd0aCAqIDMpO1xuICAgICAgICAgICAgY29uc3QgdmlldyA9IGdldFVpbnQ4TWVtb3J5KCkuc3ViYXJyYXkocHRyICsgb2Zmc2V0LCBwdHIgKyBzaXplKTtcbiAgICAgICAgICAgIGNvbnN0IHJldCA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8oYXJnLCB2aWV3KTtcblxuICAgICAgICAgICAgb2Zmc2V0ICs9IHJldC53cml0dGVuO1xuICAgICAgICB9XG4gICAgICAgIFdBU01fVkVDVE9SX0xFTiA9IG9mZnNldDtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9O1xufSBlbHNlIHtcbiAgICBwYXNzU3RyaW5nVG9XYXNtID0gZnVuY3Rpb24oYXJnKSB7XG5cblxuICAgICAgICBsZXQgc2l6ZSA9IGFyZy5sZW5ndGg7XG4gICAgICAgIGxldCBwdHIgPSB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jKHNpemUpO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbWVtID0gZ2V0VWludDhNZW1vcnkoKTtcbiAgICAgICAgICAgIGZvciAoOyBvZmZzZXQgPCBhcmcubGVuZ3RoOyBvZmZzZXQrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBhcmcuY2hhckNvZGVBdChvZmZzZXQpO1xuICAgICAgICAgICAgICAgIGlmIChjb2RlID4gMHg3RikgYnJlYWs7XG4gICAgICAgICAgICAgICAgbWVtW3B0ciArIG9mZnNldF0gPSBjb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9mZnNldCAhPT0gYXJnLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgYnVmID0gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlKGFyZy5zbGljZShvZmZzZXQpKTtcbiAgICAgICAgICAgIHB0ciA9IHdhc20uX193YmluZGdlbl9yZWFsbG9jKHB0ciwgc2l6ZSwgc2l6ZSA9IG9mZnNldCArIGJ1Zi5sZW5ndGgpO1xuICAgICAgICAgICAgZ2V0VWludDhNZW1vcnkoKS5zZXQoYnVmLCBwdHIgKyBvZmZzZXQpO1xuICAgICAgICAgICAgb2Zmc2V0ICs9IGJ1Zi5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgV0FTTV9WRUNUT1JfTEVOID0gb2Zmc2V0O1xuICAgICAgICByZXR1cm4gcHRyO1xuICAgIH07XG59XG5cbmxldCBjYWNoZWdldEludDMyTWVtb3J5ID0gbnVsbDtcbmZ1bmN0aW9uIGdldEludDMyTWVtb3J5KCkge1xuICAgIGlmIChjYWNoZWdldEludDMyTWVtb3J5ID09PSBudWxsIHx8IGNhY2hlZ2V0SW50MzJNZW1vcnkuYnVmZmVyICE9PSB3YXNtLm1lbW9yeS5idWZmZXIpIHtcbiAgICAgICAgY2FjaGVnZXRJbnQzMk1lbW9yeSA9IG5ldyBJbnQzMkFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWdldEludDMyTWVtb3J5O1xufVxuXG5mdW5jdGlvbiBkcm9wT2JqZWN0KGlkeCkge1xuICAgIGlmIChpZHggPCAzNikgcmV0dXJuO1xuICAgIGhlYXBbaWR4XSA9IGhlYXBfbmV4dDtcbiAgICBoZWFwX25leHQgPSBpZHg7XG59XG5cbmZ1bmN0aW9uIHRha2VPYmplY3QoaWR4KSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGlkeCk7XG4gICAgZHJvcE9iamVjdChpZHgpO1xuICAgIHJldHVybiByZXQ7XG59XG4vKipcbiovXG5leHBvcnQgY2xhc3MgU2NyZWVuIHtcblxuICAgIHN0YXRpYyBfX3dyYXAocHRyKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IE9iamVjdC5jcmVhdGUoU2NyZWVuLnByb3RvdHlwZSk7XG4gICAgICAgIG9iai5wdHIgPSBwdHI7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBmcmVlKCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLnB0cjtcbiAgICAgICAgdGhpcy5wdHIgPSAwO1xuXG4gICAgICAgIHdhc20uX193Ymdfc2NyZWVuX2ZyZWUocHRyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAgICAqIEByZXR1cm5zIHtTY3JlZW59XG4gICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20uc2NyZWVuX25ldyh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIFNjcmVlbi5fX3dyYXAocmV0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgZ2V0X2NhbnZhc19iaXRtYXBfcHRyKCkge1xuICAgICAgICBjb25zdCByZXQgPSB3YXNtLnNjcmVlbl9nZXRfY2FudmFzX2JpdG1hcF9wdHIodGhpcy5wdHIpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICAvKipcbiAgICAqL1xuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgd2FzbS5zY3JlZW5fdXBkYXRlKHRoaXMucHRyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKi9cbiAgICBkcmF3KCkge1xuICAgICAgICB3YXNtLnNjcmVlbl9kcmF3KHRoaXMucHRyKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBfX3diZ19sb2dfY2VjMmNkMDQzOGJhMGI2ZCA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICBjb25zb2xlLmxvZyhnZXRTdHJpbmdGcm9tV2FzbShhcmcwLCBhcmcxKSk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfbmV3XzU5Y2I3NGU0MjM3NThlZGUgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCByZXQgPSBuZXcgRXJyb3IoKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX3N0YWNrXzU1OGJhNTkxN2I0NjZlZGQgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzEpLnN0YWNrO1xuICAgIGNvbnN0IHJldDAgPSBwYXNzU3RyaW5nVG9XYXNtKHJldCk7XG4gICAgY29uc3QgcmV0MSA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICBnZXRJbnQzMk1lbW9yeSgpW2FyZzAgLyA0ICsgMF0gPSByZXQwO1xuICAgIGdldEludDMyTWVtb3J5KClbYXJnMCAvIDQgKyAxXSA9IHJldDE7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfZXJyb3JfNGJiNmMyYTk3NDA3MTI5YSA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCB2MCA9IGdldFN0cmluZ0Zyb21XYXNtKGFyZzAsIGFyZzEpLnNsaWNlKCk7XG4gICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUoYXJnMCwgYXJnMSAqIDEpO1xuICAgIGNvbnNvbGUuZXJyb3IodjApO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHRha2VPYmplY3QoYXJnMCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmluZGdlbl90aHJvdyA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZ2V0U3RyaW5nRnJvbVdhc20oYXJnMCwgYXJnMSkpO1xufTtcblxuIiwiaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSBcIndhc20tY2FudmFzLWJpdGJsdFwiO1xuaW1wb3J0IHsgbWVtb3J5IH0gZnJvbSBcIndhc20tY2FudmFzLWJpdGJsdC93YXNtX2NhbnZhc19iaXRibHRfYmdcIjtcblxuLyoqXG4gKiBCaXRibHRDYW52YXNcbiAqL1xuY2xhc3MgQml0Ymx0IHtcbiAgICBzdGF0aWMgcmVhZG9ubHkgQ0FOVkFTX1dJRFRIID0gNzY4O1xuICAgIHN0YXRpYyByZWFkb25seSBDQU5WQVNfSEVJR0hUID0gNTc2O1xuICAgIHN0YXRpYyByZWFkb25seSBSR0JBID0gNDtcblxuICAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIGNhbnZhc19jb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSBjYW52YXNfaW1hZ2VfZGF0YTogSW1hZ2VEYXRhO1xuICAgIHByaXZhdGUgc2NyZWVuOiBTY3JlZW47XG4gICAgcHJpdmF0ZSBpbWFnZV9kYXRhOiBVaW50OEFycmF5O1xuXG4gICAgcHJpdmF0ZSBhbmltZV9pZDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmVlbicpO1xuICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgYCR7Qml0Ymx0LkNBTlZBU19XSURUSH1gKTtcbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBgJHtCaXRibHQuQ0FOVkFTX0hFSUdIVH1gKTtcbiAgICAgICAgbGV0IHBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA/IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIDogMTtcbiAgICAgICAgaWYocGl4ZWxSYXRpbyA+IDEgJiYgd2luZG93LnNjcmVlbi53aWR0aCA8IEJpdGJsdC5DQU5WQVNfV0lEVEgpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gMzIwICsgXCJweFwiO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gMjQwICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FudmFzX2NvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLmNhbnZhc19pbWFnZV9kYXRhID0gdGhpcy5jYW52YXNfY29udGV4dC5jcmVhdGVJbWFnZURhdGEoXG4gICAgICAgICAgICBCaXRibHQuQ0FOVkFTX1dJRFRILCBCaXRibHQuQ0FOVkFTX0hFSUdIVCk7XG5cbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgU2NyZWVuKEJpdGJsdC5DQU5WQVNfV0lEVEgsIEJpdGJsdC5DQU5WQVNfSEVJR0hUKTtcbiAgICAgICAgdGhpcy5pbWFnZV9kYXRhID0gbmV3IFVpbnQ4QXJyYXkoXG4gICAgICAgICAgICBtZW1vcnkuYnVmZmVyLFxuICAgICAgICAgICAgdGhpcy5zY3JlZW4uZ2V0X2NhbnZhc19iaXRtYXBfcHRyKCksXG4gICAgICAgICAgICBCaXRibHQuQ0FOVkFTX1dJRFRIICogQml0Ymx0LkNBTlZBU19IRUlHSFQgKiBCaXRibHQuUkdCQSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogbG9vcFxuICAgICAqL1xuICAgIHB1YmxpYyBsb29wKCkge1xuICAgICAgICAvLyB1cGRhdGVcbiAgICAgICAgdGhpcy5zY3JlZW4udXBkYXRlKCk7XG4gICAgICAgIC8vIGRyYXdcbiAgICAgICAgdGhpcy5zY3JlZW4uZHJhdygpO1xuICAgICAgICB0aGlzLmNhbnZhc19pbWFnZV9kYXRhLmRhdGEuc2V0KHRoaXMuaW1hZ2VfZGF0YSk7XG4gICAgICAgIHRoaXMuY2FudmFzX2NvbnRleHQucHV0SW1hZ2VEYXRhKHRoaXMuY2FudmFzX2ltYWdlX2RhdGEsIDAsIDApO1xuICAgICAgICAvLyBuZXh0IHRpY2tcbiAgICAgICAgdGhpcy5hbmltZV9pZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmxvb3AoKSk7XG4gICAgfVxufVxuXG5uZXcgQml0Ymx0KCkubG9vcCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==