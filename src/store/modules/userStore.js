import Vue from 'vue'

const state = {
	authUser: null
}

const mutations = {
	SET_AUTH_USER (state, authUser) {
		state.authUser = authUser
		window.localStorage.setItem('authUser', JSON.stringify(authUser))
		Vue.http.headers.common.Authorization = 'Bearer ' + authUser.token
	},
	REMOVE_AUTH_USER (state) {
		state.authUser = null
		window.localStorage.removeItem('authUser')
		Vue.http.headers.common.Authorization = ''
	}
}

const actions = {
	setAuthUser ({commit}, authUser) {
		commit('SET_AUTH_USER', authUser)
	},
	removeAuthUser ({commit}) {
		commit('REMOVE_AUTH_USER')
	},
}

const getters = {
	authLevel: state => {
		if (state.authUser !== null && state.authUser.token)
			return 1
		else
			return 0
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}
