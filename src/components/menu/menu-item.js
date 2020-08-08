import React from 'react'
import {
    withRouter
} from 'react-router-dom'

const Menuitem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    const styleImg = {
        backgroundImage: `url(${imageUrl})`
    }
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image" style={styleImg} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="sub-title">Shop Now</span>
            </div>
        </div>
    )
}

export default withRouter(Menuitem)
