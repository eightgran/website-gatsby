import React from 'react'
import styled from 'styled-components'
import { ProfileData } from '../data/ProfileData'

const LogoSmall = () => {
    return (
        <StyledLogo/>
    )
}

export default LogoSmall

const StyledLogo = styled(ProfileData.logoSvgSmall)`
 width: 3rem;
 height: 3rem;

 @media screen and (max-width: 820px) {
  width: 2rem;
 height: 2rem;
  }
`