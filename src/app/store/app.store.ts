import {textReducer} from '../reducers/app.reducers'
import {userReducer} from '../reducers/user.reducers'

const reducer = {
  store: textReducer,
  user: userReducer
}

export default reducer