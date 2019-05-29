import { Dispatch } from "redux";
import { getAllPlayers, getPlayerById } from "../../api/players";
import { Players, Player } from "../../api/types";

export const PLAYERS_RECEIVE_ALL = 'PLAYERS.RECEIVE_ALL'
export const PLAYERS_RECEIVE_PLAYER = 'PLAYERS.RECEIVE_PLAYER'
export const PLAYERS_PENDING = 'PLAYERS.PENDING'

export const fetchAllPlayers = () => (dispatch: Dispatch) => {
  getAllPlayers().then(players => {
    dispatch(receiveAllPlayers(players));
  })
}

export const receiveAllPlayers = (players: Players) => ({
  type: PLAYERS_RECEIVE_ALL,
  payload: players,
})

export const fetchPlayer = (id: string) => (dispatch: Dispatch) => {
  dispatch(playerPending(id));
  getPlayerById(id).then(player => {
    dispatch(receivePlayer(player));
  })
}

export const playerPending = (id: string) => ({
  type: PLAYERS_PENDING,
  payload: id,
})

export const receivePlayer = (player: Player) => ({
  type: PLAYERS_RECEIVE_PLAYER,
  payload: player,
})