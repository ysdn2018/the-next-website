webpackHotUpdate(0,{

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var netlify_cms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var netlify_cms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(netlify_cms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var netlify_cms_dist_cms_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var netlify_cms_dist_cms_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(netlify_cms_dist_cms_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _preview_templates_ProjectPagePreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _preview_templates_GraduatePagePreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
// Your module must at least include these three imports



 // Let's say you've created widget and preview components for a custom image
// gallery widget in separate files
// import ImageGalleryWidget from "./image-gallery-widget.js";
// import ImageGalleryPreview from "./image-gallery-preview.js";

netlify_cms__WEBPACK_IMPORTED_MODULE_0___default.a.registerPreviewStyle("css/styles.css");
netlify_cms__WEBPACK_IMPORTED_MODULE_0___default.a.registerPreviewTemplate("projects", _preview_templates_ProjectPagePreview__WEBPACK_IMPORTED_MODULE_2__["default"]);
netlify_cms__WEBPACK_IMPORTED_MODULE_0___default.a.registerPreviewTemplate("graduates", _preview_templates_GraduatePagePreview__WEBPACK_IMPORTED_MODULE_3__["default"]); // CMS.registerPreviewStyle("/css/all.css");
// Register the imported widget:
// CMS.registerWidget("image-gallery", ImageGalleryWidget, ImageGalleryPreview);

netlify_cms__WEBPACK_IMPORTED_MODULE_0___default.a.registerEditorComponent({
  // Internal id of the component
  id: "youtube",
  // Visible label
  label: "Youtube",
  // Fields the user need to fill out when adding an instance of the component
  fields: [{
    name: 'id',
    label: 'Youtube Video ID',
    widget: 'string'
  }],
  // Pattern to identify a block as being an instance of this component
  pattern: /^youtube (\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function fromBlock(match) {
    return {
      id: match[1]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function toBlock(obj) {
    return "<iframe width=\"560\" height=\"315\" src=https://www.youtube.com/embed/" + obj.id + "?rel=0&amp;showinfo=0 frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>";
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function toPreview(obj) {
    return '<img src="http://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>';
  }
});
netlify_cms__WEBPACK_IMPORTED_MODULE_0___default.a.registerEditorComponent({
  // Internal id of the component
  id: "vimeo",
  // Visible label
  label: "Vimeo",
  // Fields the user need to fill out when adding an instance of the component
  fields: [{
    name: 'id',
    label: 'Vimeo Video ID',
    widget: 'string'
  }],
  // Pattern to identify a block as being an instance of this component
  pattern: /^youtube (\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function fromBlock(match) {
    return {
      id: match[1]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function toBlock(obj) {
    return "<iframe src=\"https://player.vimeo.com/video/" + obj.id + "\" width=\"640\" height=\"360\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function toPreview(obj) {
    return '<img src="http://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>';
  }
}); // <iframe src="https://player.vimeo.com/video/201540199" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

/***/ })

})
//# sourceMappingURL=0.c0d971848417c3ccb320.hot-update.js.map