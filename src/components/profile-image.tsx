import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const CircleImg = styled(Img)`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin: auto;
  @media (min-width: 768px) {
    height: 240px;
    width: 240px;
    margin: 0 16px 0 0;
    float: left;
  }
`

const ProfileImage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      engageImage: file(relativePath: { eq: "profile-engage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 240, traceSVG: { color: "#C80303" }) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return <CircleImg fluid={data.engageImage.childImageSharp.fluid} />
}

export default ProfileImage
