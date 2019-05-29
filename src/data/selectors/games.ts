import { Game } from "../../api/types";
import { State } from "../types/state";
import { arrayFromObject } from "../../api/utils";

const lastNGames = (n: number) => (games: Game[]) => {
  const sliced = games.slice(games.length - n, games.length);

  return sliced.reverse();
};

export const last12Games = (state: State) => {
  const games = arrayFromObject(state.games.byId);
  const last12 = lastNGames(12);

  return last12(games);
};
