type ThemeOptions = "light" | "dark"
export const setThemeAttribute = (theme: ThemeOptions): void => {
  document.querySelector("html")?.setAttribute("data-theme", theme)
}

export const getMediaQueryList = (): MediaQueryList | undefined => {
  return (
    (typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)")) ||
    undefined
  )
}

export const getOSTheme = (): ThemeOptions => {
  if (getMediaQueryList()?.matches) {
    return "light"
  }
  return "dark"
}

export const getSavedTheme = (): ThemeOptions | undefined => {
  const savedTheme =
    typeof window !== "undefined" &&
    window.localStorage &&
    localStorage.getItem("theme")
  if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
    return savedTheme
  }
}

export const loadTheme = (): ThemeOptions => {
  return getSavedTheme() || getOSTheme()
}
