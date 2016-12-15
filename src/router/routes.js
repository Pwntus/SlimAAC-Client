import News from '../components/pages/News'
import Downloads from '../components/pages/Downloads'
import Register from '../components/pages/account/Register'
import NotFound from '../components/pages/NotFound'

export default [
	{ path: '/', component: News },
	{ path: '/news', component: News },
	{ path: '/downloads', component: Downloads },
	{ path: '/account/register', component: Register },
	{ path: '*', component: NotFound }
]
