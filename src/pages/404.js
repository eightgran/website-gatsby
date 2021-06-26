import * as React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Container>
    <h1>404 - Page not found</h1>
    <p>This page does not exist.</p>
    </Container>
  </Layout>
)

export default NotFoundPage

const Container = styled.div`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 2rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
  min-height: 100vh;
  color: #8f8f8f;
  text-align: center;
  // Regard the navbar, so a margin on the top will required to
  // align the items to the center.
`
