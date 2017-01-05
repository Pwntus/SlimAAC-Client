import _ from '../components'

export default [
	{ path: '/', 					component: _.News, 		meta: {authLevel: 0} },
	{ path: '/news', 				component: _.News, 		meta: {authLevel: 0} },
	{ path: '/downloads', 			component: _.Downloads, meta: {authLevel: 0} },
	{ path: '/account/register', 	component: _.Register, 	meta: {authLevel: -1} },
	{ path: '/account/login', 		component: _.Login, 	meta: {authLevel: -1} },
	{ path: '/account/logout', 		component: _.Logout, 	meta: {authLevel: 1} },
	{ path: '*', 					component: _.NotFound, 	meta: {authLevel: 0} }
]
