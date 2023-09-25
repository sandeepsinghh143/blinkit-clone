import React from 'react'
import "../styles/BannerSection.css"
import Banner from "../assets/banner/banner.jpg"

const BannerSection = () => {
  return (
    <section className="banner">
        <img src={Banner} alt="banner" />
    </section>
  )
}

export default BannerSection