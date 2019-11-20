import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/systems.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>I’m Melanie,<br></br>a Product Designer</h1>
    <p>I am a curious soul, an honest worker, and a lover of making messy systems more understandable. I thrive in environments when I can collaborative with a team to solve meaningful problems.</p>
    <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
      <img src={require('../assets/mel-avatar.png')} alt="Melanie" />

    </div>
    <Link to="/handy">Visit case study</Link>
  </Layout>
)

export default IndexPage
