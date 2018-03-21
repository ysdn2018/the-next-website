// Your module must at least include these three imports
import React from "react";
import CMS from "netlify-cms";
import "netlify-cms/dist/cms.css";

// Let's say you've created widget and preview components for a custom image
// gallery widget in separate files
// import ImageGalleryWidget from "./image-gallery-widget.js";
// import ImageGalleryPreview from "./image-gallery-preview.js";

import allCss from "./css/styles.css"

CMS.registerPreviewStyle(allCss);

// CMS.registerPreviewStyle("/css/all.css");

// Register the imported widget:
// CMS.registerWidget("image-gallery", ImageGalleryWidget, ImageGalleryPreview);