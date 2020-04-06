import React from "react"
import {
  ThemeProvider,
  createGlobalStyle,
} from "styled-components"

const baseTheme = {
  primary: {
    color: "#FFFFFF",
    fontFamily: "Arial, Helvetica, sans-serif",
    background: "#000000",
    shadow: "#C80303",
    link: "#FFFFFF",
    linkHover: "#C80303",
    maxWidth: "960px",
  },
  alt: {
    color: "#000",
    background: "#fff",
  },
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: ${baseTheme.primary.color};
    background: ${baseTheme.primary.background};
    font-family: ${baseTheme.primary.fontFamily};
  }
`

const Theme: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={baseTheme}>
      {children}
      <GlobalStyle theme={baseTheme} />
    </ThemeProvider>
  )
}

export default Theme
