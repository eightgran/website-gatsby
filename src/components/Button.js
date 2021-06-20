import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: ${({ black }) => (black ? "#000000" : "#545454")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: ${({ black }) => (black ? "#c1c1c1" : "#fff")};
  font-size: ${({ big }) => (big ? "14px" : "12px")};
  font-weight: 700;
  letter-spacing: 0.05rem;
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ round }) => (round ? "50px" : "none")};

  &:hover {
    background:
    ${({ black }) => (black ?  "#545454" :  "#000000")};
    transform: translateY(-2px);
  }
`
