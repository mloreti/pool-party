import { Game, Player } from "../../api/types";
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

export const allGames: (state: State) => Game[] = state => {
  return arrayFromObject(state.games.byId);
}

type GamesBetweenPlayers = (state: State, player1Id: Player['id'], player2Id: Player['id']) => Game[];
export const gamesBetweenPlayers: GamesBetweenPlayers = (state, player1Id, player2Id) => {
  const games = allGames(state);
  return games.filter(game => (
    (game.player1Id === player1Id && game.player2Id === player2Id)
    || 
    (game.player1Id === player2Id && game.player2Id === player1Id)
  ));
};

type GamesByPlayerId = (state: State, id: Player["id"]) => Game[];
export const gamesByPlayerId: GamesByPlayerId = (state, id) => {
  const games = allGames(state);
  return games.filter(game => game.player1Id === id || game.player2Id === id);
};


