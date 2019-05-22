import { Game, Player } from "./types";
import moment from 'moment';

interface Obj {
  [key: string]: any;
}

export const arrayFromObject = (obj: Obj) =>
  Object.keys(obj).map(key => obj[key]);

type GamesByPlayerId = (games: Game[], id: Player["id"]) => Game[];
export const gamesByPlayerId: GamesByPlayerId = (games, id) =>
  games.filter(game => game.player1Id === id || game.player2Id === id);

type GamesBetweenPlayers = (player1Id: Player['id'], player2Id: Player['id'], games: Game[]) => Game[];
export const gamesBetweenPlayers: GamesBetweenPlayers = (player1Id, player2Id, games) =>
  games.filter(game => (
    (game.player1Id === player1Id && game.player2Id === player2Id)
    || 
    (game.player1Id === player2Id && game.player2Id === player1Id)
  ));

type OpponentForGame = (player: Player, game: Game) => Player['id'];
export const opponentForGame: OpponentForGame = (player, game) => 
  (game.player1Id === player.id ? game.player2Id : game.player1Id);

type PlayersPlayerPlayed = (player: Player, allGames: Game[]) => Player['id'][];
export const playersPlayerPlayed: PlayersPlayerPlayed = (player, allGames) => {
  const uniqueOpponentIds: Player['id'][] = [];
  const gamesPlayerPlayed = gamesByPlayerId(allGames, player.id);

  gamesPlayerPlayed.forEach(game => {
    const opponentId = opponentForGame(player, game);
    if (uniqueOpponentIds.indexOf(opponentId) < 0) {
      uniqueOpponentIds.push(opponentId);
    }
  });

  return uniqueOpponentIds;
};

export const timeFromNow = (time: string) => {
  const date = new Date(time);
  const momentFormat = moment(date);

  return momentFormat.startOf().fromNow();
}

export const dateFormat = (time: string) => {
  const date = new Date(time);
  const momentFormat = moment(date).format('MMMM Do, YYYY - h:mm a');

  return momentFormat;
}