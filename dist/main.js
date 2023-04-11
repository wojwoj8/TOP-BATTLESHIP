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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-family: roboto;\n  --mainPadding: calc(min(10vw + 150px, 10%));\n  --headerColor: #6d28d9;\n  --sidebarColor: #f4f4f5;\n  --hoverColor: #bebebe;\n}\n\nbody {\n  height: 100vh;\n  margin: 0;\n  min-width: 650px;\n  /* background-color: red; */\n}\n\n#content {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 1fr 9fr 1fr;\n  grid-template-areas: \"header header header\" \"main main main\" \"footer footer footer\";\n  text-align: center;\n}\n\n/* HEADER PART */\n.header {\n  font-family: \"Tilt Warp\";\n  background-color: var(--headerColor);\n  color: white;\n  grid-area: header;\n  /* border-bottom: 1px solid red; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.header > img {\n  padding-left: 10px;\n  height: 2.5em;\n}\n\n/* MAIN PART */\n.main {\n  grid-area: main;\n  padding: 0 var(--mainPadding);\n}\n\n.main-title {\n  display: flex;\n  font-family: \"Tilt Warp\";\n  font-size: 2rem;\n}\n\n.main-content {\n  display: flex;\n  justify-content: space-between;\n}\n\n.main-content-left, .main-content-right {\n  display: flex;\n  flex-direction: column;\n}\n\n.game-board {\n  display: flex;\n}\n\n.cell {\n  width: 50px;\n  height: 50px;\n  border: 1px solid black;\n}\n\n/* FOOTER PART */\n.footer {\n  background-color: green;\n  grid-area: footer;\n  font-size: larger;\n  font-weight: bold;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAGA;EACI,mBAAA;EACA,2CAAA;EACA,sBAAA;EACA,uBAAA;EACA,qBAAA;AAAJ;;AAEA;EACI,aAAA;EACA,SAAA;EACA,gBAAA;EACA,2BAAA;AACJ;;AACA;EACI,YAAA;EACA,aAAA;EACA,+BAAA;EACA,mFACA;EAGA,kBAAA;AADJ;;AAGA,gBAAA;AACA;EACI,wBAAA;EACA,oCAAA;EACA,YAAA;EACA,iBAAA;EACA,kCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAAJ;;AAEA;EACI,kBAAA;EACA,aAAA;AACJ;;AAEA,cAAA;AACA;EACI,eAAA;EACA,6BAAA;AACJ;;AACA;EACI,aAAA;EACA,wBAAA;EACA,eAAA;AAEJ;;AAAA;EACI,aAAA;EACA,8BAAA;AAGJ;;AADA;EACI,aAAA;EACA,sBAAA;AAIJ;;AAFA;EACI,aAAA;AAKJ;;AAFA;EACI,WAAA;EACA,YAAA;EACA,uBAAA;AAKJ;;AAFA,gBAAA;AACA;EACI,uBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;AAKJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Tilt+Warp&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Tilt+Warp&display=swap');\n\n:root{\n    font-family: roboto;\n    --mainPadding: calc(min(10vw + 150px, 10%));\n    --headerColor: #6d28d9;\n    --sidebarColor: #f4f4f5;\n    --hoverColor: #bebebe;\n}\nbody{\n    height: 100vh;\n    margin:0;\n    min-width: 650px;\n    /* background-color: red; */\n}\n#content{\n    height:100%;\n    display:grid;\n    grid-template-rows: 1fr 9fr 1fr;\n    grid-template-areas: \n    \"header header header\"\n    \"main main main\"\n    \"footer footer footer\";\n    text-align: center;\n}\n/* HEADER PART */\n.header{\n    font-family: 'Tilt Warp';\n    background-color: var(--headerColor);\n    color: white;\n    grid-area: header;\n    /* border-bottom: 1px solid red; */\n    display:flex;\n    justify-content: center;\n    align-items: center;\n}\n.header > img{\n    padding-left: 10px;\n    height: 2.5em;\n}\n\n/* MAIN PART */\n.main{\n    grid-area: main;\n    padding: 0 var(--mainPadding);\n}\n.main-title{\n    display: flex;\n    font-family: 'Tilt Warp';\n    font-size: 2rem;\n}\n.main-content{\n    display: flex;\n    justify-content: space-between;\n}\n.main-content-left, .main-content-right{\n    display: flex;\n    flex-direction: column;\n}\n.game-board{\n    display: flex;\n}\n\n.cell{\n    width: 50px;\n    height: 50px;\n    border: 1px solid black;\n}\n\n/* FOOTER PART */\n.footer{\n    background-color: green;\n    grid-area: footer;\n    font-size: larger;\n    font-weight: bold;\n}\n"],"sourceRoot":""}]);
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
  mainContentRight.appendChild(titleAI);

  mainContentLeft.classList = 'main-content-left';
  mainContentRight.classList = 'main-content-right';
  mainContentLeft.appendChild(createGameBoard('left'));
  mainContentRight.appendChild(createGameBoard('right'));

  mainContent.classList = 'main-content';

  mainProjectTitle.classList = 'main-title';
  mainProjectTitle.textContent = '';
  main.classList = 'main';

  main.appendChild(mainProjectTitle);
  mainContent.appendChild(mainContentLeft);
  mainContent.appendChild(mainContentRight);
  main.appendChild(mainContent);

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

