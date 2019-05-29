import { Games, Players } from "../../api/types";

export enum STATUS {
  NOT_REQUESTED = "NOT_REQUESTED",
  PENDING = "PENDING",
  FULFILLED = "FULFILLED"
}

export interface State {
  games: {
    byId: Games;
    pending: {
      [key: string]: boolean;
    };
    status: STATUS;
  };
  players: {
    byId: Players;
    pending: {
      [key: string]: boolean;
    };
    status: STATUS;
  };
}
