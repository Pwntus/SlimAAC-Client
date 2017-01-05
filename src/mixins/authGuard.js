export default authGuard = {
	watch: {
		this.$store.getters.authLevel: function (value) {
			if (authLevel > 0)
				alert('online, redirect')
		}
	}
}
