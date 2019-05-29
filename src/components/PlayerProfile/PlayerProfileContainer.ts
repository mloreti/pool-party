import { connect } from "react-redux";

import PlayerProfile, { PlayerProfileProps, PlayerProfileRouteProps } from "./PlayerProfile";
import { State } from "../../data/types/state";
import { computePlayerRating, getPlayerById, winRateBetweenPlayers, playersPlayerPlayed } from "../../data/selectors/players";
import { gamesByPlayerId } from "../../data/selectors/games";

export const mapStateToProps = (state: State, { match }: PlayerProfileRouteProps): PlayerProfileProps => {
  let { id } = match.params;
  let player = getPlayerById(state, id);
  const rating = computePlayerRating(state, id) || 0;
  const gamesPlayed = gamesByPlayerId(state, id);
  const playersPlayed = playersPlayerPlayed(state, id);
  const opponentStats = playersPlayed.map(opponentId => ({
      opponent: getPlayerById(state, opponentId),
      winRate: winRateBetweenPlayers(state, id, opponentId)
  }));

  return {
    id,
    name: player.name,
    rating,
    ratingConfidence: player.ratingConfidence,
    gamesPlayed,
    opponentStats,
  };
};

export default connect(
  mapStateToProps,
)(PlayerProfile);
