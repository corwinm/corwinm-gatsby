import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

type HeaderProps = {
  siteTitle: string
}

const StickyHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 900;
  background: ${(props) => props.theme.primary.translucentBg};
  margin-bottom: 1.45rem;
  box-shadow: 0px 2px 5px ${(props) => props.theme.primary.shadow};
`

const HeaderContents = styled.div`
  display: flex;
  padding: 1rem 1.0875rem;
`

const HeaderTitle = styled.span`
  font-size: 2rem;
  font-weight: bold;
  font-family: sans-serif;
  margin: 0 auto 0 0;
  @media (min-width: 768px) {
    margin: 0 auto;
  }
`

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.primary.link};
  text-decoration: none;
  line-height: 48px;
  &:hover {
    color: ${(props) => props.theme.primary.linkHover};
  }
`

const Header: React.FC<HeaderProps> = ({ siteTitle = ``, children }) => (
  <StickyHeader>
    <HeaderContents>
      <HeaderTitle>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </HeaderTitle>
      {children}
    </HeaderContents>
  </StickyHeader>
)

export default Header
