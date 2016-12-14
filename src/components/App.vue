<template>
	<div id="app">
		<sidenav></sidenav>
		<topbar></topbar>
		<ui-progress-linear
			:show="globalStore.pageLoading"
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
import {mapState} from 'vuex'
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
	computed: mapState({
		globalStore: state => state.globalStore
	}),
	created () {
		const userObj = JSON.parse(window.localStorage.getItem('authUser'))
		this.$store.dispatch('setUserObject', userObj)
	}
}
</script>

<style>

</style>
