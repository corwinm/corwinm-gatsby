import React from "react"

const initialTheme = `
  (function() {
    var theme = localStorage.getItem("theme")
    var matches = window.matchMedia("(prefers-color-scheme: light)")
    theme = theme || ((matches && matches.matches) ? "light" : "dark")
    document.querySelector("html").setAttribute("data-theme", theme)
  }())
`

type HTMLProps = {
  htmlAttributes: React.DetailedHTMLProps<
    React.HtmlHTMLAttributes<HTMLHtmlElement>,
    HTMLHtmlElement
  >
  headComponents: React.ReactNode
  bodyAttributes: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLBodyElement>,
    HTMLBodyElement
  >
  preBodyComponents: React.ReactNode
  body: string
  postBodyComponents: React.ReactNode
}

export default function HTML(props: HTMLProps): JSX.Element {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <script
          dangerouslySetInnerHTML={{
            __html: initialTheme,
          }}
        />
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}
