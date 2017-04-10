import axios from 'axios';

export default axios.create({
   baseURL: `http://${API_HOST}:${API_PORT}`,
});
