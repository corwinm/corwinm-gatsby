/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type MetaArray = React.DetailedHTMLProps<
  React.MetaHTMLAttributes<HTMLMetaElement>,
  HTMLMetaElement
>[]

type SEOProps = {
  description?: string
  lang?: string
  meta?: MetaArray
  title: string
}

function SEO({
  description = "",
  lang = `en`,
  meta = [],
  title,
}: SEOProps): JSX.Element {
  const { site, engageImage } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
            description
            author
            twitter
            url
          }
        }
        engageImage: file(relativePath: { eq: "profile-engage.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={(
        [
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:image`,
            content:
              site.siteMetadata.url +
              engageImage.childImageSharp.gatsbyImageData.src,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.twitter,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
          {
            name: `twitter:image`,
            content:
              site.siteMetadata.url +
              engageImage.childImageSharp.gatsbyImageData.src,
          },
        ] as MetaArray
      ).concat(meta)}
    />
  )
}

export default SEO
