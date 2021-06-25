import React from 'react'
import styled from 'styled-components'
import Logo from "../assets/images/Icon-256.svg"

const LogoSmall = () => {
    return (
        <StyledLogo/>
    )
}

export default LogoSmall

const StyledLogo = styled(Logo)`
 width: 3rem;
 height: 3rem;

 @media screen and (max-width: 820px) {
  width: 2rem;
 height: 2rem;
  }
`