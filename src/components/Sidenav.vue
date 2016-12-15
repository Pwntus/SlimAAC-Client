<template>
	<div class="sidenav">
		<router-link to="/" class="logo"></router-link>
		<ul>
			<li><router-link to="/news"><ui-icon icon="format_align_left"></ui-icon>News</router-link></li>
			<li v-if="authLevel == 0"><router-link to="/account/register"><ui-icon icon="person_add"></ui-icon>Create Account</router-link></li>
			<li><router-link to="/downloads"><ui-icon icon="play_for_work"></ui-icon>Downloads</router-link></li>
			
			<li v-if="authLevel == 0"><router-link to="/account/login"><ui-icon icon="exit_to_app"></ui-icon>Login</router-link></li>
			<li v-if="authLevel > 0"><router-link to="/account/logout"><ui-icon icon="exit_to_app"></ui-icon>Logout</router-link></li>
					
			<li class="header"><p>Community</p></li>
			<li><a href="#"><ui-icon icon="timeline"></ui-icon>Online List</a></li>
			<li><a href="#"><ui-icon icon="public"></ui-icon>Activity</a></li>
			<li><a href="#"><ui-icon icon="star"></ui-icon>Highscores</a></li>
			
			<li class="header"><p>Guilds</p></li>
			<li><a href="#"><ui-icon icon="security"></ui-icon>Guild List</a></li>
			<li><a href="#"><ui-icon icon="whatshot"></ui-icon>Wars</a></li>
			
			<li class="header"><p>Market</p></li>
			<li><a href="#"><ui-icon icon="card_giftcard"></ui-icon>Shop</a></li>
			<li><a href="#"><ui-icon icon="account_balance"></ui-icon>House Auctions</a></li>
		</ul>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
	computed: mapGetters([
		'authLevel'
	])
}
</script>

<style scoped>
.sidenav {
	width: 250px;
	background: #333;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
} .logo {
	height: 60px;
	background: #086c9a;
	text-align: center;
	line-height: 60px;
	display: block;
} .logo:before {
	content: '';
	display: block;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 60px;
	z-index: 1;
	opacity: .5;
	/*background-image: url('../assets/logo.png');
	background-repeat: no-repeat;
	background-size: cover;*/
} .logo:after {
	content: 'Slim OT';
	color: #FFF;
	font-size: 20px;
	position: relative;
	z-index: 1;
} .logo:hover:before {
	opacity: 0.6;
} ul {
	padding-top: 20px;
	list-style-type: none;
} .header {
	padding: 25px 10px 0;
} .header:after {
	border-bottom: 1px solid rgba(255, 255, 255, .3);
	content: '';
	display: block;
	height: .4rem;
	transform: translateY(-1rem);
} .header p {
	padding-right: 10px;
	background: #333;
	color: rgba(255, 255, 255, .3);
	position: relative;
	display: inline-block;
	z-index: 99;
} li a, li a:active, li a:visited {
	color: rgba(255, 255, 255, .8);
} li a {
	padding: 10px 10px;
	display: block;
} .ui-icon {
	margin-right: 5px;
	line-height: 20px;
} li:not(.header) a:hover {
	color: #FFF;	
} li a.router-link-active {
	border-right: 4px solid #2a8fbd;
	color: #FFF;
	background: #292929;
}
</style>
