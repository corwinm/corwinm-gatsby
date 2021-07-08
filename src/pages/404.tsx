import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = (): JSX.Element => (
  <Layout>
    <SEO title="404: Not found" />
    <section>
      <h1 className="text-2xl font-bold mt-4 mb-6">NOT FOUND</h1>
      <p className="my-2">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
    </section>
  </Layout>
)

export default NotFoundPage
