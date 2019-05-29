import { Game, Player } from "./types";
import moment from 'moment';
import { getCubicRoots } from 'cubic-roots';

interface Obj {
  [key: string]: any;
}

export const arrayFromObject = (obj: Obj) =>
  Object.keys(obj).map(key => obj[key]);



type OpponentForGame = (id: Player['id'], game: Game) => Player['id'];
export const opponentForGame: OpponentForGame = (id, game) => 
  (game.player1Id === id ? game.player2Id : game.player1Id);



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

export const calculateRatingDifference = (winRate: number) => {
  const diff = getCubicRootsReal(
    0.000000001392724612439186,
    -0.000002904144213167561,
    0.002064097901975022,
    0.4912753313135377,
    winRate,
  );
  return Math.round(diff);
}

// The cubic equation solved is Ax3 + Bx2 + Cx + D = equalTo.
export const getCubicRootsReal = (A: number, B: number, C: number, D: number, equalTo: number) => {
  const roots = getCubicRoots(A, B, C, D - equalTo);
  return roots[0].real;
}
