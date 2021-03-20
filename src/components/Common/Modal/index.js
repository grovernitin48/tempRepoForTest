import React, { useState } from 'react';

import Button from '../Button';
import styles from './index.scss';

function Modal({ children, isOpen, onClose }) {
    if(isOpen) {
        return (
            <div className={styles.container}>
               <div className={styles.btnContainer}>
                   <Button onClick={onClose}>
                       <span className={styles.btn}>close</span>
                   </Button>
               </div>
                <div className={styles.children}>
                    {children}
                </div>
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
