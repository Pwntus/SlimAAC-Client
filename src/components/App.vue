<template>
	<div id="app">
		<topbar></topbar>
		<sidenav></sidenav>
		<router-view></router-view>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import Sidenav from './Sidenav'
import Topbar from './Topbar'

export default {
	name: 'App',
	components: {
		Sidenav,
		Topbar
	},
	computed: mapGetters([
		'authLevel',
		'isPageLoading'
	]),
	beforeRouteEnter (to, from, next) {
		if (this.authLevel < to.meta.authLevel
			|| (this.authLevel > 0 && to.meta.authLevel < 0))
			next({path: '/'})
		console.log(this.authLevel)
		// Need fixin
		next()
	},
	mounted () {
		this.$vuetify.init()
		const authUser = JSON.parse(window.localStorage.getItem('authUser'))
		if (authUser !== null)
			this.$store.dispatch('setAuthUser', authUser)
	}
}
</script>

<style></style>
