import axios from 'axios';

// axios.defaults.baseURL = 'https://api-chatapp-node.herokuapp.com/';
axios.defaults.baseURL = 'https://reactapp-ffbd8.firebaseio.com/';

axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
    request => {
        console.log(request);
        return request;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
});

axios.interceptors.response.use(
    response => {
        console.log(response);
        return response;
    }, 
    error => {
        console.log(error);
        return Promise.reject(error);
});
