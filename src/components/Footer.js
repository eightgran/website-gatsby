import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { ProfileData } from "../data/ProfileData"
import { NavigationData } from "../data/NavigationData"
import LogoSmall from "./LogoSmall"

const Footer = () => {
  return (
    <Container>
      <FooterLinksContainer>
        <BrandDescription>
          <LogoSmall />
          <h6>eightgran</h6>
          <p>{ProfileData.slogan}</p>
        </BrandDescription>
        <FooterLinks>
          <SourceLink to="/about">{"<view source>"}</SourceLink>
        </FooterLinks>
      </FooterLinksContainer>
      <FooterLinksContainer>
        <FooterLinks>
          <FooterLinkTitle>Social Media</FooterLinkTitle>

          {ProfileData.socialMediaProfiles.map((social, key) => {
            return (
              <FooterLink
                key={key}
                to={social.link}
                target="_blank"
                icon="true"
              >
                {<social.icon />}
              </FooterLink>
            )
          })}
        </FooterLinks>
        <FooterLinks>
          <FooterLinkTitle>Content</FooterLinkTitle>

          {NavigationData.footerLinks.map((link, key) => {
            return (
              <FooterLink key={key} to={link.link} target="_blank">
                {link.title}
              </FooterLink>
            )
          })}
        </FooterLinks>
      </FooterLinksContainer>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  padding: 4rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #5c5963;
  background: #fff;
`
const BrandDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 768px) {
    padding: 1rem;
    font-size: 0.85rem;
  }

  h6 {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    font-weight: 600;
    font-size: 1rem;
    @media screen and (max-width: 768px) {
      font-size: 0.85rem;
    }
  }

  p {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    font-weight: 400;
    font-size: 1rem;
    @media screen and (max-width: 768px) {
      font-size: 0.85rem;
    }
  }
`
const FooterLinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`
const FooterLinkTitle = styled.h2`
  font-size: 0.85rem;
  margin-bottom: 1rem;
`
const FooterLink = styled(Link)`
  align-items: center;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: ${({ icon }) => (icon ? "1.5rem" : "0.85rem")};
  text-align: left;
  color: #ababab;
  font-weight: 500;
  &:hover {
    transition: 400ms ease-out;
    color: #5c5963;
  }
`

const SourceLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  color: #ababab;
  font-family: monospace;
  &:hover {
    transition: 400ms ease-out;
    color: #5c5963;
  }
`
