import { HOME_ACTIONS_TYPE } from '../../actions/actionTypes';

const initialState = {
    users: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case HOME_ACTIONS_TYPE.SET_USERS_DATA:
            return {
                ...state,
                users: [...state.users, ...action.payload],
            }
        case HOME_ACTIONS_TYPE.ADD_NEW_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
            }
        default:
            return state;
    }
}
