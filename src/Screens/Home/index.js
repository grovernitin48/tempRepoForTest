import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';

import styles from './index.scss';

function Home({ fetchUsers, home: { users }, setNewUser, isAuthenticated, history }) {
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
        if(userSearchQuery && userSearchQuery.length > 2) {
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
            <Header userSearchQuery={userSearchQuery} setUserSearchQuery={setUserSearchQuery} addNewUser={setNewUser} />
            <div className={styles.usersList}>
                {filteredResult.map(({ user }) => (
                    <div key={user.registered}>
                        <img src={user?.picture?.thumbnail}/>
                        <div >
                            <div >
                                {user.username}
                                <span >
                                {user.gender === 'female' ? 'Female' : 'Male'}
                            </span>
                            </div>
                            <div>
                                <h2 style={{textTransform: 'capitalize'}}>{user.name.title} {user.name.first} {user.name.last}</h2>
                                <p>{user.email}</p>
                            </div>
                            <div>
                        <span>
                        {user.phone}
                        </span>
                                <span style={{textTransform: 'uppercase'}}>
                        {user?.location?.state}
                        </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;
