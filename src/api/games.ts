import firebase from "../lib/firebase";
import { Game } from "./types";

export const getAllGames = () => {
  return firebase
    .database()
    .ref("games")
    .once("value")
    .then(snapshot => snapshot.val());
};

export type AddGame = (game: Game) => Promise<any>;
export const addGame: AddGame = ({
  player1Id,
  player2Id,
  player1Score,
  player2Score,
  winnerId
}) => {
  const ref = firebase
    .database()
    .ref("games/")
    .push();

  return ref.set({
    id: ref.key,
    player1Id,
    player2Id,
    player1Score,
    player2Score,
    winnerId
  });
};
