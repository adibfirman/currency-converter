import { CHANGE_THEME_APP } from '../actions/theme'

const initialState = {
  color: '#4F6D7A'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME_APP:
      return { color: action.color }
    default:
      return state
  }
}

export default reducer