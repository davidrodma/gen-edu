import { handleError } from '../../errors/handleError'
import { api } from '../api/api.service'

type SignInRequestData = {
  email: string
  password: string
}
export interface UserPayload {
  sub: string
  email: string
  name: string
  role: string
  iat?: number
  exp?: number
}

type LoginReponse = {
  access_token: string
  user: UserPayload
}

export async function signInRequest(data: SignInRequestData) {
  const response = await api.post<LoginReponse>('/login', data).catch(res => handleError(res))
  if ('error' in response) {
    throw response.error
  }
  if (!response) {
    throw 'Não foi possível obter uma sessão de token válida.'
  }
  if (response?.access_token) {
    api.defaults.headers = { ...api.defaults.headers, Authorization: `Bearer ${response.access_token}` }
  }
  const { access_token: token, user } = response
  return {
    token,
    user,
  }
}

export async function recoverUserInformation() {
  const response = await api.get<UserPayload>('/me').catch(res => handleError(res))

  if ('error' in response) {
    throw response.error
  }
  if (!response) {
    throw 'Não foi possível obter uma sessão de token válida.'
  }
  return {
    name: response.name,
    email: response.email,
    avatar_url:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
}
