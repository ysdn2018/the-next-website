webpackHotUpdate(0,{

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(13)).enterModule;
  enterModule && enterModule(module);
})();



var Name = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "GraduatePagePreview__Name"
})(["font-size:4rem;text-transform:uppercase;"]);
var Headshot = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "GraduatePagePreview__Headshot"
})(["max-width:500px;width:90%;"]);
var Statement = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "GraduatePagePreview__Statement"
})(["color:pink;text-transform:uppercase;"]);

var GraduatePagePreview = function GraduatePagePreview(_ref) {
  var entry = _ref.entry,
      getAsset = _ref.getAsset;
  // const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  // const blurbs = entryBlurbs ? entryBlurbs.toJS() : []
  var image = entry.getIn(['data', 'image']);
  var headshot = getAsset(image);
  var entryName = entry.getIn(['data', 'title']);
  var name = entryName;
  var noun = entry.getIn(['data', 'noun']);
  var verb = entry.getIn(['data', 'verb']); // const questions = entry.getIn(['data', 'intro', 'music', 'tools', 'watch', 'typeface'])

  var intro = entry.getIn(['data', 'intro']);
  var music = entry.getIn(['data', 'music']);
  var tools = entry.getIn(['data', 'tools']);
  var watch = entry.getIn(['data', 'watch']);
  var typeface = entry.getIn(['data', 'typeface']);
  var twitter = entry.getIn(['data', 'twitter']);
  var instagram = entry.getIn(['data', 'instagram']);
  var linkedin = entry.getIn(['data', 'linkedin']);
  var email = entry.getIn(['data', 'email']);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "disclaimer"
  }, " Styling is only a rough approximation of actual styles"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "top-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: headshot
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "name"
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "statement"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, verb), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "the next "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, noun)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "social-links"
  }, twitter && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "social-link",
    href: twitter,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "twitter"), instagram && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "social-link",
    href: instagram,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "instagram"), linkedin && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "social-link",
    href: linkedin,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "linkedin"), email && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "social-link",
    href: email,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "email"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, intro), music && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Music:"), music), tools && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Tools:"), tools), watch && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Watch:"), watch), typeface && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Typefaces:"), typeface));
};

var _default = GraduatePagePreview;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(13)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Name, "Name", "/Users/huntercaron/Documents/the-next/the-next-website/src/cms/preview-templates/GraduatePagePreview.js");
  reactHotLoader.register(Headshot, "Headshot", "/Users/huntercaron/Documents/the-next/the-next-website/src/cms/preview-templates/GraduatePagePreview.js");
  reactHotLoader.register(Statement, "Statement", "/Users/huntercaron/Documents/the-next/the-next-website/src/cms/preview-templates/GraduatePagePreview.js");
  reactHotLoader.register(GraduatePagePreview, "GraduatePagePreview", "/Users/huntercaron/Documents/the-next/the-next-website/src/cms/preview-templates/GraduatePagePreview.js");
  reactHotLoader.register(_default, "default", "/Users/huntercaron/Documents/the-next/the-next-website/src/cms/preview-templates/GraduatePagePreview.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(13)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)(module)))

/***/ })

})
//# sourceMappingURL=0.940247bd4db9c3d6f51e.hot-update.js.map