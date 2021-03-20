import React from 'react';

import styles from './index.scss';


function UserCard({ user }) {
    return (
        <div className={styles.container}>
            <img src={user?.picture?.medium} className={styles.image} alt="No image found for user"/>
            <div className={styles.userInfo}>
                <div>
                    <h2 className={styles.header}>{user.name.title} {user.name.first} {user.name.last}</h2>
                    <span className={styles.userName}>{user.username}</span>
                </div>
                <div>
                    <p>{user.email}</p>
                    <span className={styles.gender}>
                        {user.gender}
                    </span>
                </div>
                <div>
                    <span>
                        {user.phone}
                    </span>
                    <span className={styles.state}>
                        {user?.location?.state}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default UserCard;
