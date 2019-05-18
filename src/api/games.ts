import { database } from 'firebase';
import firebase from "../lib/firebase";
import { Game } from "./types";
import { Omit } from "yargs";

export const getAllGames = () => {
  return firebase
    .database()
    .ref("games")
    .once("value")
    .then(snapshot => snapshot.val());
};

export const getGameById = (id: string) => {
  return firebase
    .database()
    .ref(`games/${id}`)
    .once("value")
    .then(snapshot => snapshot.val());
};

export type AddGame = (game: Omit<Game, 'id' | 'time'>) => Promise<any>;
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
    time: database.ServerValue.TIMESTAMP,
    id: ref.key,
    player1Id,
    player2Id,
    player1Score,
    player2Score,
    winnerId
  });
};

export const deleteGame = (gameId: string) => {
  const ref = firebase.database().ref(`games/${gameId}`);
  
  return ref.remove();
}
