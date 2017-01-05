import * as type from '../mutation-types'

const state = {
	pageLoading: false,
	httpError: null
}

const mutations = {
	[type.SET_PAGE_LOADING] (state, value) {
		state.pageLoading = value
	},
	[type.HTTP_ERROR] (state, error) {
		state.httpError = error.body.message
	},
	[type.REMOVE_HTTP_ERROR] (state) {
		state.httpError = null
	}
}

const actions = {
	setPageLoading ({commit}, value) {
		commit(type.SET_PAGE_LOADING, value)
	},
	removeHttpError ({commit}) {
		commit(type.REMOVE_HTTP_ERROR)
	}
}

const getters = {
	pageLoading: state => {
		return state.pageLoading
	},
	httpError: state => {
		return state.httpError
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}
