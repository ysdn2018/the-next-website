// /*
//   this is where the pages are generated
// */
const path = require('path');
const fs = require('fs');

const staticImagePath = "./static/assets/";
const contentPath = "./src/content/";


exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  // making frontmatter paths relative
  const { frontmatter } = node;
  if (frontmatter) {
    const { image } = frontmatter
    if (image) {
      if (image.indexOf('/assets') === 0) {
        frontmatter.image = path.relative(
          path.dirname(node.fileAbsolutePath),
          path.join(__dirname, contentPath, image)
        )
      }
    }
  }

  // adding images to static folder for preview (only in prod)
  if ((node.internal.mediaType == "image/png" || node.internal.mediaType === `image/jpeg`) && process.env.NODE_ENV === 'production') {
    if (!fs.existsSync(staticImagePath)){
      fs.mkdirSync(staticImagePath);
    }

    fs.createReadStream(contentPath + node.relativePath).pipe(fs.createWriteStream(staticImagePath + node.base));
  }
}


exports.createPages = ({ boundActionCreators, graphql }) => {
 const { createPage } = boundActionCreators;

 return graphql(`
   {
     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
       edges {
         node {
           frontmatter {
             templateKey
             path
           }
         }
       }
     }
   }
 `).then(result => {
   if (result.errors) {
     result.errors.forEach(e => console.error(e.toString()));
     return Promise.reject(result.errors);
   }
   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
     createPage({
       path: node.frontmatter.path,
       component: path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.js`),
       context: {} // additional data can be passed via context
     });
   });
 });
};
