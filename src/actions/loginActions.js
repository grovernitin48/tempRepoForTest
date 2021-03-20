import { LOGIN_ACTIONS_TYPE } from './actionTypes';

const CREDENTIALS = {
    AUTH_USER: 'admin',
    AUTH_PASSWORD: 'password'
}

const LoginActions = {
    setUserName: (payload) => ({ type: LOGIN_ACTIONS_TYPE.SET_USERNAME, payload }),
    setPassword: (payload) => ({ type: LOGIN_ACTIONS_TYPE.SET_PASSWORD, payload }),
    logout: () => ({ type: LOGIN_ACTIONS_TYPE.LOG_OUT_USER }),
    setAuthState: payload => ({ type: LOGIN_ACTIONS_TYPE.SET_USER_AUTHENTICATED, payload }),
    authenticateUser: () => (dispatch, getState) => {
        const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));
        if(isAuthenticated) {
            dispatch(LoginActions.setAuthState(true));
        } else {
            const {userName, password} = getState().login;
            if (userName === CREDENTIALS.AUTH_USER && password === CREDENTIALS.AUTH_PASSWORD) {
                // TODO add auth serviceLayer
                dispatch(LoginActions.setAuthState(true));
                localStorage.setItem('isAuthenticated', JSON.stringify(true));
            }
        }
    },
    logoutUser: () => (dispatch) => {
        localStorage.setItem('isAuthenticated', JSON.stringify(false));
        dispatch(LoginActions.logout());
    },
}

export {
    LoginActions,
}
