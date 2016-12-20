import Vue from 'vue'
import Vuetify from 'vuetify'
import router from './router'
import store from './store'
import App from './components/App'

import 'vuetify/dist/vuetify.min.css'
import './assets/css/global.css'

Vue.use(Vuetify)

const app = new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
