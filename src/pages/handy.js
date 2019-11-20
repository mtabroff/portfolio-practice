import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/systems.css"

const HandyPage = () => (
    <Layout>
      <SEO title="Handy Case Study" />
      <h1>This is the starter for the case study</h1>
      <p>I am a curious soul, an honest worker, and a lover of making messy systems more understandable. I thrive in environments when I can collaborative with a team to solve meaningful problems.</p>
      <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
        <img src={require('../assets/mel-avatar.png')} alt="Melanie" />
  
      </div>
      <Link to="/">Return to home</Link>
    </Layout>
  )
  
  export default HandyPage
  