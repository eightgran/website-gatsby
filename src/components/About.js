import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { ProfileData } from "../data/ProfileData"
import SocialMediaIcons from "./SocialMediaIcons"

const About = () => {
  return (
    <AboutSection>
      <AboutContent>
        <ProfilePicture />
        <ProfileDescription>
          <h1>{ProfileData.name}</h1>
          <ProfileCharacteristics>
            {ProfileData.characteristics.map((elem, key) => {
              return (
                <ProfileProperty key={key}>
                  <IconContainer>{<elem.icon />}</IconContainer>
                  {elem.label}
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
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`

const ProfilePicture = styled.div`
  background: white;

  margin: 2rem;
  height: 128px;
  width: 128px;

  @media screen and (max-width: 768px) {
    height: 128px;
    width: 128px;
  }
`

const ProfileCharacteristics = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
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
const SocialMediaIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* margin-top: 1rem; */
`

const ProfileDescription = styled.div`
  margin: 2rem;
`

const SocialMediaIcon = styled(Link)`
  margin-right: ${({ margin }) => (margin ? "0.5rem" : "0")};

  color: #bdbdbd;
  font-size: 1.25rem;
  transition: 150ms;
  text-decoration: none !important;

  &:hover {
    color: #fff;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`
