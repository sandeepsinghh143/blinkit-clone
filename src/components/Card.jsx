import React from 'react'
import "../styles/Card.css"
import { TfiTimer } from 'react-icons/tfi'

const Card = ({src,alt,title,weight,price}) => {
  return (
    <div className="card">
        <div className="item-image">
          <img src={src} alt={alt} />
        </div>
        <div className="item-details">
          <div className="timer">
          <TfiTimer/> 10 MINS
          </div>
          <div className="item-name">{title}</div>
          <div className="item-weight">{weight}</div>
          <div className="item-price">
            <div className="price">&#8377;{price}</div>
            <div className="add-btn">ADD</div>
          </div>
        </div>
    </div>
  )
}

export default Card