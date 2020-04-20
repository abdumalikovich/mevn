/* eslint-disable no-console */
import api from './api'

export default {
	getData(data) {
		return api().post('getData', data)
	},
}
