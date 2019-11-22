import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/systems.css"

const HandyPage = () => (
    <Layout>
      <SEO title="Handy Case Study" />
      <Link to="/">Return to home</Link>

<main-container>
      <h1>Designing for Growth</h1>
 
      <div class= 'cover-photo'>
      <img src={require('../handy-assets/handy-cover.png')} alt="Handy Case Study" />
    </div>

{/* SECTION PROBLEM FRAMING */}
      <h2>Problem Framing</h2>
        <p>Handy is an online two-sided marketplace for cleaning and home services. One of their biggest revenue drivers is recurring home cleaning.</p>
        <p>In order to off-set high costs to acqcuire new customers, the product and marketing team was tasked with the challenge of improving overall conversion. This meant coming up with creative ways to optimize the checkout flow to not only get more customers to come to the Handy website but also convert them at a higher rate.</p>
        <div>
        <img src={require('../handy-assets/problem-frame1.png')} alt="Reframing problem" />
        </div>
        <div>
        <img src={require('../handy-assets/problem-frame-whiteboard.png')} alt="Handy Team Brainstorm" />
        </div>


{/* SECTION RESEARCH */}
      <h2>Research & Ideation</h2>
        <p>As a new team member, it was important that I understood the cleaning landscape. Where do customers shop around for cleaning services? What are their mindsets when they come to Handy’s website? What are they most excited about and what’s deterring them from making a booking?</p>
        <p>My research was ongoing and can be summed up by four phases:</p>
          
      {/* ----->insert text links------- */}
   

      {/* Research 01: Data */}
      <h4>Data Analysis</h4>
         <p>Most customers come to Handy’s website from a google search, which lands them on what we call the “When” Page. After entering basic job details, customers click ‘Get a Quote’ which takes them to the “Payment” page. Here, the price of the service is revealed for the first time.</p>
            <div>
            <img src={require('../handy-assets/optimal-path.png')} alt="Handy Optimal Customer Path" />
            </div>

       {/* Research 01: Data Drop-off */}
        <div className="caption">Understanding Drop off</div>

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
      <h4>Comp Analysis</h4>
        <p>Throughout the initiative I took a bunch of competitor screenshots to help visualize the landscape. I looked at direct competitors as well as companies that sell subscriptions, like meal plans. One common pattern among competitors was multi-page checkout flows. </p>
        <p>I found this to be interesting given the increased likelihood that customers would abandon their purchase with every added page. The multi-page trend suggests a clear benefit: customers likely prefer to be taken step-by-step through a checkout experience, allowing them to carefully think through their purchase and confirm all necessary information. </p>
              
               {/* --- insert grey container/background */}

               <div>
                <img src={require('../handy-assets/comp-screenshots.png')} alt="Comp Screenshots" />
               </div>
               <div>
                <img src={require('../handy-assets/comp-screenshots-hover.png')} alt="Comp Screenshots" />
               </div>

{/* SECTION TESTING */}
      <h2>What We Tested</h2>
        <p>Both Product and Marketing created a roadmap of experiments which we tracked on a weekly basis. We performed a bunch of A/B tests aimed at optimizing the payment experience, from simple UI changes to a new user flow. </p>
        <p>Below I summarize a few of those tests.</p>

            <div>
              <img src={require('../handy-assets/tests-assets/test-whiteboard.png')} alt="Whiteboarding solutions" />
            </div>

      <caption>UI Optimization</caption>
      <h4>A/B Test UI Changes</h4>
        <p>The team conducted a bunch of UI A/B tests, from urgency badges to small changes in form copy. The goal was to think of ways to make people feel better about their purchase decision using visual cues. Each small UI change aimed at improving trust and reducing risk.</p>

                <div>
                <img src={require('../handy-assets/tests-assets/call-out1.png')} alt="UI test" />
                </div>
                <div>
                <img src={require('../handy-assets/tests-assets/call-out2.png')} alt="UI test" />
                </div>
                <div>
                <img src={require('../handy-assets/tests-assets/call-out3.png')} alt="UI test" />
                </div>
                <div>
                <img src={require('../handy-assets/tests-assets/call-out4.png')} alt="UI test" />
                </div>

      {/* ---- insert 3 A/B UI tests*/}

      {/* ---- insert Purple/Blue background divider*/}
      <div style={{background: '4252D8'}}/>
      
      <h3>What if customers didn’t have to pay?</h3>
        <p>Simple UI changes can only move the needle so much. What if we could create a shopping experience where customers could reserve a cleaning appointment without paying? </p>
   


      <caption>New User Flow</caption>
      <h4>Book Now, Pay Later</h4>
         <p>We wanted to test a world where customers are given the option to book now and pay later to learn just how customers behave when the risk associated with making a booking is eliminated. While we expected more customers to book, we didn’t know whether more customers would actually follow through or if the majority would simply reserve and flake.</p>
         <p>Under this new framework, customers would be told that their booking would be cancelled if payment isn't received at least 24 hours before their scheduled appointment.</p>
              <div>
                 <img src={require('../handy-assets/tests-assets/pab-flow.png')} alt="Pay After Book Flow" />
              </div>

         {/* ---- insert 2 A/B screens for PAB*/}

        { /* ---- insert dividing line*/}

{/* SECTION Backlog */}

       <h2>On The Backlog...</h2>
       <h3>Repositioning plans as packs</h3>

      <caption>The Idea</caption>
         <p>Customers would be offered the ability to purchase a fixed amount of cleanings, which they could use at any time. Cleaning packs wouldn’t expire and customers wouldn’t need to worry about hidden fees. Meanwhile, the business would lock in guaranteed revenue from pack customers comparable to that of subscription customers. </p>
                
       <caption>Some Background</caption>
         <p>A few years ago the company removed its one-time cleaning offering because it was no longer sustainable given the high cost to acquire new customers. As such, one of the biggest challenges our team faced was encouraging new customers to sign up for a subscription service without offering them a trial period. </p>
         <p>Most<bold>>new customers expect a more flexible option.</bold> The team brainstormed ways we could reposition subscription packs to be more flexible while also ensuring we achieved our revenue goals.</p>

        {/* ---- insert Packs marketing preview asset*/}

        <h3>How would we test?</h3>

         {/* Test 1: Packs as standalone */}

        <h3>Test 1: Packs as Standalone </h3>
        <p>One approach would be to create a simple landing page using a templated tool (requiring no development work). The landing page would drive customers to a Shopify page on the Handy website where they could purchase cleaning coupons that correspond to the pack’s value. This would allow us to measure interest via click rate and conversion via payment.</p>

             <div>
              <img src={require('../handy-assets/tests-assets/packs-flow.png')} alt="Cleaning Packs Flow" />
            </div>

        {/* Test 2: Packs on payment page */}

        <h3>Test 2: Packs on Payment Page</h3>
          <p>The other –albeit more risky– approach would be to offer packs alongside subscriptions on the Payment page. This would require more development work but would more directly test packs as a viable alternative to subscription plans.</p>
          <p>The large price increase when the user selects “I don’t want a recurring cleaning” could serve as an anchor, rendering the subscription plan offering more attractive. </p>

                  <div>
                    <img src={require('../handy-assets/tests-assets/packs-vs-term.gif')} alt="Cleaning Packs GIF" />
                  </div>

{/* SECTION Learnings */}
        <caption>Key learnings from tests</caption>
          <p><bold>No single test can prove or disprove hypothesis.</bold>Most of the tests were determined as inconclusive. This didn’t mean that our hypothesis was wrong but that we need more data / more testing to understand. </p>
          <p><bold>Take customer feedback with a grain of salt.</bold>What people say and do are not always aligned and it’s helpful to test strategies and assumptions even when you think they’re not likely to succeed.</p>
          <p><bold>Think like a psychologist.</bold>Understanding the customer mindset is absolutely necessary to improve business growth, and mindsets can change from day-to-day.</p>

           {/* --> insert quote */}

        <caption>Closing Thoughts</caption>
          <p>Designing for growth is really a psychology game. We were challenged to put ourselves in the shoes of the customer and come up with creative ways to influence their purchase behavior. However, to truly impact change we would need to solve the chicken-and-egg problem: create a system where professionals on the platform are incentivized to deliver the best cleaning experience for customers, which, in turn, would translate to more happy customers and more bookings.</p>
  
  </main-container>                 
    </Layout>
  )
  
  export default HandyPage
  