import * as React from "react"
import { useState, useEffect } from "react"
import styled, { css, keyframes } from "styled-components"

import Layout from "../components/Layout"
import PageContainer from "../components/PageContainer"
import Seo from "../components/seo"

const IndexPage = () => {
  const [nameLetters, setNameLetters] = useState("e")

  function appendLetter() {
    if (nameLetters.length < 9) {
      // Append letters
      switch (nameLetters.length) {
        case 1:
          setNameLetters(nameLetters + "i")
          break
        case 2:
          setNameLetters(nameLetters + "g")
          break
        case 3:
          setNameLetters(nameLetters + "h")
          break
        case 4:
          setNameLetters(nameLetters + "t")
          break
        case 5:
          setNameLetters(nameLetters + "g")
          break
        case 6:
          setNameLetters(nameLetters + "r")
          break
        case 7:
          setNameLetters(nameLetters + "a")
          break
        case 8:
          setNameLetters(nameLetters + "n")
          break
        default:
          setNameLetters("e")
          break
      }
    }
  }

  function getShouldAnimate() {
    return nameLetters.length < 9
  }

  useEffect(() => {
    const interval = setInterval(() => {
      appendLetter()
    }, 750)
    return () => clearInterval(interval)
  }, [nameLetters.length])

  return (
    <Layout>
      <Seo title="Home" />
      <HeroContainer>
        <HeroContent>
          <HeroItems>
            <HeroItemRight>
              {getShouldAnimate()? <HeroItemRightAnimated>{nameLetters}</HeroItemRightAnimated>:<h1>{nameLetters}</h1>}
            </HeroItemRight>
            <HeroItemLeft>is making software</HeroItemLeft>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </Layout>
  )
}

export default IndexPage

const HeroContainer = styled.div`
  background: linear-gradient(90deg, #ffffff, #eeeeee);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  // Regard the navbar, so a margin on the top will required to
  // align the items to the center.
  margin-top: -80px;
  color: #474747;
`

const HeroContent = styled.div`
  height: calc(100vh-80px);
  max-height: 100%;
  padding: 0rem calc((100vw- 1300px) / 2);
`

const HeroItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;

  padding: 0;
  line-height: 1.1;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const opacity = keyframes`
  from {
    display:none;
    opacity: 0;
  }

  to {
    display: block;
        opacity: 1;
  }
`

const HeroItemRight = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: azure;


  /* transition: 500ms; */
`

const HeroItemRightAnimated = styled.h1`
  animation: ${opacity} 750ms linear infinite;
`

const HeroItemLeft = styled.div`
  color: #dbb6b6;
  font-weight: 900;
  font-size: 1.2rem;
`
