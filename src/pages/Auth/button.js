import React from 'react'

const Button = ({ children, ...otherProps }) => {
    return (
        <button className="custom-button" {...otherProps}>
            {children}
        </button>
    )
}

export default Button
