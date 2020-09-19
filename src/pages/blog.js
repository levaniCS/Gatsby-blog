import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost(
        sort: { fields: published, order: DESC }
        filter: { node_locale: { eq: "en-US" } }
      ) {
        edges {
          node {
            title
            slug
            published(formatString: "MMM Do, YYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1> Blog page </h1>
      <ol className={blogStyles.posts}>
        {data &&
          data.allContentfulBlogPost.edges.map((blogItem, i) => (
            <li key={i} className={blogStyles.post}>
              <Link to={`/blog/${blogItem.node.slug}`}>
                <h3>{blogItem.node.title}</h3>
                <p>{blogItem.node.published}</p>
              </Link>
            </li>
          ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
