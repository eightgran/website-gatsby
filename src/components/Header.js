import * as React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
 <Navbar>
   Navbar
 </Navbar>
)

export default Header

const Navbar = styled.nav`
  background: black;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`