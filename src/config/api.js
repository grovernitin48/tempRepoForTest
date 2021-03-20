import axios from 'axios';

export default axios.create({
    baseURL: 'https://randomuser.me/api/0.8/?results=20'
});
