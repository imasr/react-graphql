import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api-chatapp-node.herokuapp.com/'
});


export default instance