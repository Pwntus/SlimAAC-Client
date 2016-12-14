<template>
	<div class="topbar">
		<ui-icon class="icon" icon="search"></ui-icon>
		<span class="wrapper">
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
	background: #2a8fbd;
	color: #FFF;
	box-shadow: 0 0 5px rgba(0, 0, 0, .5);
} .icon {
	margin-left: 30px;
	line-height: 60px;
	float: left;
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
