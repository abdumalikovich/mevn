import axios from 'axios'

export default () => {
	return axios.create({
		baseURL: `http://localhost:3000/api/`,
		crossDomain: true,
		// headers: {
		// 	'Content-Type': 'application/json'
		// }
	})
}
