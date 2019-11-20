import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/systems.css"

const HandyPage = () => (
    <Layout>
      <SEO title="Handy Case Study" />
      <Link to="/">Return to home</Link>
      <h1>Designing for Growth</h1>
      <div>
      <img src={require('../handy-assets/handy-cover.png')} alt="Handy Case Study" />
    </div>

     {/* Problem Framing */}
      <h2>Problem Framing</h2>
      <p>Handy is an online two-sided marketplace for cleaning and home services. One of their biggest revenue drivers is recurring home cleaning.</p>
      <p>In order to off-set high costs to acqcuire new customers, the product and marketing team was tasked with the challenge of improving overall conversion. This meant coming up with creative ways to optimize the checkout flow to not only get more customers to come to the Handy website but also convert them at a higher rate.</p>
      <div>
        <img src={require('../handy-assets/problem-frame1.png')} alt="Reframing problem" />
        </div>
      

        <div>
        <img src={require('../handy-assets/problem-frame-whiteboard.png')} alt="Handy Team Brainstorm" />
        </div>


      {/* Research */}
      <h2>Research & Ideation</h2>
      <p>As a new team member, it was important that I understood the cleaning landscape. Where are customers shopping around for cleaning services? What are their mindsets when they come to Handy’s website? What are they most excited about and what’s deterring them from making a booking?</p>
      <p>My research was ongoing and can be summed up by four phases:</p>
      <div>
            {/* ----->insert text links------- */}
      </div>

       {/* Research 01: Data */}
       <h4>Data Analysis</h4>
        <p>Most customers come to Handy’s website from a google search, which lands them on what we call the “When” Page. After entering basic job details, customers click ‘Get a Quote’ which takes them to the “Payment” page. Here, the price of the service is revealed for the first time.</p>
        <div>
        <img src={require('../handy-assets/optimal-path.png')} alt="Handy Optimal Customer Path" />
        </div>

        {/* Research 01: Data Drop-off */}
        <caption>Understanding Drop off</caption>
        <p>As you can imagine, most first-time customers who land on the Payment page bounce (especially on mobile web). This could be for various reasons, like wanting to shop around for a better deal or not having a credit card on hand.</p>
        <p>Identifying drop off points and contextualizing the data with qualitative user research (e.g. customer calls)  helped us identify opportunities to engage customers more effectively through each phase of the purchase funnel.</p>
        
        {/* Data Call Outs */}
        <h1>70%</h1>
        <p><bold>of users drop off Payment Page</bold>before completing a booking.<br></br>Drop-off is even greater on mobile web.</p>
        <div>
        <img src={require('../handy-assets/data-visual1.png')} alt="Data visualization" />
        </div>
        <div>
        <img src={require('../handy-assets/data-visual1-hover.png')} alt="Data visualization Insight" />
        </div>

    </Layout>
  )
  
  export default HandyPage
  