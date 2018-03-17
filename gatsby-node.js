// /*
//   this is where the pages are generated
// */
const path = require('path');
const fs = require('fs');
const { createFilePath } = require(`gatsby-source-filesystem`);

const staticImagePath = "./static/assets/";
const contentPath = "./src/content/";
const imageNames = ["headshot", "thumbnail", "image"];


exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  // making frontmatter paths relative
  const { frontmatter } = node;
  if (frontmatter) {
    console.log();
    const images = [];

    for (let prop in frontmatter) {
      if (imageNames.indexOf(prop) >= 0) {
        images.push(prop);
      }
    }
    
    for (let imageName of images) {
      let image = frontmatter[imageName];

      if (image) {
        if (image.indexOf('/assets') === 0) {
          frontmatter[imageName] = path.relative(
            path.dirname(node.fileAbsolutePath),
            path.join(__dirname, contentPath, image)
          )
        }
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


  // adding slugs to pages
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}


exports.createPages = ({ boundActionCreators, graphql }) => {
 const { createPage } = boundActionCreators;

  //allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {

 return graphql(`
   {
     allMarkdownRemark(limit: 1000) {
       edges {
         node {
           fields {
             slug
           }
           frontmatter {
             templateKey
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
       path: node.fields.slug,
       component: path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.js`),
       context: {
         slug: node.fields.slug
       } // additional data can be passed via context
     });
   });
 });
};
