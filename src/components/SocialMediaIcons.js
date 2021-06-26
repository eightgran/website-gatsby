import React from "react"
import styled from "styled-components"
import { ProfileData } from "../data/ProfileData"

const SocialMediaIcons = () => {
  return (
    <SocialMediaIconContainer>
      <EmailIcon href={`mailto:${ProfileData.email}`}>
        {<ProfileData.emailIcon/>}
      </EmailIcon>
      {ProfileData.socialMediaProfiles.map((social, key) => {
        return (
          <SocialMediaIcon
            key={key}
            href={social.link}
            target="_blank"
            margin={+(key < ProfileData.socialMediaProfiles.length - 1)}
          >
            {<social.icon />}
          </SocialMediaIcon>
        )
      })}
    </SocialMediaIconContainer>
  )
}

export default SocialMediaIcons

const SocialMediaIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* margin-top: 1rem; */
`

const SocialMediaIcon = styled.a`
  margin-right: ${({ margin }) => (margin ? "0.5rem" : "0")};
  color: #bdbdbd;
  font-size: 1.5rem;
  transition: 150ms;
  text-decoration: none !important;
  display: flex;

  &:hover {
    color: #fff;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`

const EmailIcon = styled.a`
  margin-right: 0.5rem;
  color: #bdbdbd;
  font-size: 1.5rem;
  transition: 150ms;
  text-decoration: none !important;
  display: flex;

  &:hover {
    color: #fff;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`
