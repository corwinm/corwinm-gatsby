import * as React from "react"
import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-gtag"

export const StyledProfileLink = styled(OutboundLink)`
  color: ${(props) => props.theme.primary.link};
  &:hover {
    color: ${(props) => props.theme.primary.linkHover};
  }
`

export const ProfileLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <StyledProfileLink href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </StyledProfileLink>
)
