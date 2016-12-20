import Vue from 'vue'
import VueResource from 'vue-resource'

const {SCHEME, HOSTNAME} =
	process.env.NODE_ENV == 'production'
	? {SCHEME: 'https', HOSTNAME: window.location.hostname}
	: {SCHEME: 'http' , HOSTNAME: 'localhost:8000'}

Vue.use(VueResource)
Vue.http.options.root = `${SCHEME}://${HOSTNAME}/api/v1`;

export default {
	context: null,
	method: null,
	route: null,
	payload: null,
	
	action (context, method, route, payload = null) {
		this.context = context
		this.method = method
		this.route = route
		this.payload = payload
	},
	commit (callback) {
		this.context.$http[this.method](this.route, this.payload)
			.then(response => {
				callback(response)
			}, response => {
				this.error(response)
				callback(response)
			})
	},
	error (response) {
		
	}
}
