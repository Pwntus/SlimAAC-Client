import Vue from 'vue'
import Vuex from 'vuex'

import globalStore from './modules/globalStore'
import userStore from './modules/userStore'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	modules: {
		globalStore,
		userStore
	},
	strict: debug
})
