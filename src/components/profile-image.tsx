import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const ProfileImage: React.FC = () => {
  const data = useStaticQuery(graphql`
    {
      engageImage: file(relativePath: { eq: "profile-engage.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 224
            tracedSVGOptions: { color: "#C80303" }
            placeholder: TRACED_SVG
            layout: CONSTRAINED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  return (
    <GatsbyImage
      className="h-24 w-24 rounded-full m-auto z-0 md:h-56 md:w-56 md:min-w-max md:mt-4 md:mx-4"
      image={data.engageImage.childImageSharp.gatsbyImageData}
      alt="Corwin's profile image"
    />
  )
}

export default ProfileImage
