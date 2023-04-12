/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&family=Tilt+Warp&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&family=Tilt+Warp&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-family: roboto;\n  --mainPadding: calc(min(10vw + 150px, 10%));\n  --headerColor: #6d28d9;\n  --sidebarColor: #f4f4f5;\n  --hoverColor: #bebebe;\n}\n\nbody {\n  height: 100vh;\n  margin: 0;\n  min-width: 670px;\n  /* background-color: red; */\n}\n\n#content {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 1fr 9fr 1fr;\n  grid-template-areas: \"header header header\" \"main main main\" \"footer footer footer\";\n  text-align: center;\n}\n\n/* HEADER PART */\n.header {\n  font-family: \"Tilt Warp\";\n  background-color: var(--headerColor);\n  color: white;\n  grid-area: header;\n  /* border-bottom: 1px solid red; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* MAIN PART */\n.main {\n  grid-area: main;\n  padding: 0 var(--mainPadding);\n}\n\n.main-title {\n  display: flex;\n  flex-direction: column-reverse;\n  font-family: \"Tilt Warp\";\n  font-size: 2rem;\n  justify-content: center;\n  align-items: center;\n}\n.main-title h2 {\n  margin: 0;\n}\n.main-title button {\n  font-weight: bold;\n  width: 20%;\n  font-size: 1.5rem;\n  color: black;\n  border: 1px solid black;\n  border-radius: 30px;\n}\n\n.main-content {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n\n.main-content-left, .main-content-right {\n  display: flex;\n  flex-direction: column;\n}\n\n.game-board {\n  display: flex;\n}\n\n.cell {\n  width: 60px;\n  height: 60px;\n  border: 1px solid black;\n}\n\n/* FOOTER PART */\n.footer {\n  background-color: green;\n  grid-area: footer;\n  font-size: larger;\n  font-weight: bold;\n}\n\n@media only screen and (max-width: 1575px) {\n  .main-content {\n    flex-direction: column;\n    align-items: center;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAGA;EACI,mBAAA;EACA,2CAAA;EACA,sBAAA;EACA,uBAAA;EACA,qBAAA;AAAJ;;AAEA;EACI,aAAA;EACA,SAAA;EACA,gBAAA;EACA,2BAAA;AACJ;;AACA;EACI,YAAA;EACA,aAAA;EACA,+BAAA;EACA,mFACA;EAGA,kBAAA;AADJ;;AAGA,gBAAA;AACA;EACI,wBAAA;EACA,oCAAA;EACA,YAAA;EACA,iBAAA;EACA,kCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAAJ;;AAGA,cAAA;AACA;EACI,eAAA;EACA,6BAAA;AAAJ;;AAEA;EACI,aAAA;EACA,8BAAA;EACA,wBAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;AACJ;AACI;EACI,SAAA;AACR;AAEI;EAEA,iBAAA;EACA,UAAA;EACA,iBAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;AADJ;;AAKA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;AAFJ;;AAIA;EACI,aAAA;EACA,sBAAA;AADJ;;AAGA;EACI,aAAA;AAAJ;;AAGA;EACI,WAAA;EACA,YAAA;EACA,uBAAA;AAAJ;;AAGA,gBAAA;AACA;EACI,uBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;AAAJ;;AAGA;EACI;IACI,sBAAA;IACA,mBAAA;EAAN;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Tilt+Warp&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Tilt+Warp&display=swap');\n\n:root{\n    font-family: roboto;\n    --mainPadding: calc(min(10vw + 150px, 10%));\n    --headerColor: #6d28d9;\n    --sidebarColor: #f4f4f5;\n    --hoverColor: #bebebe;\n}\nbody{\n    height: 100vh;\n    margin:0;\n    min-width: 670px;\n    /* background-color: red; */\n}\n#content{\n    height:100%;\n    display:grid;\n    grid-template-rows: 1fr 9fr 1fr;\n    grid-template-areas: \n    \"header header header\"\n    \"main main main\"\n    \"footer footer footer\";\n    text-align: center;\n}\n/* HEADER PART */\n.header{\n    font-family: 'Tilt Warp';\n    background-color: var(--headerColor);\n    color: white;\n    grid-area: header;\n    /* border-bottom: 1px solid red; */\n    display:flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* MAIN PART */\n.main{\n    grid-area: main;\n    padding: 0 var(--mainPadding);\n}\n.main-title{\n    display: flex;\n    flex-direction: column-reverse;\n    font-family: 'Tilt Warp';\n    font-size: 2rem;\n    justify-content: center;\n    align-items: center;\n\n    h2{\n        margin:0\n    }\n\n    button{\n\n    font-weight: bold;\n    width:20%;\n    font-size: 1.5rem;\n    color: black;\n    border: 1px solid black;\n    border-radius: 30px;\n    // background-color: var(grey);\n    }\n}\n.main-content{\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 20px;\n}\n.main-content-left, .main-content-right{\n    display: flex;\n    flex-direction: column;\n}\n.game-board{\n    display: flex;\n}\n\n.cell{\n    width: 60px;\n    height: 60px;\n    border: 1px solid black;\n}\n\n/* FOOTER PART */\n.footer{\n    background-color: green;\n    grid-area: footer;\n    font-size: larger;\n    font-weight: bold;\n}\n\n@media only screen and (max-width: 1575px){\n    .main-content{\n        flex-direction: column;\n        align-items: center;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _mainLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainLoop */ "./src/mainLoop.js");



// function createPlayer() {
//   const input = document.createElement('input');
//   const button = document.createElement('button');
//   button.textContent = 'Click';
//   button.addEventListener('click', mainLoop.createPlayers(input.value));
// }

function createHeader() {
  const header = document.createElement('div');
  const title = document.createElement('h1');

  header.classList = 'header';
  title.textContent = 'BATTLESHIPS';
  header.appendChild(title);

  return header;
}

