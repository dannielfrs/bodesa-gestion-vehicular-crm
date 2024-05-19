import { authTypes } from '@/types/authTypes'
import { AUTHENTICATED, AUTHENTICATED_USER, TOKEN } from '@/utilities/authConstants'
import Cookies from 'js-cookie'

type Action = { type: string, payload: any }

export const authReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case authTypes.login:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user
      }
    case authTypes.logout:
      Cookies.remove(TOKEN)
      Cookies.remove(AUTHENTICATED)
      Cookies.remove(AUTHENTICATED_USER)
      return {
        ...state,
        isLoggedIn: false
      }
    default:
      return state
  }
}
