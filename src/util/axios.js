import axios from 'axios'

export default axios.create({
   baseURL: (API_PORT === 80)
      ? `http://${API_HOST}`
      : `http://${API_HOST}:${API_PORT}`,
})
