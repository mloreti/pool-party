import { Dispatch } from "redux";
import { getAllPlayers } from "../../api/players";
import { Players } from "../../api/types";

export const fetchAllPlayers = () => (dispatch: Dispatch) => {
  getAllPlayers().then(players => {
    dispatch(receiveAllPlayers(players));
  })
}

export const PLAYERS_RECEIVE_ALL = 'PLAYERS.RECEIVE_ALL'

export const receiveAllPlayers = (players: Players) => ({
  type: PLAYERS_RECEIVE_ALL,
  payload: players,
})