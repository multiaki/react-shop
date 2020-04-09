import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size}) => {
  return (
    <div className={`${size} menu-item`}
    style={{backgroundImage: `url(${imageUrl})`}}
    >
      <div className="content">
        <div className="title">{title}</div>
        <div className="subtitle">SHOP NOW</div>
      </div>
    </div>
  )
}

export default MenuItem
