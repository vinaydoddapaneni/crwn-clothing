import React from 'react'

const Input = ({ getChange, label, ...otherProps }) => {
    return (
        <div className="group">
            <input className="form-input" onChange={getChange} {...otherProps} />
            {label ? (
                <label
                    className={`${otherProps.value.lenght ? 'shrink' : ''} form-input-label`}
                >
                    {label}
                </label>
            ) : null}
        </div>
    )
}

export default Input
