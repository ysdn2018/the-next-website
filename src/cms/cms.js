// Your module must at least include these three imports
import React from "react";
import CMS from "netlify-cms";
import "netlify-cms/dist/cms.css";

import ProjectPagePreview from "./preview-templates/ProjectPagePreview";
import GraduatePagePreview from "./preview-templates/GraduatePagePreview";

// Let's say you've created widget and preview components for a custom image
// gallery widget in separate files
// import ImageGalleryWidget from "./image-gallery-widget.js";
// import ImageGalleryPreview from "./image-gallery-preview.js";


CMS.registerPreviewStyle("css/styles.css");
CMS.registerPreviewTemplate("projects", ProjectPagePreview);
CMS.registerPreviewTemplate("graduates", GraduatePagePreview);
// CMS.registerPreviewStyle("/css/all.css");


// Register the imported widget:
// CMS.registerWidget("image-gallery", ImageGalleryWidget, ImageGalleryPreview);