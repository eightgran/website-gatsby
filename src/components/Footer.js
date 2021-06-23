import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import SocialMediaIcons from "./SocialMediaIcons"

const Footer = () => {
  return (
    //     <FooterContainer>

    // <Description>
    //           <p>eightgran</p>
    //           <p>Michael Grigorenko</p>
    //         </Description>

    //         <FooterLinks>
    //           <SourceCodeLink>
    //             <p>source code</p>
    //           </SourceCodeLink>
    //           <SocialMediaIcons />
    //         </FooterLinks>

    //         <FooterLinks>
    //           <SourceCodeLink>
    //             <p>source code</p>
    //           </SourceCodeLink>
    //         </FooterLinks>

    //     </FooterContainer>
    <FooterContainer>
      <FooterContent>
        <Description>
          <p>eightgran</p>
          <p>Michael Grigorenko</p>
        </Description>
        <FooterLinks>
          <SourceCodeLink>
            <p>source code</p>
          </SourceCodeLink>
        </FooterLinks>
        <SocialMediaIcons />
        <FooterLinks>
          <SourceCodeLink>
            <p>source code</p>
          </SourceCodeLink>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  text-align: left;

  padding: 2rem 1rem;
  justify-content: space-between;
  width: 100%;

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

const FooterContainer = styled.div`
  padding: 2 calc((100vw - 1100px) / 2);
  background: #303030;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
`

// const FooterContainer = styled.div`
//   padding: 2rem calc((100vw - 1100px) / 2);
//   width: 100%;
//   display: flex;
//   /* flex-direction: row; */
//   position: relative;
//   background: #303030;
//   /* justify-content: space-between; */
//   @media screen and (max-width: 768px) {
//     display: column;
//     justify-content: center;
//   }
// `
// const ContentContainer = styled.div`
//   margin: 1rem;
//   width: 100%;
//   display: flex;
//   /* flex-direction: row; */
//   justify-content: space-between;

//   @media screen and (max-width: 768px) {
//     display: column;
//     justify-content: center;
//   }
// `
const Description = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  text-align: left;
  p {
    font-size: 0.85rem;
    color: #fff;

    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
  }

`
const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* margin-top: 1rem; */

  @media screen and (max-width: 768px) {
    display: column;
    justify-content: center;


    margin: 2rem;
  }
`

const SourceCodeLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: flex;
  margin-left: 2rem;
  margin-right: 2rem;
  @media screen and (max-width: 768px) {
    display: column;
    justify-content: center;
   
  }
`
