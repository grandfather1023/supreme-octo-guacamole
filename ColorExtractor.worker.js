/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@capture/color-theme-core/src/ColorExtractor.worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@capture/color-theme-core/src/ColorConverters.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@capture/color-theme-core/src/ColorConverters.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nclass ColorConverters {\n  static rgbToHsv(rgb) {\n    var h = 0;\n    var r = rgb.r;\n    var g = rgb.g;\n    var b = rgb.b;\n    var min = r < g && r < b ? r : g < b ? g : b; // faster version of Math.min(r, g, b);\n\n    var v = r > g && r > b ? r : g > b ? g : b; // faster version of Math.max(r, g, b)\n\n    var s = v === 0 ? 0 : (v - min) / v;\n    var delta = s === 0 ? 0.00001 : v - min;\n\n    switch (v) {\n      case r:\n        h = (g - b) / delta;\n        break;\n\n      case g:\n        h = 2 + (b - r) / delta;\n        break;\n\n      case b:\n        h = 4 + (r - g) / delta;\n        break;\n    }\n\n    return {\n      h: (1000 + h / 6) % 1,\n      s,\n      v\n    };\n  }\n\n  static hsvToRgb(hsv) {\n    var h = hsv.h;\n    var s = hsv.s;\n    var v = hsv.v;\n    h = (h + 1000) % 1; // keep in positive 0-1 range.\n\n    var r = 0;\n    var g = 0;\n    var b = 0;\n    var i = h * 6 >> 0;\n    var f = h * 6 - i;\n    var p = v * (1 - s);\n    var q = v * (1 - s * f);\n    var t = v * (1 - s * (1 - f));\n\n    switch (i) {\n      case 0:\n        r = v;\n        g = t;\n        b = p;\n        break;\n\n      case 1:\n        r = q;\n        g = v;\n        b = p;\n        break;\n\n      case 2:\n        r = p;\n        g = v;\n        b = t;\n        break;\n\n      case 3:\n        r = p;\n        g = q;\n        b = v;\n        break;\n\n      case 4:\n        r = t;\n        g = p;\n        b = v;\n        break;\n\n      case 5:\n        r = v;\n        g = p;\n        b = q;\n        break;\n    }\n\n    return {\n      r,\n      g,\n      b\n    };\n  }\n\n  static rgbToCmyk(rgb) {\n    var c = 1 - rgb.r;\n    var m = 1 - rgb.g;\n    var y = 1 - rgb.b;\n    var k = c < m && c < y ? c : m < y ? m : y; // faster version of Math.min(c, m, y);\n\n    if (k === 1) {\n      c = m = y = 0;\n    } else {\n      c = (c - k) / (1 - k);\n      m = (m - k) / (1 - k);\n      y = (y - k) / (1 - k);\n    }\n\n    return {\n      c,\n      m,\n      y,\n      k\n    };\n  }\n\n  static cmykToRgb(cmyk) {\n    var k = cmyk.k;\n    return {\n      r: 1 - (cmyk.c * (1 - k) + k),\n      g: 1 - (cmyk.m * (1 - k) + k),\n      b: 1 - (cmyk.y * (1 - k) + k)\n    };\n  }\n\n  static rgbToXyz(rgb) {\n    var r = rgb.r;\n    var g = rgb.g;\n    var b = rgb.b;\n    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;\n    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;\n    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92; // GDS: The last multiplier on x & z are to normalize to white, 2 degree D65.\n    // GDS: I'm not entirely certain if this should live here or in the lab conversion, or if it is necessary when we use fp10's color correction.\n\n    var x = (0.4124 * r + 0.3576 * g + 0.1805 * b) * 100 / 95.047;\n    var y = 0.2126 * r + 0.7152 * g + 0.0722 * b; // * 100/100\n\n    var z = (0.0193 * r + 0.1192 * g + 0.9505 * b) * 100 / 108.883;\n    return {\n      x,\n      y,\n      z\n    };\n  }\n\n  static xyzToRgb(xyz) {\n    var x = xyz.x;\n    var y = xyz.y;\n    var z = xyz.z; // multiply by white point, 2 degree D65\n    // GDS: I'm not entirely certain if this should live here or in the lab conversion, or if it is necessary when we use fp10's color correction.\n\n    x *= 95.047 / 100; //y *= 100/100;\n\n    z *= 108.883 / 100;\n    var r = 3.24063 * x - 1.53721 * y - 0.498629 * z;\n    var g = -0.968931 * x + 1.87576 * y + 0.0415175 * z;\n    var b = 0.0557101 * x - 0.204021 * y + 1.057 * z;\n    r = r > 0.0031308 ? 1.055 * Math.pow(r, 0.4167) - 0.055 : 12.92 * r;\n    g = g > 0.0031308 ? 1.055 * Math.pow(g, 0.4167) - 0.055 : 12.92 * g;\n    b = b > 0.0031308 ? 1.055 * Math.pow(b, 0.4167) - 0.055 : 12.92 * b;\n    return {\n      r,\n      g,\n      b\n    };\n  }\n\n  static rgbToLab(rgb) {\n    var xyz = this.rgbToXyz(rgb);\n    var x = xyz.x;\n    var y = xyz.y;\n    var z = xyz.z;\n    var fx = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 0.1379;\n    var fy = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 0.1379;\n    var fz = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 0.1379;\n    return {\n      l: (116 * fy - 16) / 100.00,\n      a: (500 * (fx - fy) + 0x80) / 0xFF,\n      b: (200 * (fy - fz) + 0x80) / 0xFF\n    };\n  }\n\n  static labToRgb(lab) {\n    var y = (lab.l * 100 + 16) / 116;\n    var x = y + (lab.a * 0xFF - 0x80) / 500;\n    var z = y - (lab.b * 0xFF - 0x80) / 200;\n    return this.xyzToRgb({\n      x: x > 0.2069 ? x * x * x : 0.1284 * (x - 0.1379),\n      y: y > 0.2069 ? y * y * y : 0.1284 * (y - 0.1379),\n      z: z > 0.2069 ? z * z * z : 0.1284 * (z - 0.1379)\n    });\n  } // lab = [l, a, b]\n\n\n  static labToLAB(lab) {\n    var op = [];\n    op[0] = lab[0] * 100;\n    op[1] = lab[1] * 0xFF - 0x80;\n    op[2] = lab[2] * 0xFF - 0x80;\n    return op;\n  } // lab = [L, A, B]\n\n\n  static labToLABInverse(lab) {\n    var op = [];\n    op[0] = lab[0] / 100;\n    op[1] = (lab[1] + 0x80) / 0xFF;\n    op[2] = (lab[2] + 0x80) / 0xFF;\n    return op;\n  }\n\n  static valuesToRgb(mode, values) {\n    var rgb, lab, cmyk, hsv;\n\n    switch (mode) {\n      case 'lab':\n        lab = {\n          l: values[0],\n          a: values[1],\n          b: values[2]\n        };\n        rgb = this.labToRgb(lab);\n        break;\n\n      case 'rgb':\n        rgb = {\n          r: values[0],\n          g: values[1],\n          b: values[2]\n        };\n        break;\n\n      case 'cmyk':\n        cmyk = {\n          c: values[0],\n          m: values[1],\n          y: values[2],\n          k: values[3]\n        };\n        rgb = this.cmykToRgb(cmyk);\n        break;\n\n      case 'hsv':\n        hsv = {\n          h: values[0],\n          s: values[1],\n          v: values[2]\n        };\n        rgb = this.hsvToRgb(hsv);\n        break;\n    }\n\n    function limit01(val) {\n      return val < 0 ? 0 : val > 1 ? 1 : val;\n    }\n\n    rgb = {\n      r: limit01(rgb.r),\n      g: limit01(rgb.g),\n      b: limit01(rgb.b)\n    };\n    return rgb;\n  }\n\n  static valuesToHex(mode, values) {\n    var rgb = this.valuesToRgb(mode, values);\n    return this._hexToString((Math.round(rgb.r * 255) << 16 | Math.round(rgb.g * 255) << 8 | Math.round(rgb.b * 255)) >>> 0).toUpperCase();\n  }\n\n  static _hexToString(value) {\n    var hex = value.toString(16);\n    hex = '000000'.substr(0, 6 - hex.length) + hex;\n    return hex;\n  }\n\n  static RGBToHex(rgb) {\n    let r = rgb.r.toString(16),\n        g = rgb.g.toString(16),\n        b = rgb.b.toString(16);\n    if (r.length === 1) r = '0' + r;\n    if (g.length === 1) g = '0' + g;\n    if (b.length === 1) b = '0' + b;\n    return '#' + r + g + b;\n  }\n\n}\n\nexports.default = ColorConverters;\n\n//# sourceURL=webpack:///./node_modules/@capture/color-theme-core/src/ColorConverters.js?");

/***/ }),

