import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store/store'
import Keen from 'keen-ui'

import {routes} from './routes'
import App from './components/App'

import 'keen-ui/dist/keen-ui.css'
import './assets/css/global.css'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Keen)

Vue.http.options.root = 'http://localhost:8000/api/v1';

const router = new VueRouter({
	mode: 'history',
	routes
})

const app = new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
