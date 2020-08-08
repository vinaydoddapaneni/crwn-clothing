import React from 'react'
import { IC } from './index'

const Viewcollection = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((item, idx) => idx < 4).map(({ id, ...otherItemProps }) => (
                    <IC key={id} {...otherItemProps} />
                ))}
            </div>
        </div>
    )
}

export default Viewcollection
