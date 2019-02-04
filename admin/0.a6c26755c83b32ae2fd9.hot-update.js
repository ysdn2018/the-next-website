webpackHotUpdate(0,{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined;

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(13)).enterModule;
  enterModule && enterModule(module);
})();



var ProductPagePreview = function ProductPagePreview(_ref) {
  var entry = _ref.entry,
      getAsset = _ref.getAsset;
  // const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  // const blurbs = entryBlurbs ? entryBlurbs.toJS() : []
  var image = entry.getIn(['data', 'image']);

  var bg = _this.props.getAsset(image); // const entryTestimonials = entry.getIn(['data', 'testimonials'])
  // const testimonials = entryTestimonials ? entryTestimonials.toJS() : []
  // const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  // const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []


  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: bg
  }));
};

var _default = ProductPagePreview;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(13)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ProductPagePreview, "ProductPagePreview", "/Users/huntercaron/Documents/the-next/the-next-website/src/cms/preview-templates/ProjectPagePreview.js");
  reactHotLoader.register(_default, "default", "/Users/huntercaron/Documents/the-next/the-next-website/src/cms/preview-templates/ProjectPagePreview.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(13)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)(module)))

/***/ })

})
//# sourceMappingURL=0.a6c26755c83b32ae2fd9.hot-update.js.map