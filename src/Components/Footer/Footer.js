import React from 'react'
import './footer.css'
import LIN from '../../Assets/socials/linkedin-app.png'
import Insta from '../../Assets/socials/insta.png'
import FB from '../../Assets/socials/facebook.png'
import LINE from "../../Assets/LINE.png"
export default function Footer() {
  return (
    <footer className='main'>
      <div className="container-footer">
        <div className="handles"><h2 className="footer-heading">SDE Prep</h2>
          <span><img className="lin" src={LIN} alt="" /></span>
          <span><img className="insta" src={Insta} alt="" /></span>
          <span><img className="fb" src={FB} alt="" /></span>
 
          <p className='newsletter'><strong>join our newsletter for daily updates!</strong></p>
          <div className="input-group">
            <input type="text" className="form-control" aria-label="Text input with checkbox" /> <span><button type="button" className="mx-2 btn btn-primary">Subscribe</button></span>
            <img className="end-line mt-3" src={LINE} alt="" />
            <div className="rights">
              <h6 className="reserved text-white">© The Clever World. All rights reserved.</h6>
            </div>
          </div>
        </div>
        <div className="sidebar-1">
        <ul>
          <li>Blogs</li>
          <li>Interview Preparation</li>
          <li>Interview Experience</li>
          <li>Write for Us</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="sidebar-2">
        <h3>Latest Resources</h3>
        <ul>
          <li>Lorem, ipsum</li>
          <li>Lorem, ipsum</li>
          <li>Lorem, ipsum</li>
          <li>Lorem, ipsum</li>
          <li>Lorem, ipsum</li>
        </ul>
      </div>
      </div>
 
    </footer>
  )
}