/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const onClientEntry = async () => {
  if (typeof IntersectionObserver === "undefined") {
    await import("intersection-observer")
    console.log("IntersectionObserver polyfilled ;)")
  }
}
