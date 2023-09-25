import React from 'react'
import "../styles/Slides.css"
import Electronic from "../assets/slides/electronic-banner.jpg";
import Mango from "../assets/slides/mango-banner.jpg";
import Morning from "../assets/slides/morning-banner.jpg";
import Pet from "../assets/slides/Pet-Care_banner.jpg";
import Staples from "../assets/slides/staples-banner.jpg";
import Summer from "../assets/slides/summer-banner.jpg";
import BannerImage from './BannerImage';

const Slides = () => {
  return (
    <section className='slides'>
        <BannerImage src={Electronic} alt="electronic" />
        <BannerImage src={Mango} alt="mango" />
        <BannerImage src={Morning} alt="morning" />
        <BannerImage src={Pet} alt="pet" />
        <BannerImage src={Staples} alt="staples" />
        <BannerImage src={Summer} alt="summer" />
    </section>
  )
}

export default Slides