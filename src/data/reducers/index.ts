import { combineReducers } from 'redux'

import games from './games';
import players from './players';

const rootReducer = combineReducers({
  games,
  players,
})

export default rootReducer;