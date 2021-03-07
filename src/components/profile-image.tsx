import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const CircleImg = styled(GatsbyImage)`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin: auto;
  @media (min-width: 768px) {
    height: 240px;
    width: 240px;
    min-width: 240px;
    margin: 1rem 0;
  }
`

const ProfileImage: React.FC = () => {
  const data = useStaticQuery(graphql`
    {
      engageImage: file(relativePath: { eq: "profile-engage.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 240
            tracedSVGOptions: { color: "#C80303" }
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
    }
  `)

  return (
    <CircleImg
      image={data.engageImage.childImageSharp.gatsbyImageData}
      alt="Corwin's profile image"
    />
  )
}

export default ProfileImage
