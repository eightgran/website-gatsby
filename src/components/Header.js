import * as React from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import { NavigationData } from "../data/NavigationData"
import { MdMenu } from "react-icons/md"
import { useLocation } from "@reach/router"
import { useState } from "react"
import { Button } from "./Button"
import LogoSmall from "./LogoSmall"

const Header = () => {
  const [location, setLocation] = useState(useLocation())
  const [showMobileDrawer, setShowMobileDrawer] = useState(false)
  function getIsActiveRoute(item) {
    const isActive = location.pathname === item.link
    return isActive
  }

  function onClickBars() {
    setShowMobileDrawer(!showMobileDrawer)
  }

  return (
    <Container>
      <HeaderLink letterSpacing="true" active="true" to="/">
        <LogoSmall />
      </HeaderLink>
      <MobileDrawer 
      hidden={!showMobileDrawer}
      showmobiledrawer={+showMobileDrawer}>
        {NavigationData.headerLinks.map((item, index) => {
          if (item.showOnHeader) {
            return (
              <DrawerLink
                to={item.link}
                key={index}
                active={+getIsActiveRoute(item)}
                onClick={()=>setShowMobileDrawer(false)}
              >
                {item.title}
                
              </DrawerLink>
            )
          }
        })}
      </MobileDrawer>
      <Bars onClick={onClickBars} showmobiledrawer={+showMobileDrawer} />
      <NavMenu>
        {NavigationData.headerLinks.map((item, index) => {
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
          <Button
            round="true"
            to={NavigationData.headerButtonLink.link}
            target="_blank"
          >
            <ButtonIcon />
            {NavigationData.headerButtonLink.label}
          </Button>
        </HeaderButton>
      </NavMenu>
    </Container>
  )
}

export default Header

const Container = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
  box-shadow: 0px 2px 8px -1px rgba(0, 0, 0, 0.125);

  @media screen and (max-width: 768px) {
    flex-direction: row-reverse;
  }
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

const drawerAnimation = keyframes`
  0% {
    background: rgba(0,0,0,0.0);
  }

  50% {
    background: rgba(0,0,0,0.15);
  }

  100% {
    background: rgba(0,0,0,0.3);
  }
`

const MobileDrawer = styled.div`
  display: none;
  flex-direction: column;
  background: rgba(0,0,0,0.3);
  animation: ${drawerAnimation} 150ms linear;
  height: 50vh;
  width: 100vw;
  position: absolute;
  z-index: 1;
  /* Decrease the top margin into negative range to compasate for box shadow y-offset */
  margin-top: -8px;
  padding-top: 5rem;
  padding-bottom: 2rem;
  padding-left: 1.5rem;
  padding-right: 2rem; 
  backdrop-filter: blur(4px);
  transform: ${({ showmobiledrawer }) =>
    showmobiledrawer ? "translate(0, 0)" : "translate(0, -100%)"};

  @media screen and (max-width: 768px) {
    display: ${({ showmobiledrawer }) => (showmobiledrawer ? "flex" : "none")};
  }
`

const DrawerLink = styled(Link)`
  color: ${({ active }) => (active ? "#fff" : "#5C5963")};
  display: flex;
  align-items: flex-start;
  text-decoration: none;
  padding: 2rem 1rem;
  cursor: pointer;
  font-weight: 700;
  letter-spacing: ${props => (props.letterSpacing ? "0.06rem" : "0.04rem")};
  transition: 0.3s !important;
  text-align: right;
  width: 100%;
  &:hover {
    color: ${({ active }) => {
      if (!active) {
        return active ? "#5C5963" : "#fff"
      } else {
        return "#fff"
      }
    }};
  }
`

const Bars = styled(MdMenu)`
  display: none;
  color: ${({ showmobiledrawer }) => (showmobiledrawer ? "#fff" : "#ababab")};
  z-index: 1;
  @media screen and (max-width: 768px) {
    display: block;
    top: 0;
    right: 0;
    /* position: relative;*/
  
   transform: translate(75%, 50%); 
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
  }
`

const ButtonIcon = styled(NavigationData.headerButtonLink.icon)`
  margin-right: 0.5rem;
  font-size: 1rem;
  text-align: left;
`

const HeaderLink = styled(Link)`
  color: ${({ active }) => (active ? "#5C5963" : "#ababab")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 700;
  letter-spacing: ${props => (props.letterSpacing ? "0.06rem" : "0.04rem")};
  transition: 0.3s !important;

  &:hover {
    color: ${({ active }) => {
      if (!active) {
        return active ? "#ababab" : "#5C5963"
      } else {
        return "#5C5963"
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
