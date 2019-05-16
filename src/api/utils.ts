import { Game, Player } from "./types";

interface Obj {
  [key: string]: any;
}

export const arrayFromObject = (obj: Obj) =>
  Object.keys(obj).map(key => obj[key]);

type GamesByPlayerId = (games: Game[], id: Player["id"]) => Game[];

export const gamesByPlayerId: GamesByPlayerId = (games, id) =>
  games.filter(game => game.player1Id === id || game.player2Id === id);
