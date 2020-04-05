(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/wasm_canvas_bitblt.js":
/*!************************************!*\
  !*** ../pkg/wasm_canvas_bitblt.js ***!
  \************************************/
/*! exports provided: init, Screen, __wbg_log_cec2cd0438ba0b6d, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbg_error_4bb6c2a97407129a, __wbindgen_object_drop_ref, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return Screen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_log_cec2cd0438ba0b6d", function() { return __wbg_log_cec2cd0438ba0b6d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_59cb74e423758ede", function() { return __wbg_new_59cb74e423758ede; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_stack_558ba5917b466edd", function() { return __wbg_stack_558ba5917b466edd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_error_4bb6c2a97407129a", function() { return __wbg_error_4bb6c2a97407129a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return __wbindgen_object_drop_ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return __wbindgen_throw; });
/* harmony import */ var _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_canvas_bitblt_bg.wasm */ "../pkg/wasm_canvas_bitblt_bg.wasm");


const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

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

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint8Memory0 = new Uint8Array(_wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
*/
function init() {
    _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["init"]();
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

let WASM_VECTOR_LEN = 0;

let cachedTextEncoder = new TextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetInt32Memory0 = new Int32Array(_wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetInt32Memory0;
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
    */
    constructor(width, height) {
        var ret = _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["screen_new"](width, height);
        return Screen.__wrap(ret);
    }
    /**
    * @param {number} width
    * @param {number} height
    * @returns {number}
    */
    add_resource(width, height) {
        var ret = _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["screen_add_resource"](this.ptr, width, height);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    get_canvas_bitmap_ptr() {
        var ret = _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["screen_get_canvas_bitmap_ptr"](this.ptr);
        return ret;
    }
    /**
    * @param {number} no
    * @returns {number}
    */
    get_resource_bitmap_ptr(no) {
        var ret = _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["screen_get_resource_bitmap_ptr"](this.ptr, no);
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
    console.log(getStringFromWasm0(arg0, arg1));
};

const __wbg_new_59cb74e423758ede = function() {
    var ret = new Error();
    return addHeapObject(ret);
};

const __wbg_stack_558ba5917b466edd = function(arg0, arg1) {
    var ret = getObject(arg1).stack;
    var ptr0 = passStringToWasm0(ret, _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

const __wbg_error_4bb6c2a97407129a = function(arg0, arg1) {
    try {
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](arg0, arg1);
    }
};

const __wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

_wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_start"]();



/***/ }),

/***/ "../pkg/wasm_canvas_bitblt_bg.wasm":
/*!*****************************************!*\
  !*** ../pkg/wasm_canvas_bitblt_bg.wasm ***!
  \*****************************************/
/*! exports provided: memory, __wbg_screen_free, screen_new, screen_add_resource, screen_get_canvas_bitmap_ptr, screen_get_resource_bitmap_ptr, screen_init, screen_update, screen_draw, init, __wbindgen_free, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_start */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vcGtnL3dhc21fY2FudmFzX2JpdGJsdC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUQ7O0FBRXJEOztBQUVBOztBQUVBLHlCQUF5QixrQkFBa0I7O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0QsK0JBQStCOztBQUVqRjs7QUFFQTtBQUNBO0FBQ0EseUVBQXlFLGtFQUFXO0FBQ3BGLDhDQUE4QyxrRUFBVztBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsSUFBSSxnRUFBUztBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLFVBQVUsY0FBYztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUVBQXlFLGtFQUFXO0FBQ3BGLDhDQUE4QyxrRUFBVztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQVEsNkVBQXNCO0FBQzlCO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQSxrQkFBa0Is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QixvQkFBYSxHQUFHLEdBQUcsQ0FBQztJQUNwQixXQUFJLEdBQUcsQ0FBQyxDQUFDO0lBb0k3QixhQUFDO0NBQUE7QUFFRCxJQUFJLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDIiwiZmlsZSI6IjAuYm9vdHN0cmFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgd2FzbSBmcm9tICcuL3dhc21fY2FudmFzX2JpdGJsdF9iZy53YXNtJztcblxuY29uc3QgaGVhcCA9IG5ldyBBcnJheSgzMikuZmlsbCh1bmRlZmluZWQpO1xuXG5oZWFwLnB1c2godW5kZWZpbmVkLCBudWxsLCB0cnVlLCBmYWxzZSk7XG5cbmZ1bmN0aW9uIGdldE9iamVjdChpZHgpIHsgcmV0dXJuIGhlYXBbaWR4XTsgfVxuXG5sZXQgaGVhcF9uZXh0ID0gaGVhcC5sZW5ndGg7XG5cbmZ1bmN0aW9uIGRyb3BPYmplY3QoaWR4KSB7XG4gICAgaWYgKGlkeCA8IDM2KSByZXR1cm47XG4gICAgaGVhcFtpZHhdID0gaGVhcF9uZXh0O1xuICAgIGhlYXBfbmV4dCA9IGlkeDtcbn1cblxuZnVuY3Rpb24gdGFrZU9iamVjdChpZHgpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoaWR4KTtcbiAgICBkcm9wT2JqZWN0KGlkeCk7XG4gICAgcmV0dXJuIHJldDtcbn1cblxubGV0IGNhY2hlZFRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcsIHsgaWdub3JlQk9NOiB0cnVlLCBmYXRhbDogdHJ1ZSB9KTtcblxuY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKCk7XG5cbmxldCBjYWNoZWdldFVpbnQ4TWVtb3J5MCA9IG51bGw7XG5mdW5jdGlvbiBnZXRVaW50OE1lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZ2V0VWludDhNZW1vcnkwID09PSBudWxsIHx8IGNhY2hlZ2V0VWludDhNZW1vcnkwLmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0VWludDhNZW1vcnkwID0gbmV3IFVpbnQ4QXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0VWludDhNZW1vcnkwO1xufVxuXG5mdW5jdGlvbiBnZXRTdHJpbmdGcm9tV2FzbTAocHRyLCBsZW4pIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciwgcHRyICsgbGVuKSk7XG59XG4vKipcbiovXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB3YXNtLmluaXQoKTtcbn1cblxuZnVuY3Rpb24gYWRkSGVhcE9iamVjdChvYmopIHtcbiAgICBpZiAoaGVhcF9uZXh0ID09PSBoZWFwLmxlbmd0aCkgaGVhcC5wdXNoKGhlYXAubGVuZ3RoICsgMSk7XG4gICAgY29uc3QgaWR4ID0gaGVhcF9uZXh0O1xuICAgIGhlYXBfbmV4dCA9IGhlYXBbaWR4XTtcblxuICAgIGhlYXBbaWR4XSA9IG9iajtcbiAgICByZXR1cm4gaWR4O1xufVxuXG5sZXQgV0FTTV9WRUNUT1JfTEVOID0gMDtcblxubGV0IGNhY2hlZFRleHRFbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCd1dGYtOCcpO1xuXG5jb25zdCBlbmNvZGVTdHJpbmcgPSAodHlwZW9mIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8gPT09ICdmdW5jdGlvbidcbiAgICA/IGZ1bmN0aW9uIChhcmcsIHZpZXcpIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byhhcmcsIHZpZXcpO1xufVxuICAgIDogZnVuY3Rpb24gKGFyZywgdmlldykge1xuICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgIHZpZXcuc2V0KGJ1Zik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVhZDogYXJnLmxlbmd0aCxcbiAgICAgICAgd3JpdHRlbjogYnVmLmxlbmd0aFxuICAgIH07XG59KTtcblxuZnVuY3Rpb24gcGFzc1N0cmluZ1RvV2FzbTAoYXJnLCBtYWxsb2MsIHJlYWxsb2MpIHtcblxuICAgIGlmIChyZWFsbG9jID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgYnVmID0gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlKGFyZyk7XG4gICAgICAgIGNvbnN0IHB0ciA9IG1hbGxvYyhidWYubGVuZ3RoKTtcbiAgICAgICAgZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBidWYubGVuZ3RoKS5zZXQoYnVmKTtcbiAgICAgICAgV0FTTV9WRUNUT1JfTEVOID0gYnVmLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9XG5cbiAgICBsZXQgbGVuID0gYXJnLmxlbmd0aDtcbiAgICBsZXQgcHRyID0gbWFsbG9jKGxlbik7XG5cbiAgICBjb25zdCBtZW0gPSBnZXRVaW50OE1lbW9yeTAoKTtcblxuICAgIGxldCBvZmZzZXQgPSAwO1xuXG4gICAgZm9yICg7IG9mZnNldCA8IGxlbjsgb2Zmc2V0KyspIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGFyZy5jaGFyQ29kZUF0KG9mZnNldCk7XG4gICAgICAgIGlmIChjb2RlID4gMHg3RikgYnJlYWs7XG4gICAgICAgIG1lbVtwdHIgKyBvZmZzZXRdID0gY29kZTtcbiAgICB9XG5cbiAgICBpZiAob2Zmc2V0ICE9PSBsZW4pIHtcbiAgICAgICAgaWYgKG9mZnNldCAhPT0gMCkge1xuICAgICAgICAgICAgYXJnID0gYXJnLnNsaWNlKG9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgICAgcHRyID0gcmVhbGxvYyhwdHIsIGxlbiwgbGVuID0gb2Zmc2V0ICsgYXJnLmxlbmd0aCAqIDMpO1xuICAgICAgICBjb25zdCB2aWV3ID0gZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyICsgb2Zmc2V0LCBwdHIgKyBsZW4pO1xuICAgICAgICBjb25zdCByZXQgPSBlbmNvZGVTdHJpbmcoYXJnLCB2aWV3KTtcblxuICAgICAgICBvZmZzZXQgKz0gcmV0LndyaXR0ZW47XG4gICAgfVxuXG4gICAgV0FTTV9WRUNUT1JfTEVOID0gb2Zmc2V0O1xuICAgIHJldHVybiBwdHI7XG59XG5cbmxldCBjYWNoZWdldEludDMyTWVtb3J5MCA9IG51bGw7XG5mdW5jdGlvbiBnZXRJbnQzMk1lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZ2V0SW50MzJNZW1vcnkwID09PSBudWxsIHx8IGNhY2hlZ2V0SW50MzJNZW1vcnkwLmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0SW50MzJNZW1vcnkwID0gbmV3IEludDMyQXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0SW50MzJNZW1vcnkwO1xufVxuLyoqXG4qL1xuZXhwb3J0IGNsYXNzIFNjcmVlbiB7XG5cbiAgICBzdGF0aWMgX193cmFwKHB0cikge1xuICAgICAgICBjb25zdCBvYmogPSBPYmplY3QuY3JlYXRlKFNjcmVlbi5wcm90b3R5cGUpO1xuICAgICAgICBvYmoucHRyID0gcHRyO1xuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgZnJlZSgpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5wdHI7XG4gICAgICAgIHRoaXMucHRyID0gMDtcblxuICAgICAgICB3YXNtLl9fd2JnX3NjcmVlbl9mcmVlKHB0cik7XG4gICAgfVxuICAgIC8qKlxuICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHZhciByZXQgPSB3YXNtLnNjcmVlbl9uZXcod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHJldHVybiBTY3JlZW4uX193cmFwKHJldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgYWRkX3Jlc291cmNlKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdmFyIHJldCA9IHdhc20uc2NyZWVuX2FkZF9yZXNvdXJjZSh0aGlzLnB0ciwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHJldHVybiByZXQgPj4+IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAqL1xuICAgIGdldF9jYW52YXNfYml0bWFwX3B0cigpIHtcbiAgICAgICAgdmFyIHJldCA9IHdhc20uc2NyZWVuX2dldF9jYW52YXNfYml0bWFwX3B0cih0aGlzLnB0cik7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICogQHBhcmFtIHtudW1iZXJ9IG5vXG4gICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgZ2V0X3Jlc291cmNlX2JpdG1hcF9wdHIobm8pIHtcbiAgICAgICAgdmFyIHJldCA9IHdhc20uc2NyZWVuX2dldF9yZXNvdXJjZV9iaXRtYXBfcHRyKHRoaXMucHRyLCBubyk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgd2FzbS5zY3JlZW5faW5pdCh0aGlzLnB0cik7XG4gICAgfVxuICAgIC8qKlxuICAgICovXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB3YXNtLnNjcmVlbl91cGRhdGUodGhpcy5wdHIpO1xuICAgIH1cbiAgICAvKipcbiAgICAqL1xuICAgIGRyYXcoKSB7XG4gICAgICAgIHdhc20uc2NyZWVuX2RyYXcodGhpcy5wdHIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IF9fd2JnX2xvZ19jZWMyY2QwNDM4YmEwYjZkID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIGNvbnNvbGUubG9nKGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKSk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfbmV3XzU5Y2I3NGU0MjM3NThlZGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmV0ID0gbmV3IEVycm9yKCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19zdGFja181NThiYTU5MTdiNDY2ZWRkID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMSkuc3RhY2s7XG4gICAgdmFyIHB0cjAgPSBwYXNzU3RyaW5nVG9XYXNtMChyZXQsIHdhc20uX193YmluZGdlbl9tYWxsb2MsIHdhc20uX193YmluZGdlbl9yZWFsbG9jKTtcbiAgICB2YXIgbGVuMCA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICBnZXRJbnQzMk1lbW9yeTAoKVthcmcwIC8gNCArIDFdID0gbGVuMDtcbiAgICBnZXRJbnQzMk1lbW9yeTAoKVthcmcwIC8gNCArIDBdID0gcHRyMDtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19lcnJvcl80YmI2YzJhOTc0MDcxMjlhID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICB3YXNtLl9fd2JpbmRnZW5fZnJlZShhcmcwLCBhcmcxKTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdGFrZU9iamVjdChhcmcwKTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX3Rocm93ID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSkpO1xufTtcblxud2FzbS5fX3diaW5kZ2VuX3N0YXJ0KCk7XG5cbiIsImltcG9ydCB7IFNjcmVlbiB9IGZyb20gXCJ3YXNtLWNhbnZhcy1iaXRibHRcIjtcbmltcG9ydCB7IG1lbW9yeSB9IGZyb20gXCJ3YXNtLWNhbnZhcy1iaXRibHQvd2FzbV9jYW52YXNfYml0Ymx0X2JnXCI7XG5cbi8qKlxuICogV2ViQXNzZW1ibHkgQml0Ymx0IFRlc3RcbiAqL1xuY2xhc3MgQml0Ymx0IHtcbiAgICBzdGF0aWMgcmVhZG9ubHkgQ0FOVkFTX1dJRFRIID0gNzY4O1xuICAgIHN0YXRpYyByZWFkb25seSBDQU5WQVNfSEVJR0hUID0gNTc2O1xuICAgIHN0YXRpYyByZWFkb25seSBSR0JBID0gNDtcblxuICAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIGNhbnZhc0NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIGNhbnZhc0ltYWdlRGF0YTogSW1hZ2VEYXRhO1xuICAgIHByaXZhdGUgc2NyZWVuOiBTY3JlZW47XG4gICAgcHJpdmF0ZSBpbWFnZURhdGE6IFVpbnQ4QXJyYXk7XG5cbiAgICBwcml2YXRlIGFuaW1lSWQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyO1xuICAgIHByaXZhdGUgZnJhbWU6IG51bWJlcjtcbiAgICBwcml2YXRlIGZwczogbnVtYmVyO1xuXG4gICAgLy8gVE9ETzogaW1hZ2UgZmlsZSBvbmx5XG4gICAgcHJpdmF0ZSByZXNvdXJjZXM6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyOyB9ID0ge1xuICAgICAgICBcInJlc291cmNlcy9ydXN0YWNlYW4tZmxhdC1oYXBweS03Njh4NTEyLnBuZ1wiOiBudWxsXG4gICAgfTtcbiAgICBwcml2YXRlIGxvYWRlZENvdW50OiBudW1iZXI7XG4gICAgcHJpdmF0ZSByZXNvdXJjZUxvYWRlZDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JlZW4nKTtcbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGAke0JpdGJsdC5DQU5WQVNfV0lEVEh9YCk7XG4gICAgICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgYCR7Qml0Ymx0LkNBTlZBU19IRUlHSFR9YCk7XG4gICAgICAgIC8vIGZvciBkZXZpY2Ugd2lkdGhcbiAgICAgICAgbGV0IHBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA/IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIDogMTtcbiAgICAgICAgaWYocGl4ZWxSYXRpbyA+IDEgJiYgd2luZG93LnNjcmVlbi53aWR0aCA8IEJpdGJsdC5DQU5WQVNfV0lEVEgpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gMzIwICsgXCJweFwiO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gMjQwICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNyZWF0ZSBjYW52YXMgY29udGV4dFxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLmNhbnZhc0ltYWdlRGF0YSA9IHRoaXMuY2FudmFzQ29udGV4dC5jcmVhdGVJbWFnZURhdGEoXG4gICAgICAgICAgICBCaXRibHQuQ0FOVkFTX1dJRFRILCBCaXRibHQuQ0FOVkFTX0hFSUdIVCk7XG4gICAgICAgIC8vIGhlbGxvIHdhc20gd29ybGRcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgU2NyZWVuKEJpdGJsdC5DQU5WQVNfV0lEVEgsIEJpdGJsdC5DQU5WQVNfSEVJR0hUKTtcbiAgICAgICAgLy8gZm9yIGZwcyBwcmludFxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZm9udCA9IFwiMTZweCBzYW5zLXNlcmlmXCI7XG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5maWxsU3R5bGUgPSBcIiMwZjBcIjtcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy5mcHMgPSAwO1xuICAgICAgICB0aGlzLmZyYW1lID0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzdGFydFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgIHRoaXMubG9vcCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGxvb3BcbiAgICAgKi9cbiAgICBwdWJsaWMgbG9vcCgpIHtcbiAgICAgICAgLy8gcmVzb3VyY2Ugd2FpdFxuICAgICAgICBpZih0aGlzLnJlc291cmNlTG9hZGVkKSB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgKFRPRE86IHNwbGl0IHVwZGF0ZS9kcmF3KVxuICAgICAgICAgICAgdGhpcy5zY3JlZW4udXBkYXRlKCk7XG4gICAgICAgICAgICAvLyBkcmF3XG4gICAgICAgICAgICB0aGlzLnNjcmVlbi5kcmF3KCk7XG4gICAgICAgICAgICAvLyByZWNyZWF0ZSBVaW50OEFycmF5XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZW1zY3JpcHRlbi1jb3JlL2Vtc2NyaXB0ZW4vaXNzdWVzLzY3NDdcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VEYXRhID0gbmV3IFVpbnQ4QXJyYXkoXG4gICAgICAgICAgICAgICAgbWVtb3J5LmJ1ZmZlcixcbiAgICAgICAgICAgICAgICB0aGlzLnNjcmVlbi5nZXRfY2FudmFzX2JpdG1hcF9wdHIoKSxcbiAgICAgICAgICAgICAgICBCaXRibHQuQ0FOVkFTX1dJRFRIICogQml0Ymx0LkNBTlZBU19IRUlHSFQgKiBCaXRibHQuUkdCQSk7XG4gICAgICAgICAgICAvLyBkcmF3IHdhc20gY2FsY3VsYXRlZCBiaXRtYXBcbiAgICAgICAgICAgIHRoaXMuY2FudmFzSW1hZ2VEYXRhLmRhdGEuc2V0KHRoaXMuaW1hZ2VEYXRhKTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5wdXRJbWFnZURhdGEodGhpcy5jYW52YXNJbWFnZURhdGEsIDAsIDApO1xuICAgICAgICAgICAgLy8gcHJpbnQgZnBzXG4gICAgICAgICAgICB0aGlzLmZyYW1lKys7XG4gICAgICAgICAgICBpZihuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lID49IDEwMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZwcyA9IHRoaXMuZnJhbWU7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5maWxsVGV4dChcImZwczogXCIgKyB0aGlzLmZwcywgMCwgMTYpO1xuICAgICAgICB9XG4gICAgICAgIC8vIG5leHQgdGlja1xuICAgICAgICB0aGlzLmFuaW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5sb29wKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJlc291cmNlIGxvYWQgKHN5bmMpXG4gICAgICovXG4gICAgcHJpdmF0ZSBsb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRlZENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5yZXNvdXJjZUxvYWRlZCA9IGZhbHNlO1xuICAgICAgICBmb3IobGV0IHJlc291cmNlIGluIHRoaXMucmVzb3VyY2VzKSB7XG4gICAgICAgICAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHJlc291cmNlIGhpZGRlbiBjYW52YXNcbiAgICAgICAgICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSBpbWFnZS53aWR0aDtcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICAgICAgLy8gZHJhdyBpbWFnZVxuICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAvLyBnZXQgaW1hZ2UgdHlwZWRhcnJheVxuICAgICAgICAgICAgICAgIGxldCByZXNvdXJjZUltYWdlRGF0YSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIC8vIGFsbG9jIHdhc20gbWVtb3J5XG4gICAgICAgICAgICAgICAgbGV0IHJlc291cmNlTnVtYmVyID0gdGhpcy5zY3JlZW4uYWRkX3Jlc291cmNlKGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIGxldCBpbWFnZURhdGEgPSBuZXcgVWludDhBcnJheShcbiAgICAgICAgICAgICAgICAgICAgbWVtb3J5LmJ1ZmZlcixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JlZW4uZ2V0X3Jlc291cmNlX2JpdG1hcF9wdHIodGhpcy5sb2FkZWRDb3VudCksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlLndpZHRoICogaW1hZ2UuaGVpZ2h0ICogQml0Ymx0LlJHQkEpO1xuICAgICAgICAgICAgICAgIC8vIHJlc291cmNlIGJpdG1hcCB0cmFuY2VmYXJcbiAgICAgICAgICAgICAgICBpbWFnZURhdGEuc2V0KHJlc291cmNlSW1hZ2VEYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgIC8vIHNhdmUgcmVzb3VyY2UgbnVtYmVyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZXNbcmVzb3VyY2VdID0gcmVzb3VyY2VOdW1iZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZWRDb3VudCsrO1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBoaWRkZW4gY2FudmFzXG4gICAgICAgICAgICAgICAgY2FudmFzLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSByZXNvdXJjZTtcbiAgICAgICAgfVxuICAgICAgICAvLyB3YWl0IHJlc291cmNlIGxvYWRlZFxuICAgICAgICBsZXQgd2FpdCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZihPYmplY3Qua2V5cyh0aGlzLnJlc291cmNlcykubGVuZ3RoIDw9IHRoaXMubG9hZGVkQ291bnQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh3YWl0KTtcbiAgICAgICAgICAgICAgICAvLyBhcHBsaWNhdGlvbiBpbml0XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JlZW4uaW5pdCgpO1xuICAgICAgICAgICAgICAgIC8vIGdvXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwKTtcbiAgICB9XG59XG5cbm5ldyBCaXRibHQoKS5zdGFydCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==