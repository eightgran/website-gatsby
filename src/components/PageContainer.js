import React from "react"
import styled from "styled-components"

const PageContainer = ({ children }) => {
  return <Container>{children}</Container>
}

export default PageContainer

const Container = styled.div`
  background: linear-gradient(90deg, #ffffff, #eeeeee);
  display: flex;
  position: relative;
  height: 100vh;
  padding: 0 1rem;
  // Regard the navbar, so a margin on the top will required to
  // align the items to the center.
  margin-top: -80px;
`
