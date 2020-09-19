const path = require("path")

//?  IN CASE WE WANT TO ADD createPages in graphQL API

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 1. Get path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")

  // 2. Get markdown data
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // 3. Create new pages
  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: blogTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     // Extract file name from path

//     console.log(JSON.stringify(node, null, 2))

//     const slug = path.basename(node.fileAbsolutePath, ".md")

//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }
