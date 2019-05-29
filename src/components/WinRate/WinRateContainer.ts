import { connect } from "react-redux";

import WinRate, { StateProps, OwnProps } from "./WinRate";
import { State } from "../../data/types/state";
import { gamesBetweenPlayers } from "../../data/selectors/games";

export const mapStateToProps = (state: State, { player1Id, player2Id }: OwnProps): StateProps => {
  const gamesBetweenTwoPlayers = gamesBetweenPlayers(state, player1Id, player2Id);
  const player1Wins = gamesBetweenTwoPlayers.filter(game => game.winnerId === player1Id);
  const winRate = Math.round((player1Wins.length/gamesBetweenTwoPlayers.length) * 100);

  return {
    winRate,
    totalGames: gamesBetweenTwoPlayers.length,
  };
};

export default connect(
  mapStateToProps,
)(WinRate);
