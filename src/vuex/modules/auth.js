import { AUTH, AUTH_FAILURE } from '../mutation-types'
import Vue from 'vue'

const state = {
	token: null,
	failure: null
}

const mutations = {
	[AUTH] (state, response) {
		state.token = response.token
	}
	
	[AUTH_FAILURE] (state, error) {
		state.failure = error
	}
}

export default {
	state,
	mutations
}
