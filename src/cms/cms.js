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

CMS.registerEditorComponent({
  // Internal id of the component
  id: "youtube",
  // Visible label
  label: "Youtube",
  // Fields the user need to fill out when adding an instance of the component
  fields: [{ name: 'id', label: 'Youtube Video ID', widget: 'string' }],
  // Pattern to identify a block as being an instance of this component
  pattern: /^youtube (\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function (match) {
    return {
      id: match[1]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function (obj) {
    return 'youtube ' + obj.id;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function (obj) {
    return (
      '<img src="http://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>'
    );
  }
});