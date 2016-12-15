<template></template>
<script>
export default {
	created () {
		this.$store.dispatch('removeAuthUser')
		this.$router.replace({path: '/'})
	}
}
</script>