/***/ "./node_modules/@capture/color-theme-core/src/ColorExtractor.worker.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@capture/color-theme-core/src/ColorExtractor.worker.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _ColorExtractorHelper = _interopRequireDefault(__webpack_require__(/*! ./ColorExtractorHelper */ \"./node_modules/@capture/color-theme-core/src/ColorExtractorHelper.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nself.addEventListener('message', function (options) {\n  let colorExtractor = new _ColorExtractorHelper.default();\n  let points = colorExtractor.extractColorFromImage(options.data.imageData.data, options.data.width, options.data.height, options.data.swatchCount, options.data.colorMood); // had to check this because while running UT this in listener is undefined\n\n  if (this) {\n    this.postMessage(points);\n  } else {\n    self.postMessage(points);\n  }\n}, false);\nself.addEventListener('error', function () {\n  // error returned here\n  self.postMessage('Error');\n}, false);\n\n//# sourceURL=webpack:///./node_modules/@capture/color-theme-core/src/ColorExtractor.worker.js?");

/***/ }),

/***/ "./node_modules/@capture/color-theme-core/src/ColorExtractorHelper.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@capture/color-theme-core/src/ColorExtractorHelper.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _ColorConverters = _interopRequireDefault(__webpack_require__(/*! ./ColorConverters */ \"./node_modules/@capture/color-theme-core/src/ColorConverters.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst NUM_BINS_H = 64;\nconst NUM_BINS_S = 64;\nconst NUM_BINS_V = 10;\nconst HISTOGRAM_SIZE = NUM_BINS_H * NUM_BINS_S * NUM_BINS_V;\nconst epsilon = 1.0e-10;\nconst practicallyInfiniteEnergy = 1.79769e+305; //Math.pow(2,64)/1000.0;\n\nconst emptyArray = function (length) {\n  if (self.Float64Array) {\n    return new Float64Array(length);\n  }\n\n  var array = new Array(length);\n\n  while (--length >= 0) {\n    array[length] = 0;\n  }\n\n  return array;\n};\n\nconst copyArray = function (length, oldArray) {\n  if (self.Float64Array) {\n    var copy = new Float64Array(length);\n    copy.set(oldArray);\n    return copy;\n  }\n\n  var array = new Array(length);\n\n  for (var i = 0; i < length; i++) {\n    array[i] = oldArray[i];\n  }\n\n  return array;\n};\n\nconst copyHistogram = function (oldHistogram) {\n  return copyArray(HISTOGRAM_SIZE, oldHistogram);\n};\n\nconst intersectionEnergy = function (p1, p2, hardCoreInteractionRadius, colorRepulsion, gBB, gSS) {\n  if (p1.density < epsilon || p2.density < epsilon) {\n    return practicallyInfiniteEnergy;\n  }\n\n  const d = ColorImageHarmonyMath.weightedDistanceLab(p1.color, p2.color, gBB, gSS);\n  const hardCoreEnergy = d < hardCoreInteractionRadius ? practicallyInfiniteEnergy : 0; // GDS: always uses the \"kLoose\" harmony mode, because nothing else was ever used in the original Kuler version.\n  // A hard core repulsion to keep points farther away than fHardCoreInteractionRadius\n  // and a Coulomb repulsion outside\n\n  return d < hardCoreInteractionRadius ? hardCoreEnergy * (1.0 - d / hardCoreInteractionRadius) : colorRepulsion * (1.0 / d - 1.0 / hardCoreInteractionRadius);\n};\n\nclass ColorBitmapData {\n  constructor(imageData, width, height) {\n    this._data = imageData;\n    this._width = width;\n    this._height = height;\n  }\n\n  getPixel(x, y) {\n    var i = (x + y * this._width) * 4;\n    return {\n      r: this._data[i],\n      g: this._data[i + 1],\n      b: this._data[i + 2],\n      a: this._data[i + 3]\n    };\n  }\n\n}\n\nclass ColorHarmonyPoint {\n  constructor(color, density) {\n    this.color = color;\n    this.density = density;\n  }\n\n  static harmonyPointsSort(hp1, hp2) {\n    var hsv1 = hp1.color.hsv;\n    var hsv2 = hp2.color.hsv;\n\n    if (hsv1.h > hsv2.h) {\n      return -1;\n    } else if (hsv1.h < hsv2.h) {\n      return 1;\n    } else if (hsv1.s > hsv2.s) {\n      return -1;\n    } else if (hsv1.s < hsv2.s) {\n      return 1;\n    } else if (hsv1.v > hsv2.v) {\n      return -1;\n    } else if (hsv1.v < hsv2.v) {\n      return 1;\n    }\n\n    return 0;\n  }\n\n}\n\nclass ColorStyle {\n  constructor(mood) {\n    var colorfulnessEnhancement, shadowHighlightSuppression;\n\n    switch (mood.toLowerCase()) {\n      case 'bright':\n        colorfulnessEnhancement = 0.88;\n        shadowHighlightSuppression = 0.75;\n        break;\n\n      case 'dark':\n        colorfulnessEnhancement = -0.8;\n        shadowHighlightSuppression = -0.8;\n        break;\n\n      case 'muted':\n        colorfulnessEnhancement = -0.8;\n        shadowHighlightSuppression = 0.6;\n        break;\n\n      case 'deep':\n        colorfulnessEnhancement = 0.6;\n        shadowHighlightSuppression = -0.7;\n        break;\n\n      case 'colorful':\n        colorfulnessEnhancement = 0.5;\n        shadowHighlightSuppression = 0;\n        break;\n\n      case 'blank':\n        colorfulnessEnhancement = 0;\n        shadowHighlightSuppression = 0;\n        break;\n\n      default:\n        colorfulnessEnhancement = 0.5;\n        shadowHighlightSuppression = 0;\n    } //Assign Values:\n\n\n    this.gHH = 1.0;\n    this.gSS = 0.23;\n    this.gBB = 0.04;\n    this.colorRepulsion = 2.5;\n    this.hardCoreInteractionRadius = 4.0;\n    this.saturationScaleFactor = 1.0;\n    this.style = mood;\n    this.colorfulnessEnhancement = colorfulnessEnhancement;\n    this.shadowHighlightSuppression = shadowHighlightSuppression;\n  }\n\n}\n\nclass ColorImageHarmonyMath {\n  static weight(hue, saturation, value, colorfulnessEnhancement, shadowHighlightSuppression) {\n    var minWeight = 0.001;\n    var weightNew = this.suppression(this.colorfulness(hue, saturation, value), colorfulnessEnhancement) * this.suppression(value, shadowHighlightSuppression) * this.tripleCubicSigmoid(saturation, 0.0, 30.0) * this.tripleCubicSigmoid(value, 0.0, 30.0);\n    return weightNew < minWeight ? minWeight : weightNew;\n  }\n\n  static colorfulness(hue, saturation, value) {\n    var lab = _ColorConverters.default.rgbToLab(_ColorConverters.default.hsvToRgb({\n      h: hue / 255,\n      s: saturation / 255,\n      v: value / 255\n    }));\n\n    var a = lab.a * 2.0 - 1.0;\n    var b = lab.b * 2.0 - 1.0;\n    return 255.0 * Math.sqrt(0.5 * (a * a + b * b));\n  }\n\n  static suppression(value, amount) {\n    if (amount < 0.0) {\n      amount *= -1.0;\n      value = 255.0 - value;\n    }\n\n    var s = value / 255.0; // 0 to 1 for saturationEnhancement between 0 and 0.5\n\n    var f = amount < 0.5 ? 2.0 * amount : 1.0; // 0 to 1 for saturationEnhancement between 0.5 and 1\n\n    var g = amount < 0.5 ? 0 : 2.0 * amount - 1.0;\n    return Math.pow(f * this.cubicSigmoid(s) + (1.0 - f), 1.0 + g * 3.0);\n  }\n\n  static cubicSigmoid(x) {\n    if (x < 0.0) {\n      return 0.0;\n    }\n\n    if (x > 1.0) {\n      return 1.0;\n    }\n\n    var y = 2.0 * x - 1.0;\n    return 0.5 * (1.0 + y * (1.5 - 0.5 * y * y));\n  }\n\n  static hsvToLab(p) {\n    var hsv, lab;\n    hsv = p.hsv;\n    p.rgb = _ColorConverters.default.hsvToRgb({\n      h: hsv.h,\n      s: hsv.s,\n      v: hsv.v\n    });\n    lab = _ColorConverters.default.rgbToLab(p.rgb);\n    lab.l *= 255;\n    lab.a *= 255;\n    lab.b *= 255;\n    p.gregLab = lab;\n  }\n\n  static weightedDistanceLab(p1, p2, gBB, gSS) {\n    var l1, a1, b1, l2, a2, b2;\n\n    if (!p1.gregLab) {\n      this.hsvToLab(p1);\n    }\n\n    if (!p2.gregLab) {\n      this.hsvToLab(p2);\n    }\n\n    l1 = p1.gregLab.l;\n    l2 = p2.gregLab.l;\n    a1 = p1.gregLab.a;\n    a2 = p2.gregLab.a;\n    b1 = p1.gregLab.b;\n    b2 = p2.gregLab.b;\n    var dL = l1 - l2;\n    var da = a1 - a2;\n    var db = b1 - b2;\n    var s1 = Math.sqrt(a1 * a1 + b1 * b1);\n    var s2 = Math.sqrt(a2 * a2 + b2 * b2);\n    var s12 = s1 - s2;\n    var dSaturation2 = s12 * s12;\n    var dHue2 = da * da + db * db - dSaturation2;\n    return Math.sqrt(gBB * dL * dL + gSS * dSaturation2 + dHue2);\n  }\n\n}\n\nColorImageHarmonyMath.tripleCubicSigmoid = function (x, x1, x2) {\n  var range = x2 - x1;\n  return range > 0.0 ? this.cubicSigmoid((x - x1) / range) : 1.0;\n};\n\nclass ColorImageHarmony {\n  constructor() {\n    this._colors = [];\n    this.points = [];\n    this.finalColor = [];\n    this._numColors = null;\n    this._xMultiplier = 1;\n    this._yMultiplier = 1;\n    this._xOffset = 0;\n    this._yOffset = 0;\n    this._harmonyPoints = [];\n  }\n\n  extractColors(bitmapData, colorStyle, numColors) {\n    this._bitmapData = bitmapData;\n    this._colorStyle = colorStyle;\n    this._numColors = numColors;\n    this.synchronousExtract();\n  }\n\n  synchronousExtract() {\n    this.clearHistogram();\n    this.generateHistogram();\n    this.weightAndNormalizeHistogram();\n    this.findBestColors();\n    this.findBestPoints();\n  }\n\n  clearHistogram() {\n    this._histogram = emptyArray(HISTOGRAM_SIZE);\n  }\n\n  generateHistogram() {\n    // Required Arguments.\n    var bitmapData = this._bitmapData,\n        _yOffset = this._yOffset,\n        _xOffset = this._xOffset,\n        _yMultiplier = this._yMultiplier,\n        _xMultiplier = this._xMultiplier,\n        nh = NUM_BINS_H,\n        ns = NUM_BINS_S,\n        nv = NUM_BINS_V,\n        ch = 255.0 / 256.0 * nh,\n        cs = 255.0 / 256.0 * ns,\n        cv = 255.0 / 256.0 * nv,\n        width = this._bitmapData._width,\n        height = this._bitmapData._height,\n        histogram = this._histogram || emptyArray(HISTOGRAM_SIZE),\n        h,\n        s,\n        v,\n        hsv,\n        x,\n        y,\n        rgb;\n\n    for (y = _yOffset; y < height; y += _yMultiplier) {\n      for (x = _xOffset; x < width; x += _xMultiplier) {\n        rgb = bitmapData.getPixel(x, y);\n        rgb.r /= 255;\n        rgb.g /= 255;\n        rgb.b /= 255;\n        hsv = _ColorConverters.default.rgbToHsv(rgb);\n        h = ~~(hsv.h * ch);\n        s = ~~(hsv.s * cs);\n        v = ~~(hsv.v * cv);\n        histogram[(h * NUM_BINS_S + s) * NUM_BINS_V + v]++;\n      }\n    }\n\n    this._histogram = histogram;\n  }\n\n  weightAndNormalizeHistogram() {\n    var _numColors = this._numColors;\n    var result = this.weightAndNormalize(); //harmony = result.harmony;\n\n    var volume = result.volume; //Volume is req to validate/determine _numcolors\n    //TODO: Verify this case.\n\n    if (volume < _numColors) {\n      this._colorStyle = new ColorStyle('Blank');\n      result = this.weightAndNormalize();\n      this._numColors = Math.min(result.volume, _numColors); // Reducing Number of colors as impossible to find.\n    }\n  }\n\n  weightAndNormalize() {\n    // Required Arguments.\n    var colorfulnessEnhancement = this._colorStyle.colorfulnessEnhancement;\n    var shadowHighlightSuppression = this._colorStyle.shadowHighlightSuppression; // Code\n\n    var histogram = copyHistogram(this._histogram);\n    var maxDensity = 0;\n    var density;\n    var nh = NUM_BINS_H;\n    var ns = NUM_BINS_S;\n    var nv = NUM_BINS_V;\n    var h, s, v, hue, saturation, value; // GDS: equivalent to ImageData.weightDensities\n\n    for (h = 0; h < nh; h++) {\n      hue = ~~((h * 256 + nh / 2) / nh); // GDS: this math looks wrong to me.\n\n      if (hue > 255) {\n        hue = 255;\n      }\n\n      for (s = 0; s < ns; s++) {\n        saturation = ~~((s * 256 + ns / 2) / ns); // GDS: this math looks wrong to me.\n\n        if (saturation > 255) {\n          saturation = 255;\n        }\n\n        for (v = 0; v < nv; v++) {\n          if (histogram[(h * NUM_BINS_S + s) * NUM_BINS_V + v] === 0) {\n            continue;\n          }\n\n          value = ~~((v + 0.5) * 256 / nv); // GDS: this also looks a little off.\n\n          density = histogram[(h * NUM_BINS_S + s) * NUM_BINS_V + v] *= ColorImageHarmonyMath.weight(hue, saturation, value, colorfulnessEnhancement, shadowHighlightSuppression);\n\n          if (density > maxDensity) {\n            maxDensity = density;\n          }\n        }\n      }\n    }\n\n    var smallestAllowedDensity = 0.01;\n    var maxLogDensity = maxDensity > smallestAllowedDensity ? Math.log(maxDensity / smallestAllowedDensity) : 0; // GDS: equivalent to fHSBHistogram.NormalizeLogDensities & fHSBHistogram.ColorVolume()\n\n    var volume = 0,\n        location,\n        logDensity;\n\n    if (maxLogDensity > 0) {\n      for (h = 0; h < nh; h++) {\n        for (s = 0; s < ns; s++) {\n          for (v = 0; v < nv; v++) {\n            location = (h * NUM_BINS_S + s) * NUM_BINS_V + v;\n\n            if (histogram[location] === 0) {\n              continue;\n            }\n\n            density = histogram[location];\n            logDensity = density > smallestAllowedDensity ? Math.log(density / smallestAllowedDensity) / maxLogDensity : 0;\n\n            if (logDensity !== 0) {\n              volume++;\n            }\n\n            histogram[location] = logDensity;\n          }\n        }\n      }\n    }\n\n    this._weightedHistogram = histogram;\n    return {\n      volume\n    };\n  }\n\n  findBestColors() {\n    // Required Arguments.\n    var _colorStyle = this._colorStyle;\n    var _numColors = this._numColors; //Code\n\n    var histogram = this._weightedHistogram;\n    var nh = NUM_BINS_H;\n    var ns = NUM_BINS_S;\n    var nv = NUM_BINS_V;\n    var h, s, v, hue, saturation, value, color; // GDS: equivalent to ImageData.FindMinimumEnergyHarmonyPoints\n\n    var harmonyPoints = []; // GDS: equivalent to HSBHistogram.ConvertToLabHarmonyPoints\n\n    for (h = 0; h < nh; h++) {\n      // GDS: I think this is innacurate, but mirrors what the unoptimized code did:\n      // GDS: I think this is more accurate: ((h * 256 + (numHueBins/2)) / numHueBins)  *1.411;\n      // ~~ is faster than Math.floor as it does not involve a function call.\n      hue = ~~(~~((h * 256 + nh / 2) / nh) * 1.411);\n\n      for (s = 0; s < ns; s++) {\n        saturation = ~~((s * 256 + ns / 2) / ns * 0.392);\n\n        if (saturation > 100) {\n          saturation = 100;\n        }\n\n        for (v = 0; v < nv; v++) {\n          if (histogram[(h * NUM_BINS_S + s) * NUM_BINS_V + v] === 0) {\n            continue;\n          }\n\n          value = ~~((v + 0.5) * 256 / nv * 0.392); //TODO: Verify. NOT SURE!!\n\n          color = {\n            hsv: {\n              h: hue / 360,\n              s: saturation / 100,\n              v: value / 100\n            }\n          };\n          harmonyPoints.push(new ColorHarmonyPoint(color, histogram[(h * NUM_BINS_S + s) * NUM_BINS_V + v]));\n        }\n      }\n    } // Add one harmony point at a time\n    // Each time, we add the one which contributes the least energy to the system\n\n\n    var hardCoreInteractionRadius = _colorStyle.hardCoreInteractionRadius;\n    var colorRepulsion = _colorStyle.colorRepulsion;\n    var gBB = _colorStyle.gBB;\n    var gSS = _colorStyle.gSS;\n    var bestHarmonyPoints = [],\n        a,\n        i,\n        j,\n        smallestEnergyAddition,\n        energy,\n        bestHarmonyPoint;\n\n    for (a = 0; a < _numColors; a++) {\n      //TODO: Needs Review.\n      smallestEnergyAddition = Math.pow(10, 100); //Math.pow(2,63) - 1;\n\n      for (i = 0; i < harmonyPoints.length; i++) {\n        energy = 1.0 - harmonyPoints[i].density;\n\n        for (j = 0; j < bestHarmonyPoints.length; j++) {\n          energy += intersectionEnergy(harmonyPoints[i], bestHarmonyPoints[j], hardCoreInteractionRadius, colorRepulsion, gBB, gSS);\n        }\n\n        if (energy < smallestEnergyAddition) {\n          smallestEnergyAddition = energy;\n          bestHarmonyPoint = harmonyPoints[i];\n        }\n      }\n\n      bestHarmonyPoints.push(bestHarmonyPoint);\n    }\n\n    this._harmonyPoints = bestHarmonyPoints;\n  }\n\n  findBestPoints() {\n    var harmonyPoints = this._harmonyPoints;\n    harmonyPoints.sort(ColorHarmonyPoint.harmonyPointsSort);\n\n    for (var i = 0; i < harmonyPoints.length; i++) {\n      this._colors.push({\n        rgb: _ColorConverters.default.hsvToRgb(harmonyPoints[i].color.hsv)\n      });\n\n      this.points.push(this.findPixel(this._colors[i]));\n    }\n\n    this.finalColor = this._colors;\n  }\n\n  findPixel(color) {\n    var bitmapData = this._bitmapData;\n    var width = this._bitmapData._width;\n    var height = this._bitmapData._height;\n    var cr = color.rgb.r * 255;\n    var cg = color.rgb.g * 255;\n    var cb = color.rgb.b * 255; //TODO: Needs Review.\n\n    var smallestDistance = 1.79769e+305; //Math.pow(2,31) - 1;\n\n    var escapeDistance = 12; // (2^2)*3\n\n    var rx = 0;\n    var ry = 0;\n    var done_xloop = false;\n\n    for (var y = 0; !done_xloop && y < height; y++) {\n      for (var x = 0; !done_xloop && x < width; x++) {\n        //TODO: Verify:\n        var rgb = bitmapData.getPixel(x, y);\n        var r = rgb.r - cr;\n        var g = rgb.g - cg;\n        var b = rgb.b - cb;\n        var d = r * r + g * g + b * b;\n\n        if (d < smallestDistance) {\n          rx = x;\n          ry = y;\n          smallestDistance = d;\n\n          if (d <= escapeDistance) {\n            done_xloop = true;\n          }\n        }\n      }\n    }\n\n    return {\n      x: rx,\n      y: ry\n    };\n  }\n\n}\n\nclass ColorExtractorHelper {\n  extractColorFromImage(imageData, width, height, count, mood) {\n    var harmony = new ColorImageHarmony();\n    var bitmapData = new ColorBitmapData(imageData, width, height);\n    var colorStyle = new ColorStyle(mood);\n    harmony.extractColors(bitmapData, colorStyle, count);\n    return {\n      finalColor: harmony.finalColor,\n      points: harmony.points\n    };\n  }\n\n  findPixels(imageData, colors) {\n    var harmony = new ColorImageHarmony();\n    harmony._bitmapData = new ColorBitmapData(imageData, imageData.width, imageData.height);\n    var pixels = [];\n    colors.forEach(function (color) {\n      pixels.push(harmony.findPixel(color));\n    });\n    return pixels;\n  }\n\n}\n\nexports.default = ColorExtractorHelper;\n\n//# sourceURL=webpack:///./node_modules/@capture/color-theme-core/src/ColorExtractorHelper.js?");

/***/ })

/******/ });