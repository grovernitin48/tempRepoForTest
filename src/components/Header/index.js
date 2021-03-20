import React, { useState } from 'react';
import Modal, { useModal } from '../Common/Modal';

import AddNewUser from '../AddUser';

import styles from './index.scss';

function Header({ userSearchQuery, setUserSearchQuery, addNewUser }) {
    const { isOpen, onOpen, onClose } = useModal();
    const handleOnChange = (e) => {
        setUserSearchQuery(e.target.value)
    }

    return (
        <div className={styles.container}>
            <div />
            <label className={styles.inputLabel}>
                <input value={userSearchQuery} onChange={handleOnChange} className={styles.input} placeholder="Search user"/>
            </label>
            <div>
                <button onClick={onOpen}>Add User</button>
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <AddNewUser handleAddUser={(payload) => {
                    addNewUser(payload);
                    onClose();

                }} />
            </Modal>
        </div>
    )
}

export default Header;
