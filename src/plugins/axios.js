// axios
import axios from 'axios'

const axiosInstance = axios.create({
	// baseURL: '',
})

axiosInstance.interceptors.request.use(
	config => config,
	error => Promise.reject(error),
)

export default axiosInstance
