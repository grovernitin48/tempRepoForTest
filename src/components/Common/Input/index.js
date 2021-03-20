import React, { useState, useEffect } from 'react';

import styles from './index.scss';

function Input({ onChange, value, placeholder, label, type="text", className="" }) {
    return (
        <label className={`${styles.inputContainer} ${className}`}>
            <span className={styles.label}>{label}</span>
            <input onChange={onChange} value={value} placeholder={placeholder} type={type} className={styles.input} />
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

