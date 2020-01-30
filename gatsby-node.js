// /*
//   this is where the pages are generated
// */
const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)
const contentPath = "./src/content/"
const imageNames = ["thumbnail", "image"]

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { frontmatter } = node

    if (frontmatter) {
        const images = []

        for (let prop in frontmatter) {
            if (imageNames.indexOf(prop) >= 0) {
                images.push(prop)
            }
        }

        for (let imageName of images) {
            let image = frontmatter[imageName]

            if (image) {
                if (image.indexOf("/assets") === 0) {
                    frontmatter[imageName] = path.relative(
                        path.dirname(node.fileAbsolutePath),
                        path.join(__dirname, contentPath, image)
                    )
                }
            }
        }
    }

    // adding slugs to pages
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })

        const content = node.internal.content
        const fixedPathContent = content.replace(/\(\/assets\//g, "(../assets/")
        node.internal.content = fixedPathContent

        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    //allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {

    return graphql(`
        {
            allMarkdownRemark(limit: 1000) {
                edges {
                    node {
                        html
                        fields {
                            slug
                        }
                        frontmatter {
                            templateKey
                            title
                            category
                            category2
                            graduate
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            result.errors.forEach(e => console.error(e.toString()))
            return Promise.reject(result.errors)
        }
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve(
                    `src/templates/${String(node.frontmatter.templateKey)}.js`
                ),
                context: {
                    slug: node.fields.slug,
                    name: "/" + node.frontmatter.title + "/",
                    title: node.frontmatter.title,
                    graduateName: node.frontmatter.graduate,
                    graduate: "/" + node.frontmatter.graduate + "/",
                    category: "/" + node.frontmatter.category + "/",
                    category2: "/" + node.frontmatter.category2 + "/",
                }, // additional data can be passed via context
            })
        })
    })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /intersection-observer/,
                        use: loaders.null(),
                    },
                ],
            },
        })
    }
}
