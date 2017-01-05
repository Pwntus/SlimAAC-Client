import Vue from 'vue'

export default {
	requestToken (request) {
		return Vue.http.post('oauth', request)
			.then((response) => Promise.resolve(response.data))
			.catch((error) => Promise.reject(error))
	}
}
