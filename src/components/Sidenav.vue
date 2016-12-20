<template>
	<div class="sidenav">
		<ul>
			<li><router-link to="/news"><v-icon>format_align_left</v-icon>News</router-link></li>
			<li v-if="authLevel == 0"><router-link to="/account/register"><v-icon>person_add</v-icon>Create Account</router-link></li>
			<li><router-link to="/downloads"><v-icon>play_for_work</v-icon>Downloads</router-link></li>
			
			<li v-if="authLevel == 0"><router-link to="/account/login"><v-icon>exit_to_app</v-icon>Login</router-link></li>
			<li v-if="authLevel > 0"><router-link to="/account/logout"><v-icon>exit_to_app</v-icon>Logout</router-link></li>
					
			<li class="header"><p>Community</p></li>
			<li><a href="#"><v-icon>timeline</v-icon>Online List</a></li>
			<li><a href="#"><v-icon>public</v-icon>Activity</a></li>
			<li><a href="#"><v-icon>star</v-icon>Highscores</a></li>
			
			<li class="header"><p>Guilds</p></li>
			<li><a href="#"><v-icon>security</v-icon>Guild List</a></li>
			<li><a href="#"><v-icon>whatshot</v-icon>Wars</a></li>
			
			<li class="header"><p>Market</p></li>
			<li><a href="#"><v-icon>card_giftcard</v-icon>Shop</a></li>
			<li><a href="#"><v-icon>account_balance</v-icon>House Auctions</a></li>
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
	width: 50px;
	padding-top: 60px;
	background: #333;
	font-weight: 300;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	transition: all .3s cubic-bezier(0,0,.2,1);
} ul {
	padding-top: 20px;
	list-style-type: none;
} .header {
	padding: 25px 10px 0;
	display: none;
} .header:after {
	border-bottom: 1px solid rgba(255, 255, 255, .2);
	content: '';
	display: block;
	height: .4rem;
	transform: translateY(-2rem);
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
	font-size: 0;
} .icon {
	margin-right: 5px;
	line-height: 20px;
	float: left;
	visibility: visible;

} li:not(.header) a:hover {
	color: #FFF;	
} li a.router-link-active {
	border-right: 4px solid #0277bd;
	color: #FFF;
	background: #292929;
}

@media only screen and (min-width: 768px) {
	.sidenav {
		width: 250px;
	} .header {
		display: block;
	} li a {
		font-size: 15px;
	}
}
</style>