function createMain() {
  const main = document.createElement('div');
  const mainProjectTitle = document.createElement('h2');
  const mainContent = document.createElement('div');
  const mainContentLeft = document.createElement('div');
  const mainContentRight = document.createElement('div');

  const titlePlayer = document.createElement('h2');
  const titleAI = document.createElement('h2');

  titlePlayer.textContent = 'Player';
  titleAI.textContent = 'AI';

  mainContentLeft.appendChild(titlePlayer);

  mainContentLeft.classList = 'main-content-left';
  mainContentRight.classList = 'main-content-right';
  mainContentLeft.appendChild(createGameBoard('left'));

  mainContent.classList = 'main-content';

  mainProjectTitle.classList = 'main-title';
  mainProjectTitle.textContent = '';
  main.classList = 'main';

  mainContentRight.appendChild(titleAI);
  mainContentRight.appendChild(createGameBoard('right'));

  main.appendChild(mainProjectTitle);
  // const button = document.createElement('button');
  // button.textContent = 'Play Again!';
  // mainProjectTitle.appendChild(button);
  mainContent.appendChild(mainContentLeft);
  mainContent.appendChild(mainContentRight);
  main.appendChild(mainContent);

  // mainContentRight.style.display = 'none';

  return main;
}

function createFooter() {
  const footer = document.createElement('div');
  //   const createdBy = document.createElement('p');
  footer.innerHTML = '<p>Created by <a href="https://github.com/wojwoj8">wojwoj8</a></p>';
  //   createdBy.textContent = 'Created By '
  footer.classList = 'footer';
  return footer;
}

function winHandler() {
  const winner = document.querySelector('.main-title');
  const button = document.createElement('button');
  button.textContent = 'Play Again!';
  button.addEventListener('click', () => {
    const main = document.querySelector('.main');
    const content = document.querySelector('#content');
    main.remove();
    _mainLoop__WEBPACK_IMPORTED_MODULE_1__.mainLoop.resetGame();
    content.appendChild(createMain());
    markShipsOnGameBoard();
    // markShipsOnGameBoardAI();
    // console.log(mainLoop.player1Gameboard.table());
  });

  winner.appendChild(button);
}
// creates clone of all cells and replace originals
function removeAllListeners() {
  const allCells = document.querySelectorAll('.cell');
  allCells.forEach((cell) => {
    const newCell = cell.cloneNode(true);
    cell.parentNode.replaceChild(newCell, cell);
  });
}
function playT(col, row, cellDiv) {
  // console.log(`clicked cell at x:${col}, y:${row}`);
  const playerTurn = _mainLoop__WEBPACK_IMPORTED_MODULE_1__.mainLoop.player1.playTurn(_mainLoop__WEBPACK_IMPORTED_MODULE_1__.mainLoop.AIGameboard, _mainLoop__WEBPACK_IMPORTED_MODULE_1__.mainLoop.AI, col, row);

  if (typeof (_mainLoop__WEBPACK_IMPORTED_MODULE_1__.mainLoop.AIGameboard.table()[col][row]) === 'object') {
    cellDiv.style.backgroundColor = 'red';
  } else {
    cellDiv.style.backgroundColor = 'blue';
  }
  if (playerTurn.z === true) {
    const winner = document.querySelector('.main-title');
    const win = document.createElement('h2');
    winHandler();
    win.innerHTML = 'Player Won!!!';
    winner.appendChild(win);
    removeAllListeners();
    // cellDiv.removeEventListener('click', playT);
    return;
  }
  const aiTurn = _mainLoop__WEBPACK_IMPORTED_MODULE_1__.mainLoop.AI.playTurn(_mainLoop__WEBPACK_IMPORTED_MODULE_1__.mainLoop.player1Gameboard, _mainLoop__WEBPACK_IMPORTED_MODULE_1__.mainLoop.player1, col, row);
  // console.log(aiTurn.x);
  // console.log(aiTurn.x);
  const elements = document.querySelectorAll(`[data-x="${aiTurn.x}"][data-y="${aiTurn.y}"]`);
  const el = elements[0];
  if (typeof (_mainLoop__WEBPACK_IMPORTED_MODULE_1__.mainLoop.player1Gameboard.table()[aiTurn.x][aiTurn.y]) === 'object') {
    el.style.backgroundColor = 'red';
  } else {
    el.style.backgroundColor = 'blue';
  }
  if (aiTurn.z === true) {
    const winner = document.querySelector('.main-title');
    const win = document.createElement('h2');
    winHandler();
    win.innerHTML = 'AI Won!!!';
    winner.appendChild(win);
    removeAllListeners();
    return;
  }

  // console.log(mainLoop.player1Gameboard.table());
  cellDiv.removeEventListener('click', playT);
}

function createGameBoard(name) {
  const gameBoard = document.createElement('div');
  gameBoard.classList.add('game-board');

  for (let row = 0; row < 10; row++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    for (let col = 0; col < 10; col++) {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');
      cellDiv.setAttribute('data-x', col);
      cellDiv.setAttribute('data-y', row);
      if (name === 'right') {
        const playHandler = () => {
          playT(col, row, cellDiv);
          cellDiv.removeEventListener('click', playHandler);
        };
        cellDiv.addEventListener('click', playHandler);
      }
      rowDiv.appendChild(cellDiv);
    }
    gameBoard.appendChild(rowDiv);
  }
  return gameBoard;
}
function markShipsOnGameBoard() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      // console.log(mainLoop.player1Gameboard.table());
      // console.log(mainLoop.player1);
      if (typeof (_mainLoop__WEBPACK_IMPORTED_MODULE_1__.mainLoop.player1Gameboard.table()[i][j]) === 'object') {
        const elements = document.querySelectorAll(`[data-x="${i}"][data-y="${j}"]`);
        const el = elements[0];
        el.style.backgroundColor = 'green';
      }
    }
  }
}

