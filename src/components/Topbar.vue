<template>
	<div class="topbar">
		<router-link to="/" class="logo">
			<img src="../assets/img/g49.png">
		</router-link>
	</div>
</template>

<script>
export default {
	data () {
		return {
			items: [
				{ text: 'My Characters', href: '#!' },
				{ text: 'Settings', href: '#!' },
				{ text: 'Logout', href: '#!' },
			]
		}
	}
}
</script>

<style scoped>
.topbar {
	height: 60px;
	background: #0277bd;
	color: #FFF;
	box-shadow: 0 0 5px rgba(0, 0, 0, .5);
	top: 0;
	left: 0;
	right: 0;
	position: fixed;
	z-index: 100;
} .logo {
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	font-size: 20px;
	display: block;
	margin: 0 auto;
} .logo img {
	width: 60px;
}

@media only screen and (min-width: 768px) {
	.icon {
		margin-left: 20px;
	}
}
</style>
