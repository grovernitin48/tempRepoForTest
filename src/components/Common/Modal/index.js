import React, { useState } from 'react';
import styles from './index.scss';

function Modal({ children, isOpen, onClose }) {
    if(isOpen) {
        return (
            <div className={styles.container}>
               <div className={styles.btnContainer}>
                   <button onClick={onClose} className={styles.btn}>close</button>
               </div>
                {children}
            </div>
        )
    }
    return null;
}

function useModal() {
    const [isOpen, setIsOpen] = useState(false);
    function onClose() {
        setIsOpen(false);
    }
    function onOpen() {
        setIsOpen(true)
    }
    return {
        isOpen,
        onClose,
        onOpen,
    }
}

export {
    Modal as default,
    useModal,
}
