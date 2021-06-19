import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Home from "./home"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Home/>
  </Layout>
)

export default IndexPage
