import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faGithubSquare,
  faTwitterSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons"

const SocialItem = styled.li`
  display: block;
`

const SocialLink = styled.a`
  color: ${props => props.theme.primary.link};
  &:hover {
    color: ${props => props.theme.primary.linkHover};
  }
`
const SocialList = styled.ul`
  margin: auto;
  padding: 0;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 16em;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 20em;
  }
`

const socialItems = [
  {
    link: `https://www.linkedin.com/in/corwin-marsh/`,
    title: `LinkedIn`,
    icon: faLinkedin,
  },
  {
    link: `https://github.com/corwinm`,
    title: `GitHub`,
    icon: faGithubSquare,
  },
  {
    link: `https://twitter.com/CorwinMarsh`,
    title: `Twitter`,
    icon: faTwitterSquare,
  },
  {
    link: `https://www.facebook.com/CorwinMarsh`,
    title: `Facebook`,
    icon: faFacebookSquare,
  },
]

const SocialLinks: React.FC = () => {
  return (
    <SocialList>
      {socialItems.map((item) => (
        <SocialItem>
          <SocialLink href={item.link} title={item.title} rel="noopener">
            <FontAwesomeIcon icon={item.icon} size="4x" />
          </SocialLink>
        </SocialItem>
      ))}
    </SocialList>
  )
}

export default SocialLinks
