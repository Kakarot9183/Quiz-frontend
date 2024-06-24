import Axios from 'axios';

const ApiClient = Axios.create(
    {
        baseURL : 'http://localhost:8080'
    }
);

export default ApiClient;