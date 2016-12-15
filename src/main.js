import Vue from 'vue'

import router from './router'
import store from './store'
import Keen from 'keen-ui'
import App from './components/App'

import 'keen-ui/dist/keen-ui.css'
import './assets/css/global.css'

Vue.use(Keen)

const app = new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
