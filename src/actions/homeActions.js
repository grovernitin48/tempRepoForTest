import baseURL from '../config/api'
import { HOME_ACTIONS_TYPE } from './actionTypes';

import { getUserData } from '../services';

const HomeActions = {
    setUsers: payload => ({ type: HOME_ACTIONS_TYPE.SET_USERS_DATA, payload }),
    addNewUser: payload => ({
        type: HOME_ACTIONS_TYPE.ADD_NEW_USER, payload,
    }),
    setNewUser: payload => (dispatch, getState) => {
      const { users } = getState().home;
      localStorage.setItem('users', JSON.stringify([...users, payload]));
      dispatch(HomeActions.addNewUser(payload));
    },
    fetchUsers: () => (dispatch) => {
        const users = JSON.parse(localStorage.getItem('users'));
        if(users) {
            dispatch(HomeActions.setUsers(users));
        } else {
            getUserData()
                .then(({ results }) => {
                    localStorage.setItem('users', JSON.stringify(results));
                    dispatch(HomeActions.setUsers(results));
                })
        }
    },
}

export {
    HomeActions,
}
