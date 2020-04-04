import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialLinks from '../components/social-links';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to my personal site!</p>
    <SocialLinks />
  </Layout>
)

export default IndexPage
