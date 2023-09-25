import React from 'react'
import "../styles/Footer.css"
import {BsHeartFill,BsFacebook, BsInstagram, BsTwitter,BsLinkedin} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {FaSquareThreads} from "react-icons/fa6"

const Footer = () => {
  return (
    <footer>
      <div className="links-section">
      <div className="useful-links">
        <p>Useful Links</p>
        <div className="useful-flex">
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Press</li>
          <li>Lead</li>
          <li>Value</li>
        </ul>

        <ul>
          <li>Privacy</li>
          <li>Terms</li>
          <li>FAQs</li>
          <li>Security</li>
          <li>Mobile</li>
          <li>Contact</li>
        </ul>

        <ul>
          <li>Partner</li>
          <li>Express</li>
          <li>Seller</li>
          <li>Spotlight</li>
          <li>Warehouse</li>
          <li>Deliver</li>
        </ul>
        </div>
      </div>
      <div className="categories-links">
        <p>Categories     <span>see all</span></p>
        <div className="categories-flex">
          <ul>
            <li>Vegetables & Fruits</li>
            <li>Vegetables & Fruits</li>
            <li>Bakery & Biscuits</li>
            <li>Dry Fruits, Masala & Oil</li>
            <li>Paan Corner</li>
            <li>Pharma & Wellness</li>
            <li>Personal Care</li>
            <li>Beauty & Cosmetics</li>
            <li>Toys & Games</li>
          </ul>

          <ul>
            <li>Dairy & Breakfast</li>
            <li>Instant & Frozen Food</li>
            <li>Sweet Tooth</li>
            <li>Sauces & Spreads</li>
            <li>Organic & Premium</li>
            <li>Cleaning Essentials</li>
            <li>Ice Creams & Frozen Desserts</li>
            <li>Magazines</li>
            <li>Print Store</li>
          </ul>

          <ul>
            <li>Munchies</li>
            <li>Tea, Coffee & Health Drinks</li>
            <li>Atta, Rice & Dal</li>
            <li>Chicken, Meat & Fish</li>
            <li>Baby Care</li>
            <li>Home & Office</li>
            <li>Pet Care</li>
            <li>Books</li>
          </ul>
        </div>
      </div>
      </div>
      <div className="footer-icons">
      <div className='credit'>© Blink Commerce Private Limited (formerly known as Grofers India Private Limited), 2016-2023</div>
      <div className='download'>Download App <img src="https://blinkit.com/d61019073b700ca49d22.png" alt=""  width={92} height={30}/><img src="https://blinkit.com/8ed033800ea38f24c4f0.png" alt="google-icon" width={92} height={30}/></div>
      <div className='social-icons'><BsFacebook/><AiFillTwitterCircle className='twitter'/><BsInstagram/><BsLinkedin/><FaSquareThreads/></div>
      </div>
      <p>“Blinkit” is owned & managed by "Blink Commerce Private Limited" (formerly known as Grofers India Private Limited) and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</p>
        <div className="self-credit">Made with <BsHeartFill className='heart'/> by Sandeep Singh</div>
    </footer>
  )
}

export default Footer