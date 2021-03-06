import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import auth from './modules/auth'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	modules: {
		app,
		auth
	},
	strict: debug
})
