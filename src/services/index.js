import axios from 'axios';

export function getUserData() {
    return axios.get('https://randomuser.me/api/0.8/?results=20')
        .then(res => res.data)
        .catch(err => new Error(err));
}