// function markShipsOnGameBoardAI() {
//   for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//       if (typeof (mainLoop.AIGameboard.table()[i][j]) === 'object') {
//         const elements = document.querySelectorAll(`[data-x="${i}"][data-y="${j}"]`);
//         const el = elements[1];
//         el.style.backgroundColor = 'pink';
//       }
//     }
//   }
// }

function webInit() {
  const content = document.querySelector('#content');
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
  markShipsOnGameBoard();
  // markShipsOnGameBoardAI();
  return content;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (webInit);


/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard),
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
const Ship = (length) => {
  const sLength = () => length;
  let sunk = false;
  const getLength = () => length;
  const hitTable = [];
  const isSunk = () => sunk;
  const showHitTable = () => hitTable;
  const hitFields = () => {
    for (let i = 0; i < length; i++) {
      hitTable.push({ hit: false });
    }
  };
  const gotHit = (index) => {
    hitTable[index].hit = true;
    if (hitTable.every((field) => field.hit === true)) {
      sunk = true;
      // console.log('ship is sunk');
    }
  };
  hitFields();

  return {
    sLength, gotHit, isSunk, showHitTable, getLength,
  };
};

const Gameboard = () => {
  const coordinatesTab = Array(10).fill().map(() => Array(10).fill(0));
  const table = () => coordinatesTab;
  const shipsData = [];
  const getShipsData = () => shipsData;

  const placeShipValidation = (length, x, y) => {
    const calculatedXLen = x + length;
    const calculatedYLen = y + length;

    if (calculatedXLen > 10 || calculatedYLen > 10) {
      // throw new Error('ship out of bounds');
      return false;
    }
    for (let i = length - 1; i >= 0; i--) {
      console.log();
      if (typeof (table()[x + i][y]) === 'object') {
        // console.log('there is already a ship');
        return false;
      }
    }
    return true;
  };
  // add functon that check if ship fits on board
  const placeShip = (name, length, x, y) => {
    if (placeShipValidation(length, x, y) === false) {
      throw new Error('ship out of bounds');
    }

    const ship = Ship(length);
    // console.log('created ship');
    // place on gameboard coordinates ship name and ship field property (hit:true/false)
    for (let i = length - 1; i >= 0; i--) {
      // console.log(ship.showHitTable()[i].hit);
      coordinatesTab[x][y] = {
        name,
        hit: ship.showHitTable()[i].hit,
        index: i,
      };
      x++;
    }
    shipsData.push({
      name,
      data: ship,

    });
  };
  const placeRandom = (name, length) => {
    let x;
    let y;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }
    while (placeShipValidation(length, x, y) !== true);
    placeShip(name, length, x, y);
  };
  const receiveAttack = (x, y) => {
    // if legal attack return 0, else return 1
    const tab = table()[x][y];
    // if missed
    if (tab === 0) {
      table()[x][y] = 2;
      return 0;
    } if (typeof tab === 'object') {
      const shipName = tab.name;

      // if there is more than 1 ships it finds under which index hides our attacked ship

      const index = shipsData.findIndex((element) => element.name === shipName);
      const shipAttackedFieldIndex = tab.index;

      if (tab.hit === true) {
        // onsole.log('true');
        return 1;
      }

      // change hit to true in shipsData
      getShipsData()[index].data.gotHit(shipAttackedFieldIndex);

      // change hit to true in coordinates
      tab.hit = getShipsData()[index].data.showHitTable()[shipAttackedFieldIndex].hit;
      return 0;
    }
  };
  const checkAllSunk = () => getShipsData().every((shipData) => shipData.data.isSunk() === true);
  const reset = () => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        coordinatesTab[i][j] = 0;
      }
    }
    shipsData.length = 0;
  };
  return {
    table, placeShip, getShipsData, receiveAttack, checkAllSunk, placeRandom, reset,
  };
};

const Player = (name, ai) => {
  const getName = () => name;
  let playerTurn = true;
  const checkTurn = () => playerTurn;

  const isAi = ai;
  let z = false;
  const playTurn = (enemyGameboard, enemyPlayer, x, y) => {
    if (isAi === true) {
      let i = 0;
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        // console.log(`illegal hit: ${i}, coord: [${x}][${y}]`);
        i++;
      }
      while (enemyGameboard.receiveAttack(x, y) !== 0);
    }
    enemyGameboard.receiveAttack(x, y);
    if (enemyGameboard.checkAllSunk() === true) {
      // console.log('game finished');
      z = true;
      return { x, y, z };
    }
    playerTurn = false;
    enemyPlayer.playerTurn = true;
    return { x, y };
  };

  return {
    getName, playTurn, checkTurn, isAi,
  };
};




/***/ }),

/***/ "./src/mainLoop.js":
/*!*************************!*\
  !*** ./src/mainLoop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainLoop": () => (/* binding */ mainLoop)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");


const mainLoop = (() => {
  // create players
  const initShipsAI = (name) => {
    name.placeRandom('AIship5', 5);
    name.placeRandom('AIship4', 4);
    name.placeRandom('AIship32', 3);
    name.placeRandom('AIship31', 3);
    name.placeRandom('AIship2', 2);
  };

  const initShipsPl = (name) => {
    name.placeRandom('ship5', 5);
    name.placeRandom('ship4', 4);
    name.placeRandom('ship32', 3);
    name.placeRandom('ship31', 3);
    name.placeRandom('ship2', 2);
  };
  const initGame = () => {
    const player1 = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.Player)('Player1', false);
    const AI = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.Player)('AI', true);

    // create gameboards
    const player1Gameboard = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
    const AIGameboard = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();

    // create ships
    initShipsAI(AIGameboard);
    initShipsPl(player1Gameboard);
    // console.log(player1Gameboard.getShipsData());
    // console.log(player1Gameboard.table());

    return {
      player1, AI, player1Gameboard, AIGameboard,
    };
  };
  const gameData = initGame();
  const resetGame = () => {
    gameData.player1Gameboard.reset();
    gameData.AIGameboard.reset();
    initShipsPl(gameData.player1Gameboard);
    initShipsAI(gameData.AIGameboard);
  };
  return {
    player1: gameData.player1,
    AI: gameData.AI,
    player1Gameboard: gameData.player1Gameboard,
    AIGameboard: gameData.AIGameboard,
    resetGame,
  };
})();




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");



