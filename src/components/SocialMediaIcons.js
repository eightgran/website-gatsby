import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { ProfileData } from "../data/ProfileData"

const SocialMediaIcons = () => {
  return (
    <SocialMediaIconContainer>
      {ProfileData.socialMediaProfiles.map((social, key) => {
        return (
          <SocialMediaIcon
            key={key}
            to={social.link}
            target="_blank"
            margin={key < ProfileData.socialMediaProfiles.length - 1}
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

const SocialMediaIcon = styled(Link)`
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
