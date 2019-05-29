import { State } from "../types/state";

export const getPlayerName = (state: State, id: string) => {
  const player = state.players.byId[id];

  return player ? player.name : null;
}

export const isPlayerPending = (state: State, id: string) => {
  return state.players.pending[id];
}