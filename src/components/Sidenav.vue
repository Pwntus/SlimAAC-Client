<template>
	<div class="sidenav">
		<ul>
		<template v-for="link in this.stateLinks">
			<template v-if="link.header">
				<li class="header"><p>{{link.name}}</p><li>
			</template>
			<template v-else>
				<li v-tooltip:right="{html:link.name}"><router-link :to="link.path"><v-icon>{{link.icon}}</v-icon>{{link.name}}</router-link></li>
			</template>
		</template>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			links: [
				{ path: '/news', 				name: 'News', 			icon: 'format_align_left', 	authLevel: 0 	},
				{ path: '/account/register', 	name: 'Create Account', icon: 'person_add', 		authLevel: -1 	},
				{ path: '/downloads', 			name: 'Downloads', 		icon: 'play_for_work', 		authLevel: 0 	},
				
				{ path: '/account/login', 		name: 'Login', 			icon: 'exit_to_app', 		authLevel: -1 	},
				{ path: '/account/logout', 		name: 'Logout', 		icon: 'exit_to_app', 		authLevel: 1 	},
				
				
				{ header: true, name: 'Community' },
				{ path: '/online', 				name: 'Online List', 	icon: 'timeline', 			authLevel: 0 	},
				{ path: '/activity', 			name: 'Activity', 		icon: 'public', 			authLevel: 0 	},
				{ path: '/highscores', 			name: 'Highscores', 	icon: 'star', 				authLevel: 0 	},
				
				{ header: true, name: 'Guilds' },
				{ path: '/guilds', 				name: 'Guild List', 	icon: 'security', 			authLevel: 0 	},
				{ path: '/wars', 				name: 'Wars', 			icon: 'whatshot', 			authLevel: 0 	},
				
				{ header: true, name: 'Market' },
				{ path: '/shop', 				name: 'Shop', 			icon: 'card_giftcard', 		authLevel: 0 	},
				{ path: '/auctions', 			name: 'House Auctions', icon: 'account_balance', 	authLevel: 0 	},
			]
		}	
	},
	computed: {
		authLevel () {
			return this.$store.getters.authLevel
		},
		stateLinks () {
			const links = []
			
			this.links.forEach(link => {
				if (link.authLevel < 0 && this.authLevel > 0) return
				if (link.header
					|| link.authLevel == 0
					|| this.authLevel >= link.authLevel) {
					links.push(link)
				}
			})
			
			return links
		}
	}
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
	z-index: 99;
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
	} [data-tooltip]:after {
		visibility: hidden !important;
	}
}
</style>
