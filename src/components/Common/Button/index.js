import React from 'react';
import styles from './index.scss'

function Button({ children, onClick, className }) {
    return (
        <button className={`${styles.btn} ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;
