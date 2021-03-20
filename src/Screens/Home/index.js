import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import UserCard from '../../components/UserCard';

import styles from './index.scss';

function Home({ fetchUsers, home: { users }, setNewUser, isAuthenticated, history, logout }) {
    console.log({ isAuthenticated })
    useEffect(() => {
        if(!isAuthenticated) {
            history.push('/');
        }
    }, [isAuthenticated])
    const [filteredResult, setFilteredResult] = useState(users);
    const [userSearchQuery, setUserSearchQuery] = useState('');

    useEffect(() => {
        fetchUsers();
    }, [])

    useEffect(() => {
        if(userSearchQuery && userSearchQuery.length > 0) {
            const filteredRes = users.filter(({ user }) => {
                const name = `${user.name.first} ${user.name.last}`;
                return name.toLowerCase().includes(userSearchQuery.toLowerCase())
            });
            setFilteredResult(filteredRes)
        } else {
            if(!userSearchQuery || userSearchQuery.length < 3) {
                setFilteredResult(users)
            }
        }
    }, [users, userSearchQuery])

    return (
        <div className={styles.container}>
            <Header userSearchQuery={userSearchQuery} setUserSearchQuery={setUserSearchQuery} addNewUser={setNewUser} onLogout={logout} />
            <div className={styles.usersList}>
                {filteredResult.map(({ user }) => (
                    <UserCard user={user} />
                ))}
            </div>
        </div>
    )
}

export default Home;