document.addEventListener('DOMContentLoaded', () => {
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFbUI7Ozs7Ozs7VUNyRHBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ047O0FBRXRCO0FBQ0EsRUFBRSxnREFBTztBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9tYWluTG9vcC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZmYW1pbHk9VGlsdCtXYXJwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZmYW1pbHk9VGlsdCtXYXJwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICAtLW1haW5QYWRkaW5nOiBjYWxjKG1pbigxMHZ3ICsgMTUwcHgsIDEwJSkpO1xcbiAgLS1oZWFkZXJDb2xvcjogIzZkMjhkOTtcXG4gIC0tc2lkZWJhckNvbG9yOiAjZjRmNGY1O1xcbiAgLS1ob3ZlckNvbG9yOiAjYmViZWJlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBtaW4td2lkdGg6IDY3MHB4O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCIgXFxcIm1haW4gbWFpbiBtYWluXFxcIiBcXFwiZm9vdGVyIGZvb3RlciBmb290ZXJcXFwiO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBIRUFERVIgUEFSVCAqL1xcbi5oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaWx0IFdhcnBcXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogTUFJTiBQQVJUICovXFxuLm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgcGFkZGluZzogMCB2YXIoLS1tYWluUGFkZGluZyk7XFxufVxcblxcbi5tYWluLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICBmb250LWZhbWlseTogXFxcIlRpbHQgV2FycFxcXCI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tYWluLXRpdGxlIGgyIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuLm1haW4tdGl0bGUgYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgd2lkdGg6IDIwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50LWxlZnQsIC5tYWluLWNvbnRlbnQtcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5nYW1lLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jZWxsIHtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi8qIEZPT1RFUiBQQVJUICovXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTc1cHgpIHtcXG4gIC5tYWluLWNvbnRlbnQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNJLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLG1GQUNBO0VBR0Esa0JBQUE7QUFESjs7QUFHQSxnQkFBQTtBQUNBO0VBQ0ksd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQSxjQUFBO0FBQ0E7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7QUFBSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0ksU0FBQTtBQUNSO0FBRUk7RUFFQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBREo7O0FBR0E7RUFDSSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBR0EsZ0JBQUE7QUFDQTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSTtJQUNJLHNCQUFBO0lBQ0EsbUJBQUE7RUFBTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZmYW1pbHk9VGlsdCtXYXJwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZmYW1pbHk9VGlsdCtXYXJwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290e1xcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgICAtLW1haW5QYWRkaW5nOiBjYWxjKG1pbigxMHZ3ICsgMTUwcHgsIDEwJSkpO1xcbiAgICAtLWhlYWRlckNvbG9yOiAjNmQyOGQ5O1xcbiAgICAtLXNpZGViYXJDb2xvcjogI2Y0ZjRmNTtcXG4gICAgLS1ob3ZlckNvbG9yOiAjYmViZWJlO1xcbn1cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46MDtcXG4gICAgbWluLXdpZHRoOiA2NzBweDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xcbn1cXG4jY29udGVudHtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcIm1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwiZm9vdGVyIGZvb3RlciBmb290ZXJcXFwiO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi8qIEhFQURFUiBQQVJUICovXFxuLmhlYWRlcntcXG4gICAgZm9udC1mYW1pbHk6ICdUaWx0IFdhcnAnO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7ICovXFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIE1BSU4gUEFSVCAqL1xcbi5tYWlue1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIHBhZGRpbmc6IDAgdmFyKC0tbWFpblBhZGRpbmcpO1xcbn1cXG4ubWFpbi10aXRsZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICBmb250LWZhbWlseTogJ1RpbHQgV2FycCc7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGgye1xcbiAgICAgICAgbWFyZ2luOjBcXG4gICAgfVxcblxcbiAgICBidXR0b257XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB3aWR0aDoyMCU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoZ3JleSk7XFxuICAgIH1cXG59XFxuLm1haW4tY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4ubWFpbi1jb250ZW50LWxlZnQsIC5tYWluLWNvbnRlbnQtcmlnaHR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5nYW1lLWJvYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY2VsbHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi8qIEZPT1RFUiBQQVJUICovXFxuLmZvb3RlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTU3NXB4KXtcXG4gICAgLm1haW4tY29udGVudHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIgfSBmcm9tICcuL2xvZ2ljJztcbmltcG9ydCB7IG1haW5Mb29wLCByZXNldEdhbWUgfSBmcm9tICcuL21haW5Mb29wJztcblxuLy8gZnVuY3Rpb24gY3JlYXRlUGxheWVyKCkge1xuLy8gICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuLy8gICBidXR0b24udGV4dENvbnRlbnQgPSAnQ2xpY2snO1xuLy8gICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWluTG9vcC5jcmVhdGVQbGF5ZXJzKGlucHV0LnZhbHVlKSk7XG4vLyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICBoZWFkZXIuY2xhc3NMaXN0ID0gJ2hlYWRlcic7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ0JBVFRMRVNISVBTJztcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1haW5Qcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtYWluQ29udGVudExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWFpbkNvbnRlbnRSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IHRpdGxlUGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgdGl0bGVBSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cbiAgdGl0bGVQbGF5ZXIudGV4dENvbnRlbnQgPSAnUGxheWVyJztcbiAgdGl0bGVBSS50ZXh0Q29udGVudCA9ICdBSSc7XG5cbiAgbWFpbkNvbnRlbnRMZWZ0LmFwcGVuZENoaWxkKHRpdGxlUGxheWVyKTtcblxuICBtYWluQ29udGVudExlZnQuY2xhc3NMaXN0ID0gJ21haW4tY29udGVudC1sZWZ0JztcbiAgbWFpbkNvbnRlbnRSaWdodC5jbGFzc0xpc3QgPSAnbWFpbi1jb250ZW50LXJpZ2h0JztcbiAgbWFpbkNvbnRlbnRMZWZ0LmFwcGVuZENoaWxkKGNyZWF0ZUdhbWVCb2FyZCgnbGVmdCcpKTtcblxuICBtYWluQ29udGVudC5jbGFzc0xpc3QgPSAnbWFpbi1jb250ZW50JztcblxuICBtYWluUHJvamVjdFRpdGxlLmNsYXNzTGlzdCA9ICdtYWluLXRpdGxlJztcbiAgbWFpblByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9ICcnO1xuICBtYWluLmNsYXNzTGlzdCA9ICdtYWluJztcblxuICBtYWluQ29udGVudFJpZ2h0LmFwcGVuZENoaWxkKHRpdGxlQUkpO1xuICBtYWluQ29udGVudFJpZ2h0LmFwcGVuZENoaWxkKGNyZWF0ZUdhbWVCb2FyZCgncmlnaHQnKSk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChtYWluUHJvamVjdFRpdGxlKTtcbiAgLy8gY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIC8vIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdQbGF5IEFnYWluISc7XG4gIC8vIG1haW5Qcm9qZWN0VGl0bGUuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnRMZWZ0KTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnRSaWdodCk7XG4gIG1haW4uYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xuXG4gIC8vIG1haW5Db250ZW50UmlnaHQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gICBjb25zdCBjcmVhdGVkQnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGZvb3Rlci5pbm5lckhUTUwgPSAnPHA+Q3JlYXRlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3dvandvajhcIj53b2p3b2o4PC9hPjwvcD4nO1xuICAvLyAgIGNyZWF0ZWRCeS50ZXh0Q29udGVudCA9ICdDcmVhdGVkIEJ5ICdcbiAgZm9vdGVyLmNsYXNzTGlzdCA9ICdmb290ZXInO1xuICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiB3aW5IYW5kbGVyKCkge1xuICBjb25zdCB3aW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi10aXRsZScpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1BsYXkgQWdhaW4hJztcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIG1haW4ucmVtb3ZlKCk7XG4gICAgbWFpbkxvb3AucmVzZXRHYW1lKCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICAgIG1hcmtTaGlwc09uR2FtZUJvYXJkKCk7XG4gICAgLy8gbWFya1NoaXBzT25HYW1lQm9hcmRBSSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKG1haW5Mb29wLnBsYXllcjFHYW1lYm9hcmQudGFibGUoKSk7XG4gIH0pO1xuXG4gIHdpbm5lci5hcHBlbmRDaGlsZChidXR0b24pO1xufVxuLy8gY3JlYXRlcyBjbG9uZSBvZiBhbGwgY2VsbHMgYW5kIHJlcGxhY2Ugb3JpZ2luYWxzXG5mdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IGFsbENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcbiAgYWxsQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNvbnN0IG5ld0NlbGwgPSBjZWxsLmNsb25lTm9kZSh0cnVlKTtcbiAgICBjZWxsLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld0NlbGwsIGNlbGwpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHBsYXlUKGNvbCwgcm93LCBjZWxsRGl2KSB7XG4gIC8vIGNvbnNvbGUubG9nKGBjbGlja2VkIGNlbGwgYXQgeDoke2NvbH0sIHk6JHtyb3d9YCk7XG4gIGNvbnN0IHBsYXllclR1cm4gPSBtYWluTG9vcC5wbGF5ZXIxLnBsYXlUdXJuKG1haW5Mb29wLkFJR2FtZWJvYXJkLCBtYWluTG9vcC5BSSwgY29sLCByb3cpO1xuXG4gIGlmICh0eXBlb2YgKG1haW5Mb29wLkFJR2FtZWJvYXJkLnRhYmxlKClbY29sXVtyb3ddKSA9PT0gJ29iamVjdCcpIHtcbiAgICBjZWxsRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICB9IGVsc2Uge1xuICAgIGNlbGxEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xuICB9XG4gIGlmIChwbGF5ZXJUdXJuLnogPT09IHRydWUpIHtcbiAgICBjb25zdCB3aW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi10aXRsZScpO1xuICAgIGNvbnN0IHdpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgd2luSGFuZGxlcigpO1xuICAgIHdpbi5pbm5lckhUTUwgPSAnUGxheWVyIFdvbiEhISc7XG4gICAgd2lubmVyLmFwcGVuZENoaWxkKHdpbik7XG4gICAgcmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgLy8gY2VsbERpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlUKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgYWlUdXJuID0gbWFpbkxvb3AuQUkucGxheVR1cm4obWFpbkxvb3AucGxheWVyMUdhbWVib2FyZCwgbWFpbkxvb3AucGxheWVyMSwgY29sLCByb3cpO1xuICAvLyBjb25zb2xlLmxvZyhhaVR1cm4ueCk7XG4gIC8vIGNvbnNvbGUubG9nKGFpVHVybi54KTtcbiAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS14PVwiJHthaVR1cm4ueH1cIl1bZGF0YS15PVwiJHthaVR1cm4ueX1cIl1gKTtcbiAgY29uc3QgZWwgPSBlbGVtZW50c1swXTtcbiAgaWYgKHR5cGVvZiAobWFpbkxvb3AucGxheWVyMUdhbWVib2FyZC50YWJsZSgpW2FpVHVybi54XVthaVR1cm4ueV0pID09PSAnb2JqZWN0Jykge1xuICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICB9IGVsc2Uge1xuICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibHVlJztcbiAgfVxuICBpZiAoYWlUdXJuLnogPT09IHRydWUpIHtcbiAgICBjb25zdCB3aW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi10aXRsZScpO1xuICAgIGNvbnN0IHdpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgd2luSGFuZGxlcigpO1xuICAgIHdpbi5pbm5lckhUTUwgPSAnQUkgV29uISEhJztcbiAgICB3aW5uZXIuYXBwZW5kQ2hpbGQod2luKTtcbiAgICByZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBjb25zb2xlLmxvZyhtYWluTG9vcC5wbGF5ZXIxR2FtZWJvYXJkLnRhYmxlKCkpO1xuICBjZWxsRGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheVQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHYW1lQm9hcmQobmFtZSkge1xuICBjb25zdCBnYW1lQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZ2FtZUJvYXJkLmNsYXNzTGlzdC5hZGQoJ2dhbWUtYm9hcmQnKTtcblxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICBjb25zdCByb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3dEaXYuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG5cbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgIGNvbnN0IGNlbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNlbGxEaXYuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgY2VsbERpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEteCcsIGNvbCk7XG4gICAgICBjZWxsRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS15Jywgcm93KTtcbiAgICAgIGlmIChuYW1lID09PSAncmlnaHQnKSB7XG4gICAgICAgIGNvbnN0IHBsYXlIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgIHBsYXlUKGNvbCwgcm93LCBjZWxsRGl2KTtcbiAgICAgICAgICBjZWxsRGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheUhhbmRsZXIpO1xuICAgICAgICB9O1xuICAgICAgICBjZWxsRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheUhhbmRsZXIpO1xuICAgICAgfVxuICAgICAgcm93RGl2LmFwcGVuZENoaWxkKGNlbGxEaXYpO1xuICAgIH1cbiAgICBnYW1lQm9hcmQuYXBwZW5kQ2hpbGQocm93RGl2KTtcbiAgfVxuICByZXR1cm4gZ2FtZUJvYXJkO1xufVxuZnVuY3Rpb24gbWFya1NoaXBzT25HYW1lQm9hcmQoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgLy8gY29uc29sZS5sb2cobWFpbkxvb3AucGxheWVyMUdhbWVib2FyZC50YWJsZSgpKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKG1haW5Mb29wLnBsYXllcjEpO1xuICAgICAgaWYgKHR5cGVvZiAobWFpbkxvb3AucGxheWVyMUdhbWVib2FyZC50YWJsZSgpW2ldW2pdKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS14PVwiJHtpfVwiXVtkYXRhLXk9XCIke2p9XCJdYCk7XG4gICAgICAgIGNvbnN0IGVsID0gZWxlbWVudHNbMF07XG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIGZ1bmN0aW9uIG1hcmtTaGlwc09uR2FtZUJvYXJkQUkoKSB7XG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuLy8gICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuLy8gICAgICAgaWYgKHR5cGVvZiAobWFpbkxvb3AuQUlHYW1lYm9hcmQudGFibGUoKVtpXVtqXSkgPT09ICdvYmplY3QnKSB7XG4vLyAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEteD1cIiR7aX1cIl1bZGF0YS15PVwiJHtqfVwiXWApO1xuLy8gICAgICAgICBjb25zdCBlbCA9IGVsZW1lbnRzWzFdO1xuLy8gICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncGluayc7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbmZ1bmN0aW9uIHdlYkluaXQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgbWFya1NoaXBzT25HYW1lQm9hcmQoKTtcbiAgLy8gbWFya1NoaXBzT25HYW1lQm9hcmRBSSgpO1xuICByZXR1cm4gY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IHdlYkluaXQ7XG4iLCJjb25zdCBTaGlwID0gKGxlbmd0aCkgPT4ge1xuICBjb25zdCBzTGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuICBsZXQgc3VuayA9IGZhbHNlO1xuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBsZW5ndGg7XG4gIGNvbnN0IGhpdFRhYmxlID0gW107XG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHN1bms7XG4gIGNvbnN0IHNob3dIaXRUYWJsZSA9ICgpID0+IGhpdFRhYmxlO1xuICBjb25zdCBoaXRGaWVsZHMgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaGl0VGFibGUucHVzaCh7IGhpdDogZmFsc2UgfSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBnb3RIaXQgPSAoaW5kZXgpID0+IHtcbiAgICBoaXRUYWJsZVtpbmRleF0uaGl0ID0gdHJ1ZTtcbiAgICBpZiAoaGl0VGFibGUuZXZlcnkoKGZpZWxkKSA9PiBmaWVsZC5oaXQgPT09IHRydWUpKSB7XG4gICAgICBzdW5rID0gdHJ1ZTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzaGlwIGlzIHN1bmsnKTtcbiAgICB9XG4gIH07XG4gIGhpdEZpZWxkcygpO1xuXG4gIHJldHVybiB7XG4gICAgc0xlbmd0aCwgZ290SGl0LCBpc1N1bmssIHNob3dIaXRUYWJsZSwgZ2V0TGVuZ3RoLFxuICB9O1xufTtcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBjb29yZGluYXRlc1RhYiA9IEFycmF5KDEwKS5maWxsKCkubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKDApKTtcbiAgY29uc3QgdGFibGUgPSAoKSA9PiBjb29yZGluYXRlc1RhYjtcbiAgY29uc3Qgc2hpcHNEYXRhID0gW107XG4gIGNvbnN0IGdldFNoaXBzRGF0YSA9ICgpID0+IHNoaXBzRGF0YTtcblxuICBjb25zdCBwbGFjZVNoaXBWYWxpZGF0aW9uID0gKGxlbmd0aCwgeCwgeSkgPT4ge1xuICAgIGNvbnN0IGNhbGN1bGF0ZWRYTGVuID0geCArIGxlbmd0aDtcbiAgICBjb25zdCBjYWxjdWxhdGVkWUxlbiA9IHkgKyBsZW5ndGg7XG5cbiAgICBpZiAoY2FsY3VsYXRlZFhMZW4gPiAxMCB8fCBjYWxjdWxhdGVkWUxlbiA+IDEwKSB7XG4gICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoJ3NoaXAgb3V0IG9mIGJvdW5kcycpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gbGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnNvbGUubG9nKCk7XG4gICAgICBpZiAodHlwZW9mICh0YWJsZSgpW3ggKyBpXVt5XSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGVyZSBpcyBhbHJlYWR5IGEgc2hpcCcpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICAvLyBhZGQgZnVuY3RvbiB0aGF0IGNoZWNrIGlmIHNoaXAgZml0cyBvbiBib2FyZFxuICBjb25zdCBwbGFjZVNoaXAgPSAobmFtZSwgbGVuZ3RoLCB4LCB5KSA9PiB7XG4gICAgaWYgKHBsYWNlU2hpcFZhbGlkYXRpb24obGVuZ3RoLCB4LCB5KSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignc2hpcCBvdXQgb2YgYm91bmRzJyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcCA9IFNoaXAobGVuZ3RoKTtcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRlZCBzaGlwJyk7XG4gICAgLy8gcGxhY2Ugb24gZ2FtZWJvYXJkIGNvb3JkaW5hdGVzIHNoaXAgbmFtZSBhbmQgc2hpcCBmaWVsZCBwcm9wZXJ0eSAoaGl0OnRydWUvZmFsc2UpXG4gICAgZm9yIChsZXQgaSA9IGxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzaGlwLnNob3dIaXRUYWJsZSgpW2ldLmhpdCk7XG4gICAgICBjb29yZGluYXRlc1RhYlt4XVt5XSA9IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgaGl0OiBzaGlwLnNob3dIaXRUYWJsZSgpW2ldLmhpdCxcbiAgICAgICAgaW5kZXg6IGksXG4gICAgICB9O1xuICAgICAgeCsrO1xuICAgIH1cbiAgICBzaGlwc0RhdGEucHVzaCh7XG4gICAgICBuYW1lLFxuICAgICAgZGF0YTogc2hpcCxcblxuICAgIH0pO1xuICB9O1xuICBjb25zdCBwbGFjZVJhbmRvbSA9IChuYW1lLCBsZW5ndGgpID0+IHtcbiAgICBsZXQgeDtcbiAgICBsZXQgeTtcbiAgICBkbyB7XG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICB9XG4gICAgd2hpbGUgKHBsYWNlU2hpcFZhbGlkYXRpb24obGVuZ3RoLCB4LCB5KSAhPT0gdHJ1ZSk7XG4gICAgcGxhY2VTaGlwKG5hbWUsIGxlbmd0aCwgeCwgeSk7XG4gIH07XG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgIC8vIGlmIGxlZ2FsIGF0dGFjayByZXR1cm4gMCwgZWxzZSByZXR1cm4gMVxuICAgIGNvbnN0IHRhYiA9IHRhYmxlKClbeF1beV07XG4gICAgLy8gaWYgbWlzc2VkXG4gICAgaWYgKHRhYiA9PT0gMCkge1xuICAgICAgdGFibGUoKVt4XVt5XSA9IDI7XG4gICAgICByZXR1cm4gMDtcbiAgICB9IGlmICh0eXBlb2YgdGFiID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3Qgc2hpcE5hbWUgPSB0YWIubmFtZTtcblxuICAgICAgLy8gaWYgdGhlcmUgaXMgbW9yZSB0aGFuIDEgc2hpcHMgaXQgZmluZHMgdW5kZXIgd2hpY2ggaW5kZXggaGlkZXMgb3VyIGF0dGFja2VkIHNoaXBcblxuICAgICAgY29uc3QgaW5kZXggPSBzaGlwc0RhdGEuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50Lm5hbWUgPT09IHNoaXBOYW1lKTtcbiAgICAgIGNvbnN0IHNoaXBBdHRhY2tlZEZpZWxkSW5kZXggPSB0YWIuaW5kZXg7XG5cbiAgICAgIGlmICh0YWIuaGl0ID09PSB0cnVlKSB7XG4gICAgICAgIC8vIG9uc29sZS5sb2coJ3RydWUnKTtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICAgIC8vIGNoYW5nZSBoaXQgdG8gdHJ1ZSBpbiBzaGlwc0RhdGFcbiAgICAgIGdldFNoaXBzRGF0YSgpW2luZGV4XS5kYXRhLmdvdEhpdChzaGlwQXR0YWNrZWRGaWVsZEluZGV4KTtcblxuICAgICAgLy8gY2hhbmdlIGhpdCB0byB0cnVlIGluIGNvb3JkaW5hdGVzXG4gICAgICB0YWIuaGl0ID0gZ2V0U2hpcHNEYXRhKClbaW5kZXhdLmRhdGEuc2hvd0hpdFRhYmxlKClbc2hpcEF0dGFja2VkRmllbGRJbmRleF0uaGl0O1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9O1xuICBjb25zdCBjaGVja0FsbFN1bmsgPSAoKSA9PiBnZXRTaGlwc0RhdGEoKS5ldmVyeSgoc2hpcERhdGEpID0+IHNoaXBEYXRhLmRhdGEuaXNTdW5rKCkgPT09IHRydWUpO1xuICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBjb29yZGluYXRlc1RhYltpXVtqXSA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIHNoaXBzRGF0YS5sZW5ndGggPSAwO1xuICB9O1xuICByZXR1cm4ge1xuICAgIHRhYmxlLCBwbGFjZVNoaXAsIGdldFNoaXBzRGF0YSwgcmVjZWl2ZUF0dGFjaywgY2hlY2tBbGxTdW5rLCBwbGFjZVJhbmRvbSwgcmVzZXQsXG4gIH07XG59O1xuXG5jb25zdCBQbGF5ZXIgPSAobmFtZSwgYWkpID0+IHtcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG4gIGxldCBwbGF5ZXJUdXJuID0gdHJ1ZTtcbiAgY29uc3QgY2hlY2tUdXJuID0gKCkgPT4gcGxheWVyVHVybjtcblxuICBjb25zdCBpc0FpID0gYWk7XG4gIGxldCB6ID0gZmFsc2U7XG4gIGNvbnN0IHBsYXlUdXJuID0gKGVuZW15R2FtZWJvYXJkLCBlbmVteVBsYXllciwgeCwgeSkgPT4ge1xuICAgIGlmIChpc0FpID09PSB0cnVlKSB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBkbyB7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBpbGxlZ2FsIGhpdDogJHtpfSwgY29vcmQ6IFske3h9XVske3l9XWApO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgICB3aGlsZSAoZW5lbXlHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KSAhPT0gMCk7XG4gICAgfVxuICAgIGVuZW15R2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgaWYgKGVuZW15R2FtZWJvYXJkLmNoZWNrQWxsU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZ2FtZSBmaW5pc2hlZCcpO1xuICAgICAgeiA9IHRydWU7XG4gICAgICByZXR1cm4geyB4LCB5LCB6IH07XG4gICAgfVxuICAgIHBsYXllclR1cm4gPSBmYWxzZTtcbiAgICBlbmVteVBsYXllci5wbGF5ZXJUdXJuID0gdHJ1ZTtcbiAgICByZXR1cm4geyB4LCB5IH07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLCBwbGF5VHVybiwgY2hlY2tUdXJuLCBpc0FpLFxuICB9O1xufTtcblxuZXhwb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIgfTtcbiIsImltcG9ydCB7IFNoaXAsIEdhbWVib2FyZCwgUGxheWVyIH0gZnJvbSAnLi9sb2dpYyc7XG5cbmNvbnN0IG1haW5Mb29wID0gKCgpID0+IHtcbiAgLy8gY3JlYXRlIHBsYXllcnNcbiAgY29uc3QgaW5pdFNoaXBzQUkgPSAobmFtZSkgPT4ge1xuICAgIG5hbWUucGxhY2VSYW5kb20oJ0FJc2hpcDUnLCA1KTtcbiAgICBuYW1lLnBsYWNlUmFuZG9tKCdBSXNoaXA0JywgNCk7XG4gICAgbmFtZS5wbGFjZVJhbmRvbSgnQUlzaGlwMzInLCAzKTtcbiAgICBuYW1lLnBsYWNlUmFuZG9tKCdBSXNoaXAzMScsIDMpO1xuICAgIG5hbWUucGxhY2VSYW5kb20oJ0FJc2hpcDInLCAyKTtcbiAgfTtcblxuICBjb25zdCBpbml0U2hpcHNQbCA9IChuYW1lKSA9PiB7XG4gICAgbmFtZS5wbGFjZVJhbmRvbSgnc2hpcDUnLCA1KTtcbiAgICBuYW1lLnBsYWNlUmFuZG9tKCdzaGlwNCcsIDQpO1xuICAgIG5hbWUucGxhY2VSYW5kb20oJ3NoaXAzMicsIDMpO1xuICAgIG5hbWUucGxhY2VSYW5kb20oJ3NoaXAzMScsIDMpO1xuICAgIG5hbWUucGxhY2VSYW5kb20oJ3NoaXAyJywgMik7XG4gIH07XG4gIGNvbnN0IGluaXRHYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllcjEgPSBQbGF5ZXIoJ1BsYXllcjEnLCBmYWxzZSk7XG4gICAgY29uc3QgQUkgPSBQbGF5ZXIoJ0FJJywgdHJ1ZSk7XG5cbiAgICAvLyBjcmVhdGUgZ2FtZWJvYXJkc1xuICAgIGNvbnN0IHBsYXllcjFHYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgICBjb25zdCBBSUdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gICAgLy8gY3JlYXRlIHNoaXBzXG4gICAgaW5pdFNoaXBzQUkoQUlHYW1lYm9hcmQpO1xuICAgIGluaXRTaGlwc1BsKHBsYXllcjFHYW1lYm9hcmQpO1xuICAgIC8vIGNvbnNvbGUubG9nKHBsYXllcjFHYW1lYm9hcmQuZ2V0U2hpcHNEYXRhKCkpO1xuICAgIC8vIGNvbnNvbGUubG9nKHBsYXllcjFHYW1lYm9hcmQudGFibGUoKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGxheWVyMSwgQUksIHBsYXllcjFHYW1lYm9hcmQsIEFJR2FtZWJvYXJkLFxuICAgIH07XG4gIH07XG4gIGNvbnN0IGdhbWVEYXRhID0gaW5pdEdhbWUoKTtcbiAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICAgIGdhbWVEYXRhLnBsYXllcjFHYW1lYm9hcmQucmVzZXQoKTtcbiAgICBnYW1lRGF0YS5BSUdhbWVib2FyZC5yZXNldCgpO1xuICAgIGluaXRTaGlwc1BsKGdhbWVEYXRhLnBsYXllcjFHYW1lYm9hcmQpO1xuICAgIGluaXRTaGlwc0FJKGdhbWVEYXRhLkFJR2FtZWJvYXJkKTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBwbGF5ZXIxOiBnYW1lRGF0YS5wbGF5ZXIxLFxuICAgIEFJOiBnYW1lRGF0YS5BSSxcbiAgICBwbGF5ZXIxR2FtZWJvYXJkOiBnYW1lRGF0YS5wbGF5ZXIxR2FtZWJvYXJkLFxuICAgIEFJR2FtZWJvYXJkOiBnYW1lRGF0YS5BSUdhbWVib2FyZCxcbiAgICByZXNldEdhbWUsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBtYWluTG9vcCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHdlYkluaXQgZnJvbSAnLi9kb20nO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICB3ZWJJbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==