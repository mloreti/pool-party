import { STATUS, State } from "../types/state";
import { PLAYERS_RECEIVE_ALL } from "../actions/players";

const defaultState: State['players'] = {
  status: STATUS.NOT_REQUESTED,
  byId: {},
};

type PlayersActions = any;

function PlayersReducer(state = defaultState, action: PlayersActions) {
  switch(action.type) {
    case PLAYERS_RECEIVE_ALL:
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

export default PlayersReducer;