import React from 'react'

const Menuitem = ({ title, imageUrl,size }) => {
    const styleImg = {
        backgroundImage: `url(${imageUrl})`
    }
    return (
        <div style={styleImg} className={`${size} menu-item`}>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="sub-title">Shop Now</span>
            </div>
        </div>
    )
}

export default Menuitem
