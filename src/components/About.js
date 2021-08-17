import React from "react"
import { useStaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { ProfileData } from "../data/ProfileData"
import SocialMediaIcons from "./SocialMediaIcons"

const About = () => {
  const data = useStaticQuery(graphql`
    query ProfilePictureQuery {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["Profile_Picture"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <AboutSection>
      <AboutContent>
        {data.allFile.edges.map((image, key) => (
          <Images
            key={key}
            alt={image.node.alt}
            fluid={image.node.childImageSharp.fluid}
          />
        ))}
        <ProfileDescription>
          <h1>{ProfileData.name}</h1>
          <ProfileCharacteristics>
            {ProfileData.characteristics.map((elem, key) => {
              return (
                <ProfileProperty key={key}>
                  <IconContainer>{<elem.icon />}</IconContainer>
                  <p>{elem.label}</p>
                </ProfileProperty>
              )
            })}
          </ProfileCharacteristics>
          <SocialMediaIcons />
        </ProfileDescription>
      </AboutContent>
    </AboutSection>
  )
}

export default About

const Images = styled(Img)`
  border-radius: 25%;
  box-shadow: -2px 2px 8px -1px rgba(0,0,0,0.25);
  height: 192px;
  width: 192px;
  @media screen and (max-width: 768px) {
    margin: 2rem 2rem;
    height: 256px;
    width: 256px;
  }
`

const AboutSection = styled.div`
  background: #4a4a4a;
  display: flex;
  flex-direction: row;
  padding: 0 1rem;
  position: relative;
  justify-content: center;
  min-height: 50vh;
  max-height: 100%;
  padding: 0;
`
const AboutContent = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  text-align: left;

  justify-content: space-between;

  h1 {
    color: #dbdbdb;
    font-size: 2rem;
    /* margin: 1rem; */

    @media screen and (max-width: 768px) {
      font-size: 1.25rem;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`

const ProfileCharacteristics = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;

  p {
    font-size: 1.15rem;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
`

const ProfileProperty = styled.div`
  justify-content: left;
  align-items: center;
  display: flex;
  color: #dbdbdb;
  font-weight: 500;
`
const IconContainer = styled.div`
  padding-right: 0.5rem;
  display: flex;
`

const ProfileDescription = styled.div`
  margin: 2rem;
`
