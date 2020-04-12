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
      guestImage: file(relativePath: { eq: "profile-guest.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 240, traceSVG: { color: "#C80303" }) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      thinkingImage: file(relativePath: { eq: "profile-thinking.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 240, traceSVG: { color: "#C80303" }) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      weddingImage: file(relativePath: { eq: "profile-wedding.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 240, traceSVG: { color: "#C80303" }) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  const [selected, setSelected] = React.useState<null | number>(null)
  const update = (index: number) => {
    if (selected) {
      setSelected(null)
    } else {
      setSelected(index)
    }
  }
  return (
    <>
      <div onClick={() => update(1)} hidden={!!selected && selected !== 1}>
        <CircleImg fluid={data.engageImage.childImageSharp.fluid} />
      </div>
      <div onClick={() => update(2)} hidden={!!selected && selected !== 2}>
        <CircleImg fluid={data.guestImage.childImageSharp.fluid} />
      </div>
      <div onClick={() => update(3)} hidden={!!selected && selected !== 3}>
        <CircleImg fluid={data.thinkingImage.childImageSharp.fluid} />
      </div>
      <div onClick={() => update(4)} hidden={!!selected && selected !== 4}>
        <CircleImg fluid={data.weddingImage.childImageSharp.fluid} />
      </div>
    </>
  )
}

export default ProfileImage
