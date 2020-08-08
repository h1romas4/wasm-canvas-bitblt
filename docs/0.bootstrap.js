(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/wasm_canvas_bitblt.js":
/*!************************************!*\
  !*** ../pkg/wasm_canvas_bitblt.js ***!
  \************************************/
/*! exports provided: init, Screen, __wbg_log_cec2cd0438ba0b6d, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbg_error_4bb6c2a97407129a, __wbindgen_object_drop_ref, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_canvas_bitblt_bg.wasm */ "../pkg/wasm_canvas_bitblt_bg.wasm");
/* harmony import */ var _wasm_canvas_bitblt_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm_canvas_bitblt_bg.js */ "../pkg/wasm_canvas_bitblt_bg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "init", function() { return _wasm_canvas_bitblt_bg_js__WEBPACK_IMPORTED_MODULE_1__["init"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return _wasm_canvas_bitblt_bg_js__WEBPACK_IMPORTED_MODULE_1__["Screen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_log_cec2cd0438ba0b6d", function() { return _wasm_canvas_bitblt_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_log_cec2cd0438ba0b6d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_59cb74e423758ede", function() { return _wasm_canvas_bitblt_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_new_59cb74e423758ede"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_stack_558ba5917b466edd", function() { return _wasm_canvas_bitblt_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_stack_558ba5917b466edd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_error_4bb6c2a97407129a", function() { return _wasm_canvas_bitblt_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_error_4bb6c2a97407129a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return _wasm_canvas_bitblt_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_object_drop_ref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return _wasm_canvas_bitblt_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_throw"]; });



_wasm_canvas_bitblt_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_start"]();


/***/ }),

/***/ "../pkg/wasm_canvas_bitblt_bg.js":
/*!***************************************!*\
  !*** ../pkg/wasm_canvas_bitblt_bg.js ***!
  \***************************************/
