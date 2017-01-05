import { AUTH, AUTH_FAILURE } from '../mutation-types'
import authService from '../../services/auth'

export const authenticate = (store, request) => {
	return authService.requestToken(request)
		.then((response) => store.dispatch(AUTH, response))
		.catch((error) => store.dispatch(AUTH_FAILURE))
}
