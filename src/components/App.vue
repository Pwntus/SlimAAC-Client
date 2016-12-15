<template>
	<div id="app">
		<sidenav></sidenav>
		<topbar></topbar>
		<ui-progress-linear
			:show="isPageLoading"
		></ui-progress-linear>
		<router-view></router-view>
		<ui-snackbar
			:show="st"
			message="FOOBAR"
			:autoHide="true"
		></ui-snackbar>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import Sidenav from './Sidenav'
import Topbar from './Topbar'

export default {
	components: {
		Sidenav,
		Topbar
	},
	data () {
		return {
			st: true
		}
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
	created () {
		const authUser = JSON.parse(window.localStorage.getItem('authUser'))
		if (authUser !== null)
			this.$store.dispatch('setAuthUser', authUser)
	}
}
</script>

<style>

</style>
