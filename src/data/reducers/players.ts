import { STATUS, State } from "../types/state";
import {
  PLAYERS_RECEIVE_ALL,
  PLAYERS_RECEIVE_PLAYER,
  PLAYERS_PENDING
} from "../actions/players";

const defaultState: State["players"] = {
  status: STATUS.NOT_REQUESTED,
  byId: {},
  pending: {}
};

type PlayersActions = any;

function PlayersReducer(state = defaultState, action: PlayersActions) {
  switch (action.type) {
    case PLAYERS_PENDING:
      return {
        ...state,
        pending: {
          ...state.pending,
          [action.payload]: true
        }
      };
    case PLAYERS_RECEIVE_ALL:
      return {
        ...state,
        byId: {
          ...action.payload
        },
        status: STATUS.FULFILLED
      };
    case PLAYERS_RECEIVE_PLAYER:
      return {
        ...state,
        pending: {
          ...state.pending,
          [action.payload.id]: false
        },
        byId: {
          ...state.byId,
          [action.payload.id]: {
            ...action.payload
          }
        }
      };
    default:
      return state;
  }
}

export default PlayersReducer;
