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
		this.context.$emit('ui-snackbar::create', {
			message: response.body.message,
			action: '',
			actionColor: 'accent',
			duration: 5000
		})
	}
}
