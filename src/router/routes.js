import C from '../components'

export default [
	{ path: '/', 					component: C.News, 		meta: {authLevel: 0} },
	{ path: '/news', 				component: C.News, 		meta: {authLevel: 0} },
	{ path: '/downloads', 			component: C.Downloads, meta: {authLevel: 0} },
	{ path: '/account/register', 	component: C.Register, 	meta: {authLevel: -1} },
	{ path: '/account/login', 		component: C.Login, 	meta: {authLevel: -1} },
	{ path: '/account/logout', 		component: C.Logout, 	meta: {authLevel: 0} },
	{ path: '*', 					component: C.NotFound, 	meta: {authLevel: 0} }
]
