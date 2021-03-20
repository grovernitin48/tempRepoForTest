import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { LoginActions } from '../../actions/loginActions';

import styles from './index.scss';

function Login({ setUserName, setPassword, authenticateUser, login: loginData, history }) {
    const { userName, password, isAuthenticated } = loginData;

    useEffect(() => {
        if(isAuthenticated) {
            history.push('/home')
        }
    }, [isAuthenticated])

    const handleUserName = (e) => {
        setUserName(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleAuthenticateUser = (e) => {
        e.preventDefault();
        authenticateUser();
    }

    return (
        <div className={styles.container}>
            <div className="ui centered grid container">
                <div className="nine wide column">
                    <div className="ui fluid card">
                        <div className="content">
                            <form className="ui form" method="POST">
                                <div className="field">
                                        <label>User</label>
                                    <input type="text" name="user" placeholder="User" onChange={handleUserName} value={userName} />
                                </div>
                                <div className="field">
                                    <label>Password</label>
                                    <input type="password" name="pass" placeholder="Password" onChange={handlePassword} value={password} />
                                </div>
                                <button className="ui primary labeled icon button" onClick={handleAuthenticateUser}>
                                    <i className="unlock alternate icon"></i>
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { users: state.users }
}

export default connect(
    mapStateToProps,
    LoginActions,
)(Login);