/*! exports provided: init, Screen, __wbg_log_cec2cd0438ba0b6d, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbg_error_4bb6c2a97407129a, __wbindgen_object_drop_ref, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
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

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

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

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

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


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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
/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_canvas_bitblt_bg.js */ "../pkg/wasm_canvas_bitblt_bg.js");


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


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vcGtnL3dhc21fY2FudmFzX2JpdGJsdC5qcyIsIndlYnBhY2s6Ly8vLi4vcGtnL3dhc21fY2FudmFzX2JpdGJsdF9iZy5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFEO0FBQ1Y7QUFDM0MsNEVBQXFCOzs7Ozs7Ozs7Ozs7O0FDRnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFEOztBQUVyRDs7QUFFQTs7QUFFQSx5QkFBeUIsa0JBQWtCOztBQUUzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbURBQW1ELCtCQUErQjs7QUFFbEY7O0FBRUE7QUFDQTtBQUNBLHlFQUF5RSxrRUFBVztBQUNwRiw4Q0FBOEMsa0VBQVc7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLElBQUksZ0VBQVM7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxVQUFVLGNBQWM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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RTtnQkFDdkQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0IsbUJBQW1CO2dCQUNuQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNuQixLQUFLO2dCQUNMLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2FBQzlCO1FBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXJJZSxtQkFBWSxHQUFHLEdBQUcsQ0FBQztJQUNuQixvQkFBYSxHQUFHLEdBQUcsQ0FBQztJQUNwQixXQUFJLEdBQUcsQ0FBQyxDQUFDO0lBb0k3QixhQUFDO0NBQUE7QUFFRCxJQUFJLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7QUMvSXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIwLmJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHdhc20gZnJvbSBcIi4vd2FzbV9jYW52YXNfYml0Ymx0X2JnLndhc21cIjtcbmV4cG9ydCAqIGZyb20gXCIuL3dhc21fY2FudmFzX2JpdGJsdF9iZy5qc1wiO1xud2FzbS5fX3diaW5kZ2VuX3N0YXJ0KCk7XG4iLCJpbXBvcnQgKiBhcyB3YXNtIGZyb20gJy4vd2FzbV9jYW52YXNfYml0Ymx0X2JnLndhc20nO1xuXG5jb25zdCBoZWFwID0gbmV3IEFycmF5KDMyKS5maWxsKHVuZGVmaW5lZCk7XG5cbmhlYXAucHVzaCh1bmRlZmluZWQsIG51bGwsIHRydWUsIGZhbHNlKTtcblxuZnVuY3Rpb24gZ2V0T2JqZWN0KGlkeCkgeyByZXR1cm4gaGVhcFtpZHhdOyB9XG5cbmxldCBoZWFwX25leHQgPSBoZWFwLmxlbmd0aDtcblxuZnVuY3Rpb24gZHJvcE9iamVjdChpZHgpIHtcbiAgICBpZiAoaWR4IDwgMzYpIHJldHVybjtcbiAgICBoZWFwW2lkeF0gPSBoZWFwX25leHQ7XG4gICAgaGVhcF9uZXh0ID0gaWR4O1xufVxuXG5mdW5jdGlvbiB0YWtlT2JqZWN0KGlkeCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChpZHgpO1xuICAgIGRyb3BPYmplY3QoaWR4KTtcbiAgICByZXR1cm4gcmV0O1xufVxuXG5jb25zdCBsVGV4dERlY29kZXIgPSB0eXBlb2YgVGV4dERlY29kZXIgPT09ICd1bmRlZmluZWQnID8gKDAsIG1vZHVsZS5yZXF1aXJlKSgndXRpbCcpLlRleHREZWNvZGVyIDogVGV4dERlY29kZXI7XG5cbmxldCBjYWNoZWRUZXh0RGVjb2RlciA9IG5ldyBsVGV4dERlY29kZXIoJ3V0Zi04JywgeyBpZ25vcmVCT006IHRydWUsIGZhdGFsOiB0cnVlIH0pO1xuXG5jYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoKTtcblxubGV0IGNhY2hlZ2V0VWludDhNZW1vcnkwID0gbnVsbDtcbmZ1bmN0aW9uIGdldFVpbnQ4TWVtb3J5MCgpIHtcbiAgICBpZiAoY2FjaGVnZXRVaW50OE1lbW9yeTAgPT09IG51bGwgfHwgY2FjaGVnZXRVaW50OE1lbW9yeTAuYnVmZmVyICE9PSB3YXNtLm1lbW9yeS5idWZmZXIpIHtcbiAgICAgICAgY2FjaGVnZXRVaW50OE1lbW9yeTAgPSBuZXcgVWludDhBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRVaW50OE1lbW9yeTA7XG59XG5cbmZ1bmN0aW9uIGdldFN0cmluZ0Zyb21XYXNtMChwdHIsIGxlbikge1xuICAgIHJldHVybiBjYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW4pKTtcbn1cbi8qKlxuKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICAgIHdhc20uaW5pdCgpO1xufVxuXG5mdW5jdGlvbiBhZGRIZWFwT2JqZWN0KG9iaikge1xuICAgIGlmIChoZWFwX25leHQgPT09IGhlYXAubGVuZ3RoKSBoZWFwLnB1c2goaGVhcC5sZW5ndGggKyAxKTtcbiAgICBjb25zdCBpZHggPSBoZWFwX25leHQ7XG4gICAgaGVhcF9uZXh0ID0gaGVhcFtpZHhdO1xuXG4gICAgaGVhcFtpZHhdID0gb2JqO1xuICAgIHJldHVybiBpZHg7XG59XG5cbmxldCBXQVNNX1ZFQ1RPUl9MRU4gPSAwO1xuXG5jb25zdCBsVGV4dEVuY29kZXIgPSB0eXBlb2YgVGV4dEVuY29kZXIgPT09ICd1bmRlZmluZWQnID8gKDAsIG1vZHVsZS5yZXF1aXJlKSgndXRpbCcpLlRleHRFbmNvZGVyIDogVGV4dEVuY29kZXI7XG5cbmxldCBjYWNoZWRUZXh0RW5jb2RlciA9IG5ldyBsVGV4dEVuY29kZXIoJ3V0Zi04Jyk7XG5cbmNvbnN0IGVuY29kZVN0cmluZyA9ICh0eXBlb2YgY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gZnVuY3Rpb24gKGFyZywgdmlldykge1xuICAgIHJldHVybiBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvKGFyZywgdmlldyk7XG59XG4gICAgOiBmdW5jdGlvbiAoYXJnLCB2aWV3KSB7XG4gICAgY29uc3QgYnVmID0gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlKGFyZyk7XG4gICAgdmlldy5zZXQoYnVmKTtcbiAgICByZXR1cm4ge1xuICAgICAgICByZWFkOiBhcmcubGVuZ3RoLFxuICAgICAgICB3cml0dGVuOiBidWYubGVuZ3RoXG4gICAgfTtcbn0pO1xuXG5mdW5jdGlvbiBwYXNzU3RyaW5nVG9XYXNtMChhcmcsIG1hbGxvYywgcmVhbGxvYykge1xuXG4gICAgaWYgKHJlYWxsb2MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBidWYgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGUoYXJnKTtcbiAgICAgICAgY29uc3QgcHRyID0gbWFsbG9jKGJ1Zi5sZW5ndGgpO1xuICAgICAgICBnZXRVaW50OE1lbW9yeTAoKS5zdWJhcnJheShwdHIsIHB0ciArIGJ1Zi5sZW5ndGgpLnNldChidWYpO1xuICAgICAgICBXQVNNX1ZFQ1RPUl9MRU4gPSBidWYubGVuZ3RoO1xuICAgICAgICByZXR1cm4gcHRyO1xuICAgIH1cblxuICAgIGxldCBsZW4gPSBhcmcubGVuZ3RoO1xuICAgIGxldCBwdHIgPSBtYWxsb2MobGVuKTtcblxuICAgIGNvbnN0IG1lbSA9IGdldFVpbnQ4TWVtb3J5MCgpO1xuXG4gICAgbGV0IG9mZnNldCA9IDA7XG5cbiAgICBmb3IgKDsgb2Zmc2V0IDwgbGVuOyBvZmZzZXQrKykge1xuICAgICAgICBjb25zdCBjb2RlID0gYXJnLmNoYXJDb2RlQXQob2Zmc2V0KTtcbiAgICAgICAgaWYgKGNvZGUgPiAweDdGKSBicmVhaztcbiAgICAgICAgbWVtW3B0ciArIG9mZnNldF0gPSBjb2RlO1xuICAgIH1cblxuICAgIGlmIChvZmZzZXQgIT09IGxlbikge1xuICAgICAgICBpZiAob2Zmc2V0ICE9PSAwKSB7XG4gICAgICAgICAgICBhcmcgPSBhcmcuc2xpY2Uob2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgICBwdHIgPSByZWFsbG9jKHB0ciwgbGVuLCBsZW4gPSBvZmZzZXQgKyBhcmcubGVuZ3RoICogMyk7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBnZXRVaW50OE1lbW9yeTAoKS5zdWJhcnJheShwdHIgKyBvZmZzZXQsIHB0ciArIGxlbik7XG4gICAgICAgIGNvbnN0IHJldCA9IGVuY29kZVN0cmluZyhhcmcsIHZpZXcpO1xuXG4gICAgICAgIG9mZnNldCArPSByZXQud3JpdHRlbjtcbiAgICB9XG5cbiAgICBXQVNNX1ZFQ1RPUl9MRU4gPSBvZmZzZXQ7XG4gICAgcmV0dXJuIHB0cjtcbn1cblxubGV0IGNhY2hlZ2V0SW50MzJNZW1vcnkwID0gbnVsbDtcbmZ1bmN0aW9uIGdldEludDMyTWVtb3J5MCgpIHtcbiAgICBpZiAoY2FjaGVnZXRJbnQzMk1lbW9yeTAgPT09IG51bGwgfHwgY2FjaGVnZXRJbnQzMk1lbW9yeTAuYnVmZmVyICE9PSB3YXNtLm1lbW9yeS5idWZmZXIpIHtcbiAgICAgICAgY2FjaGVnZXRJbnQzMk1lbW9yeTAgPSBuZXcgSW50MzJBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRJbnQzMk1lbW9yeTA7XG59XG4vKipcbiovXG5leHBvcnQgY2xhc3MgU2NyZWVuIHtcblxuICAgIHN0YXRpYyBfX3dyYXAocHRyKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IE9iamVjdC5jcmVhdGUoU2NyZWVuLnByb3RvdHlwZSk7XG4gICAgICAgIG9iai5wdHIgPSBwdHI7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBmcmVlKCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLnB0cjtcbiAgICAgICAgdGhpcy5wdHIgPSAwO1xuXG4gICAgICAgIHdhc20uX193Ymdfc2NyZWVuX2ZyZWUocHRyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdmFyIHJldCA9IHdhc20uc2NyZWVuX25ldyh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIFNjcmVlbi5fX3dyYXAocmV0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBhZGRfcmVzb3VyY2Uod2lkdGgsIGhlaWdodCkge1xuICAgICAgICB2YXIgcmV0ID0gd2FzbS5zY3JlZW5fYWRkX3Jlc291cmNlKHRoaXMucHRyLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHJldCA+Pj4gMDtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgZ2V0X2NhbnZhc19iaXRtYXBfcHRyKCkge1xuICAgICAgICB2YXIgcmV0ID0gd2FzbS5zY3JlZW5fZ2V0X2NhbnZhc19iaXRtYXBfcHRyKHRoaXMucHRyKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbm9cbiAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBnZXRfcmVzb3VyY2VfYml0bWFwX3B0cihubykge1xuICAgICAgICB2YXIgcmV0ID0gd2FzbS5zY3JlZW5fZ2V0X3Jlc291cmNlX2JpdG1hcF9wdHIodGhpcy5wdHIsIG5vKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgLyoqXG4gICAgKi9cbiAgICBpbml0KCkge1xuICAgICAgICB3YXNtLnNjcmVlbl9pbml0KHRoaXMucHRyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKi9cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHdhc20uc2NyZWVuX3VwZGF0ZSh0aGlzLnB0cik7XG4gICAgfVxuICAgIC8qKlxuICAgICovXG4gICAgZHJhdygpIHtcbiAgICAgICAgd2FzbS5zY3JlZW5fZHJhdyh0aGlzLnB0cik7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgX193YmdfbG9nX2NlYzJjZDA0MzhiYTBiNmQgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgY29uc29sZS5sb2coZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19uZXdfNTljYjc0ZTQyMzc1OGVkZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXQgPSBuZXcgRXJyb3IoKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX3N0YWNrXzU1OGJhNTkxN2I0NjZlZGQgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcxKS5zdGFjaztcbiAgICB2YXIgcHRyMCA9IHBhc3NTdHJpbmdUb1dhc20wKHJldCwgd2FzbS5fX3diaW5kZ2VuX21hbGxvYywgd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MpO1xuICAgIHZhciBsZW4wID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgIGdldEludDMyTWVtb3J5MCgpW2FyZzAgLyA0ICsgMV0gPSBsZW4wO1xuICAgIGdldEludDMyTWVtb3J5MCgpW2FyZzAgLyA0ICsgMF0gPSBwdHIwO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2Vycm9yXzRiYjZjMmE5NzQwNzEyOWEgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSkpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICAgIHdhc20uX193YmluZGdlbl9mcmVlKGFyZzAsIGFyZzEpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX29iamVjdF9kcm9wX3JlZiA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICB0YWtlT2JqZWN0KGFyZzApO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5fdGhyb3cgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKSk7XG59O1xuXG4iLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tIFwid2FzbS1jYW52YXMtYml0Ymx0XCI7XG5pbXBvcnQgeyBtZW1vcnkgfSBmcm9tIFwid2FzbS1jYW52YXMtYml0Ymx0L3dhc21fY2FudmFzX2JpdGJsdF9iZ1wiO1xuXG4vKipcbiAqIFdlYkFzc2VtYmx5IEJpdGJsdCBUZXN0XG4gKi9cbmNsYXNzIEJpdGJsdCB7XG4gICAgc3RhdGljIHJlYWRvbmx5IENBTlZBU19XSURUSCA9IDc2ODtcbiAgICBzdGF0aWMgcmVhZG9ubHkgQ0FOVkFTX0hFSUdIVCA9IDU3NjtcbiAgICBzdGF0aWMgcmVhZG9ubHkgUkdCQSA9IDQ7XG5cbiAgICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjYW52YXNDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSBjYW52YXNJbWFnZURhdGE6IEltYWdlRGF0YTtcbiAgICBwcml2YXRlIHNjcmVlbjogU2NyZWVuO1xuICAgIHByaXZhdGUgaW1hZ2VEYXRhOiBVaW50OEFycmF5O1xuXG4gICAgcHJpdmF0ZSBhbmltZUlkOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlcjtcbiAgICBwcml2YXRlIGZyYW1lOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBmcHM6IG51bWJlcjtcblxuICAgIC8vIFRPRE86IGltYWdlIGZpbGUgb25seVxuICAgIHByaXZhdGUgcmVzb3VyY2VzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlcjsgfSA9IHtcbiAgICAgICAgXCJyZXNvdXJjZXMvcnVzdGFjZWFuLWZsYXQtaGFwcHktNzY4eDUxMi5wbmdcIjogbnVsbFxuICAgIH07XG4gICAgcHJpdmF0ZSBsb2FkZWRDb3VudDogbnVtYmVyO1xuICAgIHByaXZhdGUgcmVzb3VyY2VMb2FkZWQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NyZWVuJyk7XG4gICAgICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBgJHtCaXRibHQuQ0FOVkFTX1dJRFRIfWApO1xuICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGAke0JpdGJsdC5DQU5WQVNfSEVJR0hUfWApO1xuICAgICAgICAvLyBmb3IgZGV2aWNlIHdpZHRoXG4gICAgICAgIGxldCBwaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gPyB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA6IDE7XG4gICAgICAgIGlmKHBpeGVsUmF0aW8gPiAxICYmIHdpbmRvdy5zY3JlZW4ud2lkdGggPCBCaXRibHQuQ0FOVkFTX1dJRFRIKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IDMyMCArIFwicHhcIjtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IDI0MCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBjcmVhdGUgY2FudmFzIGNvbnRleHRcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5jYW52YXNJbWFnZURhdGEgPSB0aGlzLmNhbnZhc0NvbnRleHQuY3JlYXRlSW1hZ2VEYXRhKFxuICAgICAgICAgICAgQml0Ymx0LkNBTlZBU19XSURUSCwgQml0Ymx0LkNBTlZBU19IRUlHSFQpO1xuICAgICAgICAvLyBoZWxsbyB3YXNtIHdvcmxkXG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IFNjcmVlbihCaXRibHQuQ0FOVkFTX1dJRFRILCBCaXRibHQuQ0FOVkFTX0hFSUdIVCk7XG4gICAgICAgIC8vIGZvciBmcHMgcHJpbnRcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmZvbnQgPSBcIjE2cHggc2Fucy1zZXJpZlwiO1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbFN0eWxlID0gXCIjMGYwXCI7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHRoaXMuZnBzID0gMDtcbiAgICAgICAgdGhpcy5mcmFtZSA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc3RhcnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICB0aGlzLmxvb3AoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBsb29wXG4gICAgICovXG4gICAgcHVibGljIGxvb3AoKSB7XG4gICAgICAgIC8vIHJlc291cmNlIHdhaXRcbiAgICAgICAgaWYodGhpcy5yZXNvdXJjZUxvYWRlZCkge1xuICAgICAgICAgICAgLy8gdXBkYXRlIChUT0RPOiBzcGxpdCB1cGRhdGUvZHJhdylcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuLnVwZGF0ZSgpO1xuICAgICAgICAgICAgLy8gZHJhd1xuICAgICAgICAgICAgdGhpcy5zY3JlZW4uZHJhdygpO1xuICAgICAgICAgICAgLy8gcmVjcmVhdGUgVWludDhBcnJheVxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2Vtc2NyaXB0ZW4tY29yZS9lbXNjcmlwdGVuL2lzc3Vlcy82NzQ3XG4gICAgICAgICAgICB0aGlzLmltYWdlRGF0YSA9IG5ldyBVaW50OEFycmF5KFxuICAgICAgICAgICAgICAgIG1lbW9yeS5idWZmZXIsXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JlZW4uZ2V0X2NhbnZhc19iaXRtYXBfcHRyKCksXG4gICAgICAgICAgICAgICAgQml0Ymx0LkNBTlZBU19XSURUSCAqIEJpdGJsdC5DQU5WQVNfSEVJR0hUICogQml0Ymx0LlJHQkEpO1xuICAgICAgICAgICAgLy8gZHJhdyB3YXNtIGNhbGN1bGF0ZWQgYml0bWFwXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0ltYWdlRGF0YS5kYXRhLnNldCh0aGlzLmltYWdlRGF0YSk7XG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQucHV0SW1hZ2VEYXRhKHRoaXMuY2FudmFzSW1hZ2VEYXRhLCAwLCAwKTtcbiAgICAgICAgICAgIC8vIHByaW50IGZwc1xuICAgICAgICAgICAgdGhpcy5mcmFtZSsrO1xuICAgICAgICAgICAgaWYobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSA+PSAxMDAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mcHMgPSB0aGlzLmZyYW1lO1xuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWUgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbFRleHQoXCJmcHM6IFwiICsgdGhpcy5mcHMsIDAsIDE2KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBuZXh0IHRpY2tcbiAgICAgICAgdGhpcy5hbmltZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMubG9vcCgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXNvdXJjZSBsb2FkIChzeW5jKVxuICAgICAqL1xuICAgIHByaXZhdGUgbG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkZWRDb3VudCA9IDA7XG4gICAgICAgIHRoaXMucmVzb3VyY2VMb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yKGxldCByZXNvdXJjZSBpbiB0aGlzLnJlc291cmNlcykge1xuICAgICAgICAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSByZXNvdXJjZSBoaWRkZW4gY2FudmFzXG4gICAgICAgICAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gaW1hZ2Uud2lkdGg7XG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGltYWdlLmhlaWdodDtcbiAgICAgICAgICAgICAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICAgIC8vIGRyYXcgaW1hZ2VcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IGltYWdlIHR5cGVkYXJyYXlcbiAgICAgICAgICAgICAgICBsZXQgcmVzb3VyY2VJbWFnZURhdGEgPSBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAvLyBhbGxvYyB3YXNtIG1lbW9yeVxuICAgICAgICAgICAgICAgIGxldCByZXNvdXJjZU51bWJlciA9IHRoaXMuc2NyZWVuLmFkZF9yZXNvdXJjZShpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBsZXQgaW1hZ2VEYXRhID0gbmV3IFVpbnQ4QXJyYXkoXG4gICAgICAgICAgICAgICAgICAgIG1lbW9yeS5idWZmZXIsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuLmdldF9yZXNvdXJjZV9iaXRtYXBfcHRyKHRoaXMubG9hZGVkQ291bnQpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZS53aWR0aCAqIGltYWdlLmhlaWdodCAqIEJpdGJsdC5SR0JBKTtcbiAgICAgICAgICAgICAgICAvLyByZXNvdXJjZSBiaXRtYXAgdHJhbmNlZmFyXG4gICAgICAgICAgICAgICAgaW1hZ2VEYXRhLnNldChyZXNvdXJjZUltYWdlRGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICAvLyBzYXZlIHJlc291cmNlIG51bWJlclxuICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2VzW3Jlc291cmNlXSA9IHJlc291cmNlTnVtYmVyO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgaGlkZGVuIGNhbnZhc1xuICAgICAgICAgICAgICAgIGNhbnZhcy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gcmVzb3VyY2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2FpdCByZXNvdXJjZSBsb2FkZWRcbiAgICAgICAgbGV0IHdhaXQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYoT2JqZWN0LmtleXModGhpcy5yZXNvdXJjZXMpLmxlbmd0aCA8PSB0aGlzLmxvYWRlZENvdW50KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwod2FpdCk7XG4gICAgICAgICAgICAgICAgLy8gYXBwbGljYXRpb24gaW5pdFxuICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuLmluaXQoKTtcbiAgICAgICAgICAgICAgICAvLyBnb1xuICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2VMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMCk7XG4gICAgfVxufVxuXG5uZXcgQml0Ymx0KCkuc3RhcnQoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9