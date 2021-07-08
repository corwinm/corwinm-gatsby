import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import SocialLinks from "./social-links"
import ThemeToggle from "./ThemeToggle"

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
    <div className="min-h-screen">
      <Header siteTitle={data.site.siteMetadata.title}>
        <ThemeToggle />
      </Header>
      <main className="my-0 mx-auto max-w-4xl px-4 pb-5 flex flex-col md:flex-row md:m-bottom-8">
        {children}
      </main>
      <footer className="sticky bottom-0 left-0 right-0 p-2 bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 md:fixed">
        <SocialLinks />
      </footer>
    </div>
  )
}

export default Layout
