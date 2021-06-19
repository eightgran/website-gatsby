import React from 'react'
import styled from "styled-components"

const Footer = () => {
    return (
        <Container>
            Footer
        </Container>
    )
}

export default Footer

const Container = styled.div`
  padding: 5rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background: #000;
  `