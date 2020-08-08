import React from 'react'

const Itemcollection = ({ id, name, price, imageUrl }) => {
    const styleImg = {
        backgroundImage: `url(${imageUrl})`
    }
    return (
        <div className="collection-item">
            <div className="image" style={styleImg} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}

export default Itemcollection
