import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const ImageWrapper = styled(Img)`
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

const ProfileImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile-with-mayme.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 240, traceSVG: { color: "#C80303" }) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return <ImageWrapper imgStyle={{height: 'auto'}} fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default ProfileImage
