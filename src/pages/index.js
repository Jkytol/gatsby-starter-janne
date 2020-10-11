import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Developer" keywords={[`Janne`, `Kytola`, `jannekytola`, `KytöläJanne`, `parasSeo`, `JanneSovelluskehitys`, `UnityPelinkehitys`]} />
    <LandingBio />

  
  <div id="myDIV">
  <p>Looking to get in touch?</p>
 <form name="Contact Form" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="Contact Form"  />
      <div>
        <label></label>
        <input type="email" name="email" placeholder="Email" />
      </div>
      <div>
        <label></label>
        <textarea name="message" placeholder="Message" />
      </div>
      <button type="submit">Send</button></form>
</div>
<div id="myDIVi"></div>
<div id="myDIVii"><a href="https://paypal.me/kahviraha/5"><img src="https://raw.githubusercontent.com/Jkytol/JKgatsby/master/src/images/cGIF.gif" title="donateButton" /></a></div>

  </Layout>
)

export default IndexPage
