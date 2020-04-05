import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

type HeaderProps = {
  siteTitle: string
}

const StickyHeader = styled.header`
  position: sticky;
  top: 0;
  background: white;
  margin-bottom: 1.45rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
`

const HeaderContents = styled.div`
  margin: 0 auto;
  padding: 1rem 1.0875rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const HeaderTitle = styled.h1`
  margin: 0%;
`

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  line-height: 48px;
  margin: 10px;
`
const Spacer = styled.div`
  flex: 1 auto;
`
const Nav = styled.nav`
  height: 48px;
`

const Header: React.FC<HeaderProps> = ({ siteTitle = `` }) => (
  <StickyHeader>
    <HeaderContents>
      <HeaderTitle>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </HeaderTitle>
      <Spacer />
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        {/* <StyledLink to="/about">About</StyledLink> */}
      </Nav>
    </HeaderContents>
  </StickyHeader>
)

export default Header
