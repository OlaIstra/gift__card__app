import React from 'react'

import './Input.css'

function isInvalid({valid}) {
    return !valid
}

const Input = props => {

    const cls=[
        'input'
    ]
    
    const inputType = props.type || 'text';

    const maximumLength = props.maximumLength || '';

    const htmlFor = inputType;

    if (isInvalid(props)) {
        cls.push('invalid')        
    } 

    return (
        <div className={cls.join(' ')}>
            
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                maxLength={maximumLength}
                onChange={props.onChange}
            />  
            <label htmlFor={htmlFor}>{props.label}</label>
            {
                isInvalid(props)
                    ? <span>{props.errorMessage}</span>
                    : null
            } 

        </div>
    )
}

export default Input
