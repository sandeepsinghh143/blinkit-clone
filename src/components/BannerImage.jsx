import React from 'react'
import "../styles/BannerImage.css"

const BannerImage = ({src,alt}) => {
  return (
    <div className="banner-image">
            <img src={src} alt={alt} />
    </div>
  )
}

export default BannerImage