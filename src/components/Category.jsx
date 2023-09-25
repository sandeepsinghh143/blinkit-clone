import React from 'react'
import "../styles/Category.css"

const Category = ({src, alt}) => {
  return (
    <div className="category">
        <img src={src} alt={alt} />
    </div>
  )
}

export default Category