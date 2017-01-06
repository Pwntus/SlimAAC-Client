import Vue from 'vue'

export default {
	getNews () {
		return Vue.http.get('news')
			.then((response) => Promise.resolve(response.data))
			.catch((error) => Promise.reject(error))
	}
}
