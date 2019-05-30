import { connect } from "react-redux";

import PlayerProfile, {
  PlayerProfileProps,
  PlayerProfileRouteProps
} from "./PlayerProfile";
import { State, STATUS } from "../../data/types/state";
import {
  getPlayerById,
  winRateBetweenPlayers,
  playersPlayerPlayed
} from "../../data/selectors/players";
import { gamesByPlayerId } from "../../data/selectors/games";

export const mapStateToProps = (
  state: State,
  { match }: PlayerProfileRouteProps
): PlayerProfileProps | {} => {
  if (state.players.status === STATUS.NOT_REQUESTED) {
    return {};
  }


  let { id } = match.params;
  let player = getPlayerById(state, id);
  const gamesPlayed = gamesByPlayerId(state, id);
  const playersPlayed = playersPlayerPlayed(state, id);
  const opponentStats = playersPlayed.map(opponentId => ({
    opponent: getPlayerById(state, opponentId),
    winRate: winRateBetweenPlayers(state, id, opponentId)
  }));

  return {
    id,
    name: player.name,
    ratingConfidence: player.ratingConfidence,
    gamesPlayed,
    opponentStats
  };
};

export default connect(mapStateToProps)(PlayerProfile);
