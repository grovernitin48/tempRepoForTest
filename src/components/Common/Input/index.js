import React, { useState, useEffect } from 'react';

function Input({ onChange, value, placeholder, label, type="text" }) {
    return (
        <label>
            <span>{label}</span>
            <input onChange={onChange} value={value} placeholder={placeholder} type={type} />
        </label>
    )
}

function useInput({ validation, type } = { validation: true, type: 'text' }) {
    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(!validation);

    function onChange(e) {
        setInputValue(e.target.value);
    }

    useEffect(() => {
        if(validation) {
            setIsValid(!!inputValue.length);
        }
    }, [validation, inputValue, isValid, type])

    return {
        value: inputValue,
        onChange,
        isValid,
        type,
    }
}

export {
    Input as default,
    useInput,
};

