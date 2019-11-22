const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/melanietabroff/portfolio-practice/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/melanietabroff/portfolio-practice/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/melanietabroff/portfolio-practice/src/pages/about.js"))),
  "component---src-pages-handy-js": hot(preferDefault(require("/Users/melanietabroff/portfolio-practice/src/pages/handy.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/melanietabroff/portfolio-practice/src/pages/index.js")))
}

