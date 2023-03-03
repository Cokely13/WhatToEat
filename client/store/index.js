import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import auth from './auth'
import usersReducer from './allUsersStore'
import singleUserReducer from './singleUserStore'
import singleOrderReducer from './singleOrderStore'
import ordersReducer from './allOrdersStore'
import foodsReducer from './allFoodsStore'
import singleFoodReducer from './singleFoodStore'

const reducer = combineReducers({ auth,
  allUsers: usersReducer,
  singleUser: singleUserReducer,
  singleOrder: singleOrderReducer,
  allOrders: ordersReducer,
  singleFood: singleFoodReducer,
  allFoods: foodsReducer })
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
