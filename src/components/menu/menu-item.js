import React from 'react'

const Menuitem = ({ title, imageUrl, size }) => {
    const styleImg = {
        backgroundImage: `url(${imageUrl})`
    }
    return (
        <div className={`${size} menu-item`}>
            <div className="background-image" style={styleImg} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="sub-title">Shop Now</span>
            </div>
        </div>
    )
}

export default Menuitem
