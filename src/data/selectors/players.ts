import { State } from "../types/state";
import { Player } from "../../api/types";
import { gamesBetweenPlayers, gamesByPlayerId } from "./games";
import { arrayFromObject, opponentForGame, calculateRatingDifference } from "../../api/utils";

export const getPlayerName = (state: State, id: string) => {
  const player = getPlayerById(state, id);

  return player ? player.name : null;
}

export const getPlayerById = (state: State, id: string) => {
  return state.players.byId[id];
}

export const isPlayerPending = (state: State, id: string) => {
  return state.players.pending[id];
}


export const allPlayers: (state: State) => Player[] = state => {
  return arrayFromObject(state.players.byId);
}


export const winRateBetweenPlayers = (state: State, player1id: Player['id'], player2id: Player['id']) => {
  const gamesBetweenTwoPlayers = gamesBetweenPlayers(state, player1id, player2id);
  const player1Wins = gamesBetweenTwoPlayers.filter(game => game.winnerId === player1id);

  return player1Wins.length/gamesBetweenTwoPlayers.length;
}

export const playerWithHighestRatingConfidence = (state: State) => {
  const players: Player[] = allPlayers(state);

  let highestConfidence = 0;
  let highestConfidencePlayer: Player | undefined;

  arrayFromObject(players).forEach(player => {
    if (player.ratingConfidence > highestConfidence) {
      highestConfidence = player.ratingConfidence;
      highestConfidencePlayer = player;
    }
  }); 

  return highestConfidencePlayer;
}

type PlayersPlayerPlayed = (state: State, id: Player['id']) => Player['id'][];
export const playersPlayerPlayed: PlayersPlayerPlayed = (state, id) => {
  const uniqueOpponentIds: Player['id'][] = [];
  const gamesPlayerPlayed = gamesByPlayerId(state, id);

  gamesPlayerPlayed.forEach(game => {
    const opponentId = opponentForGame(id, game);
    if (uniqueOpponentIds.indexOf(opponentId) < 0) {
      uniqueOpponentIds.push(opponentId);
    }
  });

  return uniqueOpponentIds;
};

export const computePlayerRating = (state: State, id: Player['id']) => {
  const compareToPlayer: Player | undefined = playerWithHighestRatingConfidence(state);
  if (!compareToPlayer) {
    return;
  }
  if (compareToPlayer.id === id) {
    return compareToPlayer.rating;
  }
  const winRate = winRateBetweenPlayers(state, id, compareToPlayer.id);
  return compareToPlayer.rating + calculateRatingDifference(winRate);
}