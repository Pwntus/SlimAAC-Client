import Vue from 'vue'
import * as type from '../mutation-types'
import authService from '../../services/auth'

const state = {
	user: null
}

const mutations = {
	[type.SET_USER] (state, user) {
		state.user = user
		window.localStorage.setItem('user', JSON.stringify(user))
		Vue.http.headers.common.Authorization = 'Bearer ' + user.token
	},
	[type.REMOVE_USER] (state) {
		state.user = null
		window.localStorage.removeItem('user')
		Vue.http.headers.common.Authorization = ''
	}
}

const actions = {
	auth ({commit}, payload) {
		authService.requestToken(payload)
			.then((response) => commit(type.SET_USER, response))
			.catch((error) => commit(type.HTTP_ERROR, error))
	},
	setUser ({commit}, user) {
		commit(type.SET_USER, user)
	},
	removeUser ({commit}) {
		commit(type.REMOVE_USER)
	}
}

const getters = {
	authLevel: state => {
		if (state.user !== null && state.user.token)
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
