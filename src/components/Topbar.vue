<template>
	<div class="topbar">
		<router-link to="/" class="logo">SlimOT</router-link>
		<span class="wrapper">
			<v-icon>search</v-icon>
			<input type="text" placeholder="Search">
		</span>
	</div>
</template>

<script>
export default {
	
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
	width: 250px;
	height: 60px;
	color: #FFF;
	text-align: center;
	line-height: 60px;
	font-size: 20px;
	float: left;
	display: block;
} .icon {
	margin-left: 20px;
	line-height: 60px;
	position: absolute;
} .wrapper {
	display: block;
	overflow: hidden;
} .wrapper input {
	width: 100%;
	padding: 0 10px 0 60px;
	background: transparent;
	border: 0;
	line-height: 60px;
	color: #FFF;
	font-size: 18px;
	display: inline-block;
} ::-webkit-input-placeholder {
	color: rgba(255, 255, 255, .5);
}
</style>
