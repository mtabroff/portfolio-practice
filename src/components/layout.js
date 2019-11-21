/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Nav from "../components/nav"
import "./systems.css"


export default ({ children }) => (
  <div style={{ margin: `1rem auto`, maxWidth: 1200, padding: `0 1rem` }}>
    <Nav />
    {children}
  </div>
)
