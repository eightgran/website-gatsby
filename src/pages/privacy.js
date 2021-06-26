import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { PrivacyPolicyData } from "../data/PrivacyPolicyData"

const Privacy = () => {
  function buildParagraphs(item) {
    return (
      <div>
        {item.paragraphs.map((paragraph, key) => {
          return <div key={key}>{paragraph}</div>
        })}
      </div>
    )
  }

  return (
    <Layout>
      <Seo title="Privacy" />
      <PrivacyContainer>
        <h1> {PrivacyPolicyData.en.title}</h1>
        {PrivacyPolicyData.en.sections.map((item, key) => {
          return (
            <div>
              <h2 key={key}>{item.title}</h2>
              {buildParagraphs(item)}
            </div>
          )
        })}
      </PrivacyContainer>
    </Layout>
  )
}

export default Privacy

const PrivacyContainer = styled.div`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 2rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
  min-height: 100vh;
  color: #8f8f8f;

  h1 {
    margin: 1rem 0rem;
  }

  h2 {
    margin: 1rem 0rem;
  }

  a {
    text-decoration: none;
    color: #6f6f6f;
    transition: 200ms;
    &:hover {
      color: #9f9f9f;
    }
  }

  li {
    list-style: none;
    color: #9f9f9f;
    margin: 0.5rem 1.5rem;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`
