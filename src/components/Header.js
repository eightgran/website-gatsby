import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { NavigationData } from "../data/NavigationData"
import { MdMenu } from "react-icons/md"
import {GoMarkGithub} from "react-icons/go"
import { useLocation } from "@reach/router"
import { useState } from "react"
import { Button } from "./Button"

const Header = () => {
  const [location, setLocation] = useState(useLocation())

  function getIsActiveRoute(item) {
    const isActive = location.pathname === item.link
    return isActive
  }

  return (
    <Container>
      <HeaderLink letterSpacing="true" active="true" to="/">
        eightgran
      </HeaderLink>
      <Bars />
      <NavMenu>
        {NavigationData.map((item, index) => {
          if (item.showOnHeader) {
            return (
              <HeaderLink
                to={item.link}
                key={index}
                // `styled-components` does not accept boolean
                // values for conditional rendering (only nums
                // and strings).
                //
                // The return value of this method must be
                // converted into a numeric value using the
                // unary plus operator ('+').
                active={+getIsActiveRoute(item)}
              >
                {item.title}
              </HeaderLink>
            )
          }
        })}
        <HeaderButton>
          <Button black="true" round="true" to="/projects">
            <GitHubLogo/> GITHUB
          </Button>
        </HeaderButton>
      </NavMenu>
    </Container>
  )
}

export default Header

const Container = styled.nav`
  background: #303030;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.25);
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  /* margin-right: -48px; */
  font-size: 0.9rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Bars = styled(MdMenu)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const GitHubLogo = styled(GoMarkGithub)`
  margin-right: 0.5rem;
  font-size: 1rem;
  text-align: left;
`

const HeaderLink = styled(Link)`
  color: ${({ active }) => (active ? "#dddddd" : "#797979")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: ${props => (props.active ? 800 : 600)};
  letter-spacing: ${props => (props.letterSpacing ? "0.06rem" : "0.04rem")};
  transition: 0.3s !important;

  &:hover {
    color: ${({ active }) => {
      if (!active) {
        return active ? "#797979" : "#dddddd"
      } else {
        return "#dddddd"
      }
    }};
  }
`
const HeaderButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
