import News from '../components/pages/News'
import Downloads from '../components/pages/Downloads'
import Register from '../components/pages/account/Register'
import Login from '../components/pages/account/Login'
import Logout from '../components/pages/account/Logout'
import NotFound from '../components/pages/NotFound'

export default [
	{ path: '/', 					component: News, 		meta: {authLevel: 0} },
	{ path: '/news', 				component: News, 		meta: {authLevel: 0} },
	{ path: '/downloads', 			component: Downloads, 	meta: {authLevel: 0} },
	{ path: '/account/register', 	component: Register, 	meta: {authLevel: -1} },
	{ path: '/account/login', 		component: Login, 		meta: {authLevel: -1} },
	{ path: '/account/logout', 		component: Logout, 		meta: {authLevel: 0} },
	{ path: '*', 					component: NotFound, 	meta: {authLevel: 0} }
]
