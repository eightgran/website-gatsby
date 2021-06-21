import * as React from "react"
import { useState, useEffect } from "react"
import styled, { css, keyframes } from "styled-components"

import Layout from "../components/Layout"
import PageContainer from "../components/PageContainer"
import Seo from "../components/seo"
import { animateString, showAnimatedString } from "../util/animated-string"

const IndexPage = () => {
  const animatedString = "eightgran"
  const [nameLetters, setNameLetters] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      animateString(animatedString, setNameLetters, nameLetters)
    }, 750)
    return () => clearInterval(interval)
  }, [nameLetters.length])

  /**
   * Returns either a static string or an animated string
   * depending the current animation state.
   *
   * @returns
   */
  function getAnimatedString() {
    // If the animation is playing (state value has been
    // modified).
    if (nameLetters.length !== 0) {
      // Return the animated string.
      return (
        <h1>
          {nameLetters.substr(0, nameLetters.length - 1)}
          <span>
            <HeroItemRightAnimated>
              {nameLetters[nameLetters.length - 1]}
            </HeroItemRightAnimated>
          </span>
        </h1>
      )
      // Otherwise show the static string if the animation
      // has been dismissed.
    } else {
      return <h1>{animatedString}</h1>
    }
  }

  return (
    <Layout>
      <Seo title="Home" />
      <HeroContainer>
        <Circle />
        <SmallCircle />
        <SmallCircleAlt />
        <HeroContent>
          <HeroItems>
            <HeroItemRight>
              {showAnimatedString(nameLetters, animatedString) ? (
                getAnimatedString()
              ) : (
                <h1>{nameLetters}</h1>
              )}
            </HeroItemRight>
            <HeroItemLeft>
              <p>is making software</p>
            </HeroItemLeft>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
      <HeroContainer dark="true" noPadding="true"></HeroContainer>
    </Layout>
  )
}

export default IndexPage

const HeroContainer = styled.div`
  background-color: black;
  background: ${({ dark }) =>
    dark
      ? "#4a4a4a"
      : "linear-gradient(45deg, #eeeeee, rgba(200,227,204,0.5))"};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  // Regard the navbar, so a margin on the top will required to
  // align the items to the center.
  margin-top: ${({ noPadding }) => (noPadding ? "0px" : "-80px")};
  color: #474747;
`

const HeroContent = styled.div`
  height: calc(100vh-80px);
  max-height: 100%;
  padding: 0rem calc((100vw- 1300px) / 2);
  z-index: 2;
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

const circleTransform = keyframes`
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

const trigTransform = keyframes`

  0% {
    transform: scale(1.0);
    transform:  rotate(0) translate(0) rotate(0);
  }

  50% {
    transform: rotate(180deg);
    transform: scale(1.1);
    transform: rotate(180deg) translate(50vh) rotate( -90deg)
    };
  }

  100%{
    transform: scale(1.0);
    transform:  rotate(0) translate(50vh) rotate(calc(-1 * 0));
  }
`

const trigTransformAlt = keyframes`

  0% {
    transform: rotate(0deg);
    transform: scale(1.0);
    transform:  rotate(0) translate(0) rotate(0);
  }

  50% {
    transform: rotate(-180deg);
    transform: scale(0.85);
    transform: rotate(-180deg) translate(45vh) rotate(90deg)
    };
    };
  }

  100%{
    transform: rotate(-360deg);
    transform: scale(1.0);
    transform:  rotate(0) translate(45vh) rotate(calc(-1 * 0));
  }
`

const HeroItemRight = styled.div`
  margin: 0.5rem;
  padding: 1rem;
  background-color: #e7fff9;
  display: inline;
  h1 {
    line-height: 1.1;
    font-weight: 700;
    font-size: clamp(1.5rem, 6vw, 3rem);
    color: #a1a1a1;
    display: inline;
  }
`

const HeroItemRightAnimated = styled.h1`
  animation: ${opacity} 750ms linear infinite;
`

const HeroItemLeft = styled.div`
  color: #dbb6b6;
  font-weight: 600;
  font-size: 1.2rem;

  p {
    font-size: clamp(1rem, 3vw, 1.5rem);
  }
`

const Circle = styled.div`
  width: 75vh;
  height: 75vh;
  position: absolute;
  border-radius: 50%;
  z-index: 2;
  // Add the top margin back, which was decreased by its parent container.
  margin-top: 80px;
  background: linear-gradient(
    -135deg,
    rgba(219, 255, 242, 0.5),
    rgba(255, 219, 219, 0.5)
  );
  animation: ${circleTransform} 2000ms linear infinite;
  backdrop-filter: blur(16px);
`
const SmallCircle = styled.div`
  width: 45vh;
  height: 45vh;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  z-index: 1;
  margin-top: 80px - (25vh);
  margin-left: 12.5vw;
  // Add the top margin back, which was decreased by its parent container.
  background: linear-gradient(
    135deg,
    rgba(200, 227, 204, 0.5),
    rgba(255, 255, 255, 0.05)
  );
  animation: ${trigTransform} 5000ms linear infinite;

  @media screen and (max-width: 768px) {
    margin-top: 0;
    margin-left: -50vw;
  }
`
const SmallCircleAlt = styled.div`
  width: 45vh;
  height: 45vh;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  z-index: 1;
  margin-bottom: 80px - (25vh);
  margin-right: 12.5vw;
  background: linear-gradient(
    135deg,
    rgba(199, 201, 240, 0.3),
    rgba(255, 255, 255, 0.05)
  );
  animation: ${trigTransformAlt} 5000ms linear infinite;

  @media screen and (max-width: 768px) {
    margin-bottom: -80px;
    margin-right: -50vw;
  }
`
