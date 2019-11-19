import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>I’m Melanie,<br></br>a Product Designer</h1>
    <p>I am a curious soul, an honest worker, and a lover of making messy systems more understandable. I thrive in environments when I can collaborative with a team to solve meaningful problems.</p>
    <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
