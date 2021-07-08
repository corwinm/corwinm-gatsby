import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import {
  loadTheme,
  setThemeAttribute,
  getMediaQueryList,
  getOSTheme,
} from "../utils/theme"

const ThemeToggle: React.FC = () => {
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
    <button
      onClick={toggleTheme}
      title={`Toggle ${theme} mode.`}
      className="w-8 hover:text-red-600 sm:h-8 sm:right-4 sm:top-6"
    >
      {typeof window === "undefined" ? (
        ""
      ) : theme === "dark" ? (
        <FontAwesomeIcon icon={faMoon} size="2x" />
      ) : (
        <FontAwesomeIcon icon={faSun} size="2x" />
      )}
    </button>
  )
}

export default ThemeToggle
