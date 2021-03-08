import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import SocialLinks from "./social-links"
import Theme from "./theme"

const Container = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  background: ${(props) => props.theme.primary.translucentBg};
  @media screen and (min-width: 768px) {
    position: fixed;
  }
`

const MainContainer = styled.main`
  margin: 0 auto;
  max-width: ${(props) => props.theme.primary.maxWidth};
  padding: 0 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Theme>
      <Container>
        <Header siteTitle={data.site.siteMetadata.title}>
          <Theme.Toggle />
        </Header>
        <MainContainer>{children}</MainContainer>
        <Footer>
          <SocialLinks />
        </Footer>
      </Container>
    </Theme>
  )
}

export default Layout
