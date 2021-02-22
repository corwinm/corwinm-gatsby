import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProfileImage from "../components/profile-image"
import { ProfileLink } from "../components/profile-link"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProfileImage />
    <section>
      <h1>Software Engineer. Husband. Father.</h1>
      <p>Hi! I'm Corwin. Welcome to my personal site!</p>
      <p>
        I am a{" "}
        <ProfileLink href="https://www.slalombuild.com/">
          Slalom Build
        </ProfileLink>{" "}
        Software Engineering Architect in Seattle.
      </p>
      <p>
        I like to try new technologies and apply that learning to aid my
        professional life. I'm currently learning:
      </p>
      <ul>
        <li>
          <ProfileLink href="https://single-spa.js.org/">
            Single-Spa
          </ProfileLink>
        </li>
        <li>
          <ProfileLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility">
            Web Accessibility (a11y)
          </ProfileLink>
        </li>
        <li>
          <ProfileLink href="https://www.gatsbyjs.com/">Gatsby</ProfileLink>
        </li>
        <li>
          <ProfileLink href="https://react-query.tanstack.com/">
            React Query
          </ProfileLink>
        </li>
      </ul>
      <p>
        I spend most of my free time enjoying time with my family, but I have
        been known to play a game or two.
      </p>
      <p>Feel free to check out my links below to get to know me better.</p>
    </section>
  </Layout>
)

export default IndexPage
