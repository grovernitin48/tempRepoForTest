import React from 'react';
import Modal, { useModal } from '../Common/Modal';
import Button from '../Common/Button';

import AddNewUser from '../AddUser';

import styles from './index.scss';

function Header({ userSearchQuery, setUserSearchQuery, addNewUser, onLogout }) {
    const { isOpen, onOpen, onClose } = useModal();
    const handleOnChange = (e) => {
        setUserSearchQuery(e.target.value)
    }

    return (
        <div className={styles.container}>
            <div />
            <label>
                <input value={userSearchQuery} onChange={handleOnChange} className={styles.input} placeholder="Search user"/>
            </label>
            <div className={styles.btnContainer}>
                <Button onClick={onOpen} className={styles.btn}>Add User</Button>
                <Button onClick={onLogout} className={styles.btn}>Logout</Button>
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
