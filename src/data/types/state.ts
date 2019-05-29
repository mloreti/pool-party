import { Games, Players } from "../../api/types";

export enum STATUS {
  NOT_REQUESTED = 'NOT_REQUESTED',
  PENDING = 'PENDING',
  FULFILLED = 'FULFILLED',
}

export interface State {
  games: {
    byId: Games,
    status: STATUS,
  },
  players: {
    byId: Players,
    status: STATUS,
  },
}