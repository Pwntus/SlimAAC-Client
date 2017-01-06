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
		'pageLoading'
	]),
	mounted () {
		this.$vuetify.init()
		
		let user = JSON.parse(window.localStorage.getItem('user'))
		if (user !== null)
			this.$store.dispatch('setUser', user)
	}
}
</script>
