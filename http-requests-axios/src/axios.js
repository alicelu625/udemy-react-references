import axios from 'axios';

//create new instance of axios (copy of axios object)
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

//can overwrite some of the settings for places where we use instance instead of default object
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;