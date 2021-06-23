import * as React from "react"
import HomeHero from "../components/HomeHero"

import Layout from "../components/Layout"
import Seo from "../components/seo"

import About from "../components/About"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <HomeHero />
      <About />
    </Layout>
  )
}

export default IndexPage
