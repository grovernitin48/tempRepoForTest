import baseURL from '../config/api'

export const fetchUsers = () => async dispatch => {
    const response = await baseURL.get();
    
    dispatch({ type: 'FETCH_ALL_USERS', payload: response.data.results })
};
