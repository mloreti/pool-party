import { GAMES_RECEIVE_ALL, GAMES_RECEIVE_N_GAMES } from "../actions/games";
import { STATUS, State } from "../types/state";

const defaultState: State['games'] = {
  status: STATUS.NOT_REQUESTED,
  byId: {},
};

type GamesActions = any;

function GamesReducer(state = defaultState, action: GamesActions) {
  switch(action.type) {
    case GAMES_RECEIVE_N_GAMES:
      return {
        ...state,
        byId: {
          ...state.byId,
          ...action.payload,
        },
        status: STATUS.FULFILLED,
      }
    case GAMES_RECEIVE_ALL:
      return {
        ...state,
        byId: {
          ...action.payload,
        },
        status: STATUS.FULFILLED,
      }
    default:
      return state;
  }
}

export default GamesReducer;