import React, { useState, useEffect } from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import {
  loadTheme,
  setThemeAttribute,
  getMediaQueryList,
  getOSTheme,
} from "../utils/theme"

const baseTheme = {
  primary: {
    color: "var(--text-color-normal)",
    fontFamily: "Arial, Helvetica, sans-serif",
    background: "var(--background-color-normal)",
    translucentBg: "var(--background-color-translucent)",
    shadow: "#C80303",
    link: "var(--link-color-normal)",
    linkHover: "#C80303",
    maxWidth: "960px",
  },
}

const GlobalStyle = createGlobalStyle`
  html,
  html[data-theme='dark'] {
    --text-color-normal: #FFFFFF;
    --link-color-normal: #FFFFFF;
    --background-color-normal: #000000;
    --background-color-translucent: #000000D0;
  }

  @media (prefers-color-scheme: light) {
    html {
      --text-color-normal: ##4e4e4e;
      --link-color-normal: ##4e4e4e;
      --background-color-normal: #FFFFFF;
      --background-color-translucent: #FFFFFFD0;
    }
  }

  html[data-theme='light'] {
    --text-color-normal: ##4e4e4e;
    --link-color-normal: ##4e4e4e;
    --background-color-normal: #FFFFFF;
    --background-color-translucent: #FFFFFFD0;
  }

  body {
    margin: 0;
    color: ${baseTheme.primary.color};
    background-color: ${baseTheme.primary.background};
    font-family: ${baseTheme.primary.fontFamily};
  }
`

const Theme: React.FC & { Toggle: React.FC } = ({ children }) => {
  return (
    <ThemeProvider theme={baseTheme}>
      {children}
      <GlobalStyle theme={baseTheme} />
    </ThemeProvider>
  )
}

const ToggleButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  width: 2em;
  color: ${(props) => props.theme.primary.link};
  &:hover {
    color: ${(props) => props.theme.primary.linkHover};
  }
  @media (min-width: 400px) {
    position: absolute;
    right: 14px;
    top: 24px;
    height: 2rem;
    width: 2rem;
  }
`

const Toggle: React.FC = () => {
  const [theme, setTheme] = useState<"dark" | "light">(loadTheme)
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
  }
  useEffect(() => {
    localStorage.setItem("theme", theme)
    setThemeAttribute(theme)
  }, [theme])
  useEffect(() => {
    const media = getMediaQueryList()
    if (media) {
      if (media.addEventListener) {
        media.addEventListener("change", () => {
          const newTheme = getOSTheme()
          setTheme(newTheme)
        })
      } else if (media.addListener) {
        media.addListener(() => {
          const newTheme = getOSTheme()
          setTheme(newTheme)
        })
      }
    }
  }, [])
  return (
    <ToggleButton onClick={toggleTheme} title={`Toggle ${theme} mode.`}>
      {typeof window === "undefined" ? (
        ""
      ) : theme === "dark" ? (
        <FontAwesomeIcon icon={faMoon} size="2x" />
      ) : (
        <FontAwesomeIcon icon={faSun} size="2x" />
      )}
    </ToggleButton>
  )
}

Theme.Toggle = Toggle

export default Theme
