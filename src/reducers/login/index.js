import { LOGIN_ACTIONS_TYPE } from '../../actions/actionTypes';

const initialState = {
    userName: '',
    password: '',
    isAuthenticated: false,
}

export default (state= initialState, action) => {
    switch (action.type) {
        case LOGIN_ACTIONS_TYPE.SET_PASSWORD:
            return {
                ...state,
                password: action.payload,
            }
        case LOGIN_ACTIONS_TYPE.SET_USERNAME:
            return {
                ...state,
                userName: action.payload,
            }
        case LOGIN_ACTIONS_TYPE.SET_USER_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: action.payload,
            };
        case LOGIN_ACTIONS_TYPE.LOG_OUT_USER:
            return {
                ...initialState
            }
        default:
            return state;
    }
};
