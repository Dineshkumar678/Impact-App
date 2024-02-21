import React from 'react'
import './Footer.css'

function Footer() {
  const date=new Date();
  return (
    <footer>
      <div className='footer-container' >
        <div className='footer-sec1'>
        <div className='impactlogo'>
        <img  src="/images/App icon with logo 2.png" />
        </div>
        <div className='playbutton'>
          <img src="/images/play button.png"  />
        </div>
      {/* <a href="https://play.google.com/store/apps/details?id=com.sharesmile.share&hl=en"><img src="" /></a>
      <a href="https://apps.apple.com/in/app/impact-fitness-charity/id1143265464"><img src="" /></a> */}
        </div>
      <div className='content' >
        <div className='footer-sec2'>
        <ul>
          <p className='headings' >Company</p>
          <a href='#' target='_blank' ><li><p>About</p></li></a>
          <a href='#' target='_blank' ><li><p>Careers</p></li></a>
          <a href='#' target='_blank' ><li><p>Blog</p></li></a>
          <a href='#' target='_blank' ><li><p>Privacy Policy</p></li></a>
        </ul>
      </div>
      <div className='footer-sec3'>
        <ul>
          <p className='headings' >Offerings</p>
          <a href='#' target='_blank' ><li><p>The Impact League</p></li></a>
          <a href='#' target='_blank' ><li><p>Cause Branding</p></li></a>
          <a href='#' target='_blank' ><li><p>Marketing Brands</p></li></a>
        </ul>
      </div>
      </div>
      <div className='footer-sec4'>
        <ul>
          <p className='headings' >Stay Connected</p>
          <p>contact@impactrun.com</p>
          <div className='socialmedia'>
          <a href="https://www.instagram.com/impact.app/?hl=en" target="_blank"><img className='socialmedialogo' src="/images/instagram.png" /></a>
          <a href="https://www.facebook.com/impactapp01/" target="_blank"><img className='socialmedialogo' src="/images/facebook.png" /></a>
          <a href="https://twitter.com/Impact_App_" target="_blank"><img className='socialmedialogo' src="/images/twitter.png" /></a>
          <a href="https://www.linkedin.com/company/impact-employee-engagement" target="_blank"><img className='socialmedialogo' src="/images/linkedin.png" /></a>
          </div>
        </ul>
        </div>
      </div>
      
      
      <div className='footerlast' >
        <p> &#169; {date.getFullYear()} Green Freedom Pvt Ltd. All rights reserved.</p>
      </div>
      
    </footer>
  )
}

export default Footer
