import { IAuthConfig } from '../interfaces/auth-config.interface'

export const AUTH_CONFIG: IAuthConfig = {
  api: '/api',
  endpoint: '/auth',
  login: '/login',
  register: '/register',
  email: '/email',
  me: '/me'
}
export const AUTH_CONFIG_TOKEN = 'AuthConfig'