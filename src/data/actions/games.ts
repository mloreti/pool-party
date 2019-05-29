import { getAllGames, getLastNGames } from "../../api/games";
import { Games } from "../../api/types";
import { Dispatch } from "redux";

export const fetchAllGames = () => (dispatch: Dispatch) => {
  getAllGames().then(games => {
    dispatch(receiveAllGames(games));
  })
}

export const GAMES_RECEIVE_ALL = 'GAMES.RECEIVE_ALL'

export const receiveAllGames = (games: Games) => ({
  type: GAMES_RECEIVE_ALL,
  payload: games,
});

export const fetchNGames = (n: number) => (dispatch: Dispatch) => {
  getLastNGames(n).then(games => {
    dispatch(receiveNGames(games))
  })
}

export const GAMES_RECEIVE_N_GAMES = 'GAMES.RECEIVE_N_GAMES'

export const receiveNGames = (games: Games) => ({
  type: GAMES_RECEIVE_N_GAMES,
  payload: games,
});

