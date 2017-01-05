<template></template>
<script>
export default {
	created () {
		this.$store.dispatch('removeUser')
		this.$router.go(-1)
	}
}
</script>
