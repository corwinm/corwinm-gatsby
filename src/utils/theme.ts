export const setThemeAttribute = (theme: "dark" | "light") => {
  document.querySelector("html")?.setAttribute("data-theme", theme)
}

export const getMediaQueryList = () => {
  return (
    (typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)")) ||
    undefined
  )
}

export const getOSTheme = () => {
  if (getMediaQueryList()?.matches) {
    return "light"
  }
  return "dark"
}

export const getSavedTheme = () => {
  const savedTheme =
    typeof window !== "undefined" &&
    window.localStorage &&
    localStorage.getItem("theme")
  if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
    return savedTheme
  }
}

export const loadTheme = () => {
  return getSavedTheme() || getOSTheme()
}
