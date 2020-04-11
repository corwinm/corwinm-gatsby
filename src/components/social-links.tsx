import React from "react"
import styled from "styled-components"
import { OutboundLink, trackCustomEvent } from "gatsby-plugin-google-analytics"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faGithubSquare,
  faTwitterSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons"

const SocialItem = styled.li`
  display: block;
`

const SocialLink = styled(OutboundLink)`
  color: ${(props) => props.theme.primary.link};
  &:hover {
    color: ${(props) => props.theme.primary.linkHover};
  }
`

const SocialButton = styled.button`
  color: ${(props) => props.theme.primary.link};
  &:hover {
    color: ${(props) => props.theme.primary.linkHover};
  }
  padding: 0;
  border: none;
  margin: 0;
  background: none;
  font-size: inherit;
  cursor: pointer;
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
const WebShareCategory = "Web Share Button"
const WebShareEvent = {
  category: WebShareCategory,
  action: "share",
}

const WebShareCancelEvent = {
  category: WebShareCategory,
  action: "cancel",
}

const share = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Corwin W. Marsh",
        text: "Check out Corwin's website!",
        url: window.location.href,
      })
      trackCustomEvent(WebShareEvent)
    } catch (error) {
      console.log("Error sharing:", error)
      trackCustomEvent(WebShareCancelEvent)
    }
  } else {
    window.location.href = `mailto:?subject=${encodeURIComponent(
      "Corwin W. Marsh website"
    )}&body=${encodeURIComponent(
      "Check out Corwin's website at: " + window.location.href
    )}`
  }
}

const SocialLinks: React.FC = () => {
  return (
    <SocialList>
      {socialItems.map((item) => (
        <SocialItem key={item.title}>
          <SocialLink
            href={item.link}
            title={item.title}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={item.icon} size="3x" />
          </SocialLink>
        </SocialItem>
      ))}
      <SocialItem>
        <SocialButton onClick={share}>
          <FontAwesomeIcon icon={faExternalLinkSquareAlt} size="3x" />
        </SocialButton>
      </SocialItem>
    </SocialList>
  )
}

export default SocialLinks
