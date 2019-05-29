import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = (preloadedState: any) => createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(applyMiddleware(thunk)),
)

export default configureStore