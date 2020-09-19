import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => (
  <Layout>
    <Head title="home" />
    <h1>Hello index page</h1>
    <h1>Im levan SARISHVILI LIVING IN GEORGIA</h1>
    <p>
      Need a develiper? <Link to="/contact">Contact me</Link>
    </p>
  </Layout>
)

export default IndexPage
