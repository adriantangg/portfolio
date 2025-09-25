// gatsby-node.js
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
pathPrefix: "/portfolio"
  gatsby build --prefix-paths
  "predeploy": "gatsby build --prefix-paths"
  "deploy": "gh-pages -d public"
  npm run deploy
}
