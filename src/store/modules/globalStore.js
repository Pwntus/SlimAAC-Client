const state = {
	pageLoading: false
}

const mutations = {
	SET_PAGE_LOADING (state, value) {
		state.pageLoading = value
	}
}

const actions = {
	setPageLoading ({commit}, value) {
		commit('SET_PAGE_LOADING', value)
	}
}

const getters = {
	isPageLoading: state => {
		return state.pageLoading
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}
