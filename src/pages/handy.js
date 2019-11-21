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

     {/* SECTION Problem Framing */}
      <h2>Problem Framing</h2>
      <p>Handy is an online two-sided marketplace for cleaning and home services. One of their biggest revenue drivers is recurring home cleaning.</p>
      <p>In order to off-set high costs to acqcuire new customers, the product and marketing team was tasked with the challenge of improving overall conversion. This meant coming up with creative ways to optimize the checkout flow to not only get more customers to come to the Handy website but also convert them at a higher rate.</p>
      <div>
        <img src={require('../handy-assets/problem-frame1.png')} alt="Reframing problem" />
        </div>
      

        <div>
        <img src={require('../handy-assets/problem-frame-whiteboard.png')} alt="Handy Team Brainstorm" />
        </div>


      {/* SECTION Research */}
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
          <div>
          <img src={require('../handy-assets/data-visual2.png')} alt="Data visualization" />
          </div>
          <div>
          <img src={require('../handy-assets/data-visual2-hover.png')} alt="Data visualization Insight" />
          </div>

          {/* --- insert dividing line using Grey color */}

           {/* Research 02: Customer Feedback */}
           <h4>Customer Feedback</h4>
           <p>Whenever I could, I would reach out to customers at different phases of the purchase funnel (pre to post-booking) to listen and understand their perspective. I also looked at CX tickets, read reviews on social channels, and regularly sent out email questionnaires to identify reasons customers either bounce or cancel their subscription early.</p>
           <p>Across each feedback channel, common pain points emerged. I looked at competitors to understand how they tackle some of these pain points and created an affinity map to help me visually patterns and opportunities.</p>

           <div>
             <img src={require('../handy-assets/affinity-map.png')} alt="Affinity Map to visualize patterns and opportunities" />
             <img src={require('../handy-assets/affinity-map-hover.png')} alt="Affinity Map to visualize patterns and opportunities" />
           </div>

             {/* Research 03: Usability Testing */}
             <h4>Usability Testing</h4>
             <p>Since I was working off existing designs, I wanted to evaluate the current checkout flow to uncover low-hanging fruit. Specifically, I wanted to learn: are there usability issues that may cause confusion or hesitation? Do users’ expectations for a cleaning service align with the information presented to them? Are there lingering questions left unanswered?</p>
             <p>Usability testing helped me better understand how users engage with the current checkout flow and identity some points of friction. </p>

                {/* --- insert 4 Insight Blocks */}

             {/* Research 04: Comp Analysis */}
             <h4></h4>
             <p>Throughout the initiative I took a bunch of competitor screenshots to help visualize the landscape. I looked at direct competitors as well as companies that sell subscriptions, like meal plans. One common pattern among competitors was multi-page checkout flows. </p>
             <p>I found this to be interesting given the increased likelihood that customers would abandon their purchase with every added page. The multi-page trend suggests a clear benefit: customers likely prefer to be taken step-by-step through a checkout experience, allowing them to carefully think through their purchase and confirm all necessary information. </p>

    </Layout>
  )
  
  export default HandyPage
  