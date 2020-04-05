import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

export const ProfileLink = styled.a`
  color: ${(props) => props.theme.primary.link};
  &:hover {
    color: ${(props) => props.theme.primary.linkHover};
  }
`

const ImageWrapper = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
  @media (min-width: 768px) {
    height: 240px;
    width: 240px;
    margin: 0 16px 0 0;
    float: left;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ImageWrapper>
      <Image />
    </ImageWrapper>
    <h1>Software Engineer. Husband. Father.</h1>
    <p>Hi! I'm Corwin. Welcome to my personal site!</p>
    <p>
      I am a Solution Architect for{" "}
      <ProfileLink href="https://www.slalombuild.com/">
        Slalom Build Seattle
      </ProfileLink>
      , husband of Carly, and father of Mayme.
    </p>
    <p>
      I like to try new technologies for building websites and apps and bring
      what I learn to aid my professional life.
    </p>
    <p>
      I spend most of my free time enjoying time with my family, but I have been
      know to play a game or two on my Switch.
    </p>
    <p>Feel free to check out my links below to get to know me better.</p>
  </Layout>
)

export default IndexPage
