import * as React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"

export const ProfileLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}): JSX.Element => (
  <OutboundLink
    className="underline hover:text-red-600"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </OutboundLink>
)
