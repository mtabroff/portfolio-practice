import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/systems.css"

/**
{const ProjectPreview = ({ slug, title, description, imageData }) => (
    <div className="project-preview">
      <Link to={'/${slug}/'}>
        <Image fluid={imageData} alt={title} />
        <h2>{}</h2>
        <p>{}</p>
        <p>
        <Link to {'/${slug}/'}>View this project &rarr;</Link>
        </p>
      </Link>
    </div>
  )
  
  export default ProjectPreview; 