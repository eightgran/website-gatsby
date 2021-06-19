import React from 'react'
import styled from "styled-components"

const Home = () => {
    return (
       <Container >

       </Container>
    )
}

export default Home

const Container = styled.div`
  background: #fefefe;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  // Regard the navbar, so a margin on the top will required to
  // align the items to the center.
  margin-top: -80px;
  color: #fff;
  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`