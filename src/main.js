import Vue from 'vue'
import VeeValidate from 'vee-validate';
import Vuetify from 'vuetify'
import router from './router'
import store from './store'
import App from './components/App'

import 'vuetify/dist/vuetify.min.css'
import './assets/css/global.css'

Vue.use(VeeValidate)
Vue.use(Vuetify)

router.beforeEach((to, from, next) => {
	let user = JSON.parse(window.localStorage.getItem('user'))
	let authLevel = user !== null
	
	if (authLevel < to.meta.authLevel
		|| (authLevel > 0 && to.meta.authLevel < 0))
		next({path: '/'})
	next()
})

const app = new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