function playT(col, row, cellDiv) {
  // console.log(`clicked cell at x:${col}, y:${row}`);
  _mainLoop__WEBPACK_IMPORTED_MODULE_1__.mainLoop.player1.playTurn(_mainLoop__WEBPACK_IMPORTED_MODULE_1__.mainLoop.AIGameboard, _mainLoop__WEBPACK_IMPORTED_MODULE_1__.mainLoop.AI, col, row);
  if (typeof (_mainLoop__WEBPACK_IMPORTED_MODULE_1__.mainLoop.AIGameboard.table()[col][row]) === 'object') {
    cellDiv.style.backgroundColor = 'red';
  } else {
    cellDiv.style.backgroundColor = 'blue';
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
  console.log(_mainLoop__WEBPACK_IMPORTED_MODULE_1__.mainLoop.player1Gameboard.table());
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

function webInit() {
  const content = document.querySelector('#content');
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
  _mainLoop__WEBPACK_IMPORTED_MODULE_1__.mainLoop.markShipsOnGameBoard();
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
      throw new Error('ship out of bounds');
    }
  };
  // add functon that check if ship fits on board
  const placeShip = (name, length, x, y) => {
    placeShipValidation(length, x, y);

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

  return {
    table, placeShip, getShipsData, receiveAttack,
  };
};

const Player = (name, ai) => {
  const getName = () => name;
  let playerTurn = true;
  const checkTurn = () => playerTurn;

  const isAi = ai;

  const playTurn = (enemyGameboard, enemyPlayer, x, y) => {
    if (isAi === true) {
      let i = 0;
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        console.log(`illegal hit: ${i}, coord: [${x}][${y}]`);
        i++;
      }
      while (enemyGameboard.receiveAttack(x, y) !== 0);
    }
    enemyGameboard.receiveAttack(x, y);
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
  const player1 = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.Player)('Player1', false);
  const AI = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.Player)('AI', true);

  // create gameboards
  const player1Gameboard = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
  const AIGameboard = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();

  // create ships
  player1Gameboard.placeShip('ship1', 5, 2, 4);
  player1Gameboard.placeShip('ship2', 3, 6, 6);
  AIGameboard.placeShip('AIship2', 5, 2, 2);

  function markShipsOnGameBoard() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
      // console.log(player1Gameboard.table()[i][j]);
        if (typeof (player1Gameboard.table()[i][j]) === 'object') {
          // console.log('test');
          const elements = document.querySelectorAll(`[data-x="${i}"][data-y="${j}"]`);
          const el = elements[0];
          // console.log(el);
          el.style.backgroundColor = 'green';
        // const playerGameboardDisplay = document.querySelector('.main-content-left');
        // const cell = playerGameboardDisplay.querySelector(`[data-x="${i}]"[data-y="${j}"]`);
        // cell.style.background = 'green';
        }
      }
    }
  }
  console.log(player1Gameboard.getShipsData());

  return {
    player1, AI, player1Gameboard, AIGameboard, markShipsOnGameBoard,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFbUI7Ozs7Ozs7VUN4Q3BCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ047O0FBRXRCO0FBQ0EsRUFBRSxnREFBTztBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9tYWluTG9vcC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZmYW1pbHk9VGlsdCtXYXJwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZmYW1pbHk9VGlsdCtXYXJwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICAtLW1haW5QYWRkaW5nOiBjYWxjKG1pbigxMHZ3ICsgMTUwcHgsIDEwJSkpO1xcbiAgLS1oZWFkZXJDb2xvcjogIzZkMjhkOTtcXG4gIC0tc2lkZWJhckNvbG9yOiAjZjRmNGY1O1xcbiAgLS1ob3ZlckNvbG9yOiAjYmViZWJlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBtaW4td2lkdGg6IDY1MHB4O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCIgXFxcIm1haW4gbWFpbiBtYWluXFxcIiBcXFwiZm9vdGVyIGZvb3RlciBmb290ZXJcXFwiO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBIRUFERVIgUEFSVCAqL1xcbi5oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaWx0IFdhcnBcXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciA+IGltZyB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBoZWlnaHQ6IDIuNWVtO1xcbn1cXG5cXG4vKiBNQUlOIFBBUlQgKi9cXG4ubWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBwYWRkaW5nOiAwIHZhcigtLW1haW5QYWRkaW5nKTtcXG59XFxuXFxuLm1haW4tdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGlsdCBXYXJwXFxcIjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50LWxlZnQsIC5tYWluLWNvbnRlbnQtcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5nYW1lLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jZWxsIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi8qIEZPT1RFUiBQQVJUICovXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDSSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxtRkFDQTtFQUdBLGtCQUFBO0FBREo7O0FBR0EsZ0JBQUE7QUFDQTtFQUNJLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQSxjQUFBO0FBQ0E7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUdKOztBQURBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBSUo7O0FBRkE7RUFDSSxhQUFBO0FBS0o7O0FBRkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBS0o7O0FBRkEsZ0JBQUE7QUFDQTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBS0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmZhbWlseT1UaWx0K1dhcnAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmZhbWlseT1UaWx0K1dhcnAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3R7XFxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICAgIC0tbWFpblBhZGRpbmc6IGNhbGMobWluKDEwdncgKyAxNTBweCwgMTAlKSk7XFxuICAgIC0taGVhZGVyQ29sb3I6ICM2ZDI4ZDk7XFxuICAgIC0tc2lkZWJhckNvbG9yOiAjZjRmNGY1O1xcbiAgICAtLWhvdmVyQ29sb3I6ICNiZWJlYmU7XFxufVxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjowO1xcbiAgICBtaW4td2lkdGg6IDY1MHB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXFxufVxcbiNjb250ZW50e1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICBcXFwibWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJmb290ZXIgZm9vdGVyIGZvb3RlclxcXCI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLyogSEVBREVSIFBBUlQgKi9cXG4uaGVhZGVye1xcbiAgICBmb250LWZhbWlseTogJ1RpbHQgV2FycCc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDsgKi9cXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciA+IGltZ3tcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBoZWlnaHQ6IDIuNWVtO1xcbn1cXG5cXG4vKiBNQUlOIFBBUlQgKi9cXG4ubWFpbntcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBwYWRkaW5nOiAwIHZhcigtLW1haW5QYWRkaW5nKTtcXG59XFxuLm1haW4tdGl0bGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGlsdCBXYXJwJztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4ubWFpbi1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5tYWluLWNvbnRlbnQtbGVmdCwgLm1haW4tY29udGVudC1yaWdodHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmdhbWUtYm9hcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jZWxse1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLyogRk9PVEVSIFBBUlQgKi9cXG4uZm9vdGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIFBsYXllciB9IGZyb20gJy4vbG9naWMnO1xuaW1wb3J0IHsgbWFpbkxvb3AgfSBmcm9tICcuL21haW5Mb29wJztcblxuLy8gZnVuY3Rpb24gY3JlYXRlUGxheWVyKCkge1xuLy8gICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuLy8gICBidXR0b24udGV4dENvbnRlbnQgPSAnQ2xpY2snO1xuLy8gICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWluTG9vcC5jcmVhdGVQbGF5ZXJzKGlucHV0LnZhbHVlKSk7XG4vLyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICBoZWFkZXIuY2xhc3NMaXN0ID0gJ2hlYWRlcic7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ0JBVFRMRVNISVBTJztcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1haW5Qcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtYWluQ29udGVudExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWFpbkNvbnRlbnRSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IHRpdGxlUGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgdGl0bGVBSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cbiAgdGl0bGVQbGF5ZXIudGV4dENvbnRlbnQgPSAnUGxheWVyJztcbiAgdGl0bGVBSS50ZXh0Q29udGVudCA9ICdBSSc7XG5cbiAgbWFpbkNvbnRlbnRMZWZ0LmFwcGVuZENoaWxkKHRpdGxlUGxheWVyKTtcbiAgbWFpbkNvbnRlbnRSaWdodC5hcHBlbmRDaGlsZCh0aXRsZUFJKTtcblxuICBtYWluQ29udGVudExlZnQuY2xhc3NMaXN0ID0gJ21haW4tY29udGVudC1sZWZ0JztcbiAgbWFpbkNvbnRlbnRSaWdodC5jbGFzc0xpc3QgPSAnbWFpbi1jb250ZW50LXJpZ2h0JztcbiAgbWFpbkNvbnRlbnRMZWZ0LmFwcGVuZENoaWxkKGNyZWF0ZUdhbWVCb2FyZCgnbGVmdCcpKTtcbiAgbWFpbkNvbnRlbnRSaWdodC5hcHBlbmRDaGlsZChjcmVhdGVHYW1lQm9hcmQoJ3JpZ2h0JykpO1xuXG4gIG1haW5Db250ZW50LmNsYXNzTGlzdCA9ICdtYWluLWNvbnRlbnQnO1xuXG4gIG1haW5Qcm9qZWN0VGl0bGUuY2xhc3NMaXN0ID0gJ21haW4tdGl0bGUnO1xuICBtYWluUHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gJyc7XG4gIG1haW4uY2xhc3NMaXN0ID0gJ21haW4nO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQobWFpblByb2plY3RUaXRsZSk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1haW5Db250ZW50TGVmdCk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1haW5Db250ZW50UmlnaHQpO1xuICBtYWluLmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcblxuICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gICBjb25zdCBjcmVhdGVkQnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGZvb3Rlci5pbm5lckhUTUwgPSAnPHA+Q3JlYXRlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3dvandvajhcIj53b2p3b2o4PC9hPjwvcD4nO1xuICAvLyAgIGNyZWF0ZWRCeS50ZXh0Q29udGVudCA9ICdDcmVhdGVkIEJ5ICdcbiAgZm9vdGVyLmNsYXNzTGlzdCA9ICdmb290ZXInO1xuICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBwbGF5VChjb2wsIHJvdywgY2VsbERpdikge1xuICAvLyBjb25zb2xlLmxvZyhgY2xpY2tlZCBjZWxsIGF0IHg6JHtjb2x9LCB5OiR7cm93fWApO1xuICBtYWluTG9vcC5wbGF5ZXIxLnBsYXlUdXJuKG1haW5Mb29wLkFJR2FtZWJvYXJkLCBtYWluTG9vcC5BSSwgY29sLCByb3cpO1xuICBpZiAodHlwZW9mIChtYWluTG9vcC5BSUdhbWVib2FyZC50YWJsZSgpW2NvbF1bcm93XSkgPT09ICdvYmplY3QnKSB7XG4gICAgY2VsbERpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgfSBlbHNlIHtcbiAgICBjZWxsRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibHVlJztcbiAgfVxuICBjb25zdCBhaVR1cm4gPSBtYWluTG9vcC5BSS5wbGF5VHVybihtYWluTG9vcC5wbGF5ZXIxR2FtZWJvYXJkLCBtYWluTG9vcC5wbGF5ZXIxLCBjb2wsIHJvdyk7XG4gIC8vIGNvbnNvbGUubG9nKGFpVHVybi54KTtcbiAgLy8gY29uc29sZS5sb2coYWlUdXJuLngpO1xuICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXg9XCIke2FpVHVybi54fVwiXVtkYXRhLXk9XCIke2FpVHVybi55fVwiXWApO1xuICBjb25zdCBlbCA9IGVsZW1lbnRzWzBdO1xuICBpZiAodHlwZW9mIChtYWluTG9vcC5wbGF5ZXIxR2FtZWJvYXJkLnRhYmxlKClbYWlUdXJuLnhdW2FpVHVybi55XSkgPT09ICdvYmplY3QnKSB7XG4gICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gIH0gZWxzZSB7XG4gICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xuICB9XG4gIGNvbnNvbGUubG9nKG1haW5Mb29wLnBsYXllcjFHYW1lYm9hcmQudGFibGUoKSk7XG4gIGNlbGxEaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5VCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVCb2FyZChuYW1lKSB7XG4gIGNvbnN0IGdhbWVCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBnYW1lQm9hcmQuY2xhc3NMaXN0LmFkZCgnZ2FtZS1ib2FyZCcpO1xuXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgIGNvbnN0IHJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvd0Rpdi5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcblxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgY29uc3QgY2VsbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY2VsbERpdi5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICBjZWxsRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS14JywgY29sKTtcbiAgICAgIGNlbGxEaXYuc2V0QXR0cmlidXRlKCdkYXRhLXknLCByb3cpO1xuICAgICAgaWYgKG5hbWUgPT09ICdyaWdodCcpIHtcbiAgICAgICAgY29uc3QgcGxheUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgICAgcGxheVQoY29sLCByb3csIGNlbGxEaXYpO1xuICAgICAgICAgIGNlbGxEaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5SGFuZGxlcik7XG4gICAgICAgIH07XG4gICAgICAgIGNlbGxEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5SGFuZGxlcik7XG4gICAgICB9XG4gICAgICByb3dEaXYuYXBwZW5kQ2hpbGQoY2VsbERpdik7XG4gICAgfVxuICAgIGdhbWVCb2FyZC5hcHBlbmRDaGlsZChyb3dEaXYpO1xuICB9XG4gIHJldHVybiBnYW1lQm9hcmQ7XG59XG5cbmZ1bmN0aW9uIHdlYkluaXQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgbWFpbkxvb3AubWFya1NoaXBzT25HYW1lQm9hcmQoKTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCB3ZWJJbml0O1xuIiwiY29uc3QgU2hpcCA9IChsZW5ndGgpID0+IHtcbiAgY29uc3Qgc0xlbmd0aCA9ICgpID0+IGxlbmd0aDtcbiAgbGV0IHN1bmsgPSBmYWxzZTtcbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuICBjb25zdCBoaXRUYWJsZSA9IFtdO1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzdW5rO1xuICBjb25zdCBzaG93SGl0VGFibGUgPSAoKSA9PiBoaXRUYWJsZTtcbiAgY29uc3QgaGl0RmllbGRzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGhpdFRhYmxlLnB1c2goeyBoaXQ6IGZhbHNlIH0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZ290SGl0ID0gKGluZGV4KSA9PiB7XG4gICAgaGl0VGFibGVbaW5kZXhdLmhpdCA9IHRydWU7XG4gICAgaWYgKGhpdFRhYmxlLmV2ZXJ5KChmaWVsZCkgPT4gZmllbGQuaGl0ID09PSB0cnVlKSkge1xuICAgICAgc3VuayA9IHRydWU7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc2hpcCBpcyBzdW5rJyk7XG4gICAgfVxuICB9O1xuICBoaXRGaWVsZHMoKTtcblxuICByZXR1cm4ge1xuICAgIHNMZW5ndGgsIGdvdEhpdCwgaXNTdW5rLCBzaG93SGl0VGFibGUsIGdldExlbmd0aCxcbiAgfTtcbn07XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgY29vcmRpbmF0ZXNUYWIgPSBBcnJheSgxMCkuZmlsbCgpLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbCgwKSk7XG4gIGNvbnN0IHRhYmxlID0gKCkgPT4gY29vcmRpbmF0ZXNUYWI7XG4gIGNvbnN0IHNoaXBzRGF0YSA9IFtdO1xuICBjb25zdCBnZXRTaGlwc0RhdGEgPSAoKSA9PiBzaGlwc0RhdGE7XG5cbiAgY29uc3QgcGxhY2VTaGlwVmFsaWRhdGlvbiA9IChsZW5ndGgsIHgsIHkpID0+IHtcbiAgICBjb25zdCBjYWxjdWxhdGVkWExlbiA9IHggKyBsZW5ndGg7XG4gICAgY29uc3QgY2FsY3VsYXRlZFlMZW4gPSB5ICsgbGVuZ3RoO1xuICAgIGlmIChjYWxjdWxhdGVkWExlbiA+IDEwIHx8IGNhbGN1bGF0ZWRZTGVuID4gMTApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignc2hpcCBvdXQgb2YgYm91bmRzJyk7XG4gICAgfVxuICB9O1xuICAvLyBhZGQgZnVuY3RvbiB0aGF0IGNoZWNrIGlmIHNoaXAgZml0cyBvbiBib2FyZFxuICBjb25zdCBwbGFjZVNoaXAgPSAobmFtZSwgbGVuZ3RoLCB4LCB5KSA9PiB7XG4gICAgcGxhY2VTaGlwVmFsaWRhdGlvbihsZW5ndGgsIHgsIHkpO1xuXG4gICAgY29uc3Qgc2hpcCA9IFNoaXAobGVuZ3RoKTtcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRlZCBzaGlwJyk7XG4gICAgLy8gcGxhY2Ugb24gZ2FtZWJvYXJkIGNvb3JkaW5hdGVzIHNoaXAgbmFtZSBhbmQgc2hpcCBmaWVsZCBwcm9wZXJ0eSAoaGl0OnRydWUvZmFsc2UpXG4gICAgZm9yIChsZXQgaSA9IGxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzaGlwLnNob3dIaXRUYWJsZSgpW2ldLmhpdCk7XG4gICAgICBjb29yZGluYXRlc1RhYlt4XVt5XSA9IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgaGl0OiBzaGlwLnNob3dIaXRUYWJsZSgpW2ldLmhpdCxcbiAgICAgICAgaW5kZXg6IGksXG4gICAgICB9O1xuICAgICAgeCsrO1xuICAgIH1cbiAgICBzaGlwc0RhdGEucHVzaCh7XG4gICAgICBuYW1lLFxuICAgICAgZGF0YTogc2hpcCxcblxuICAgIH0pO1xuICB9O1xuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICAvLyBpZiBsZWdhbCBhdHRhY2sgcmV0dXJuIDAsIGVsc2UgcmV0dXJuIDFcbiAgICBjb25zdCB0YWIgPSB0YWJsZSgpW3hdW3ldO1xuICAgIC8vIGlmIG1pc3NlZFxuICAgIGlmICh0YWIgPT09IDApIHtcbiAgICAgIHRhYmxlKClbeF1beV0gPSAyO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSBpZiAodHlwZW9mIHRhYiA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnN0IHNoaXBOYW1lID0gdGFiLm5hbWU7XG5cbiAgICAgIC8vIGlmIHRoZXJlIGlzIG1vcmUgdGhhbiAxIHNoaXBzIGl0IGZpbmRzIHVuZGVyIHdoaWNoIGluZGV4IGhpZGVzIG91ciBhdHRhY2tlZCBzaGlwXG5cbiAgICAgIGNvbnN0IGluZGV4ID0gc2hpcHNEYXRhLmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudC5uYW1lID09PSBzaGlwTmFtZSk7XG4gICAgICBjb25zdCBzaGlwQXR0YWNrZWRGaWVsZEluZGV4ID0gdGFiLmluZGV4O1xuXG4gICAgICBpZiAodGFiLmhpdCA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyBvbnNvbGUubG9nKCd0cnVlJyk7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgICAvLyBjaGFuZ2UgaGl0IHRvIHRydWUgaW4gc2hpcHNEYXRhXG4gICAgICBnZXRTaGlwc0RhdGEoKVtpbmRleF0uZGF0YS5nb3RIaXQoc2hpcEF0dGFja2VkRmllbGRJbmRleCk7XG5cbiAgICAgIC8vIGNoYW5nZSBoaXQgdG8gdHJ1ZSBpbiBjb29yZGluYXRlc1xuICAgICAgdGFiLmhpdCA9IGdldFNoaXBzRGF0YSgpW2luZGV4XS5kYXRhLnNob3dIaXRUYWJsZSgpW3NoaXBBdHRhY2tlZEZpZWxkSW5kZXhdLmhpdDtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHRhYmxlLCBwbGFjZVNoaXAsIGdldFNoaXBzRGF0YSwgcmVjZWl2ZUF0dGFjayxcbiAgfTtcbn07XG5cbmNvbnN0IFBsYXllciA9IChuYW1lLCBhaSkgPT4ge1xuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcbiAgbGV0IHBsYXllclR1cm4gPSB0cnVlO1xuICBjb25zdCBjaGVja1R1cm4gPSAoKSA9PiBwbGF5ZXJUdXJuO1xuXG4gIGNvbnN0IGlzQWkgPSBhaTtcblxuICBjb25zdCBwbGF5VHVybiA9IChlbmVteUdhbWVib2FyZCwgZW5lbXlQbGF5ZXIsIHgsIHkpID0+IHtcbiAgICBpZiAoaXNBaSA9PT0gdHJ1ZSkge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgZG8ge1xuICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBjb25zb2xlLmxvZyhgaWxsZWdhbCBoaXQ6ICR7aX0sIGNvb3JkOiBbJHt4fV1bJHt5fV1gKTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgICAgd2hpbGUgKGVuZW15R2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSkgIT09IDApO1xuICAgIH1cbiAgICBlbmVteUdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIHBsYXllclR1cm4gPSBmYWxzZTtcbiAgICBlbmVteVBsYXllci5wbGF5ZXJUdXJuID0gdHJ1ZTtcbiAgICByZXR1cm4geyB4LCB5IH07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLCBwbGF5VHVybiwgY2hlY2tUdXJuLCBpc0FpLFxuICB9O1xufTtcblxuZXhwb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIgfTtcbiIsImltcG9ydCB7IFNoaXAsIEdhbWVib2FyZCwgUGxheWVyIH0gZnJvbSAnLi9sb2dpYyc7XG5cbmNvbnN0IG1haW5Mb29wID0gKCgpID0+IHtcbiAgLy8gY3JlYXRlIHBsYXllcnNcbiAgY29uc3QgcGxheWVyMSA9IFBsYXllcignUGxheWVyMScsIGZhbHNlKTtcbiAgY29uc3QgQUkgPSBQbGF5ZXIoJ0FJJywgdHJ1ZSk7XG5cbiAgLy8gY3JlYXRlIGdhbWVib2FyZHNcbiAgY29uc3QgcGxheWVyMUdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBBSUdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIC8vIGNyZWF0ZSBzaGlwc1xuICBwbGF5ZXIxR2FtZWJvYXJkLnBsYWNlU2hpcCgnc2hpcDEnLCA1LCAyLCA0KTtcbiAgcGxheWVyMUdhbWVib2FyZC5wbGFjZVNoaXAoJ3NoaXAyJywgMywgNiwgNik7XG4gIEFJR2FtZWJvYXJkLnBsYWNlU2hpcCgnQUlzaGlwMicsIDUsIDIsIDIpO1xuXG4gIGZ1bmN0aW9uIG1hcmtTaGlwc09uR2FtZUJvYXJkKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIxR2FtZWJvYXJkLnRhYmxlKClbaV1bal0pO1xuICAgICAgICBpZiAodHlwZW9mIChwbGF5ZXIxR2FtZWJvYXJkLnRhYmxlKClbaV1bal0pID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4gICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS14PVwiJHtpfVwiXVtkYXRhLXk9XCIke2p9XCJdYCk7XG4gICAgICAgICAgY29uc3QgZWwgPSBlbGVtZW50c1swXTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlbCk7XG4gICAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgLy8gY29uc3QgcGxheWVyR2FtZWJvYXJkRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQtbGVmdCcpO1xuICAgICAgICAvLyBjb25zdCBjZWxsID0gcGxheWVyR2FtZWJvYXJkRGlzcGxheS5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtpfV1cIltkYXRhLXk9XCIke2p9XCJdYCk7XG4gICAgICAgIC8vIGNlbGwuc3R5bGUuYmFja2dyb3VuZCA9ICdncmVlbic7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc29sZS5sb2cocGxheWVyMUdhbWVib2FyZC5nZXRTaGlwc0RhdGEoKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwbGF5ZXIxLCBBSSwgcGxheWVyMUdhbWVib2FyZCwgQUlHYW1lYm9hcmQsIG1hcmtTaGlwc09uR2FtZUJvYXJkLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgbWFpbkxvb3AgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB3ZWJJbml0IGZyb20gJy4vZG9tJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgd2ViSW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=