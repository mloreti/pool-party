import { connect } from "react-redux";

import GameForm, { DispatchProps, StateProps } from "./GameForm";
import { fetchAllGames } from "../../data/actions/games";
import { State } from "../../data/types/state";
import { arrayFromObject } from "../../api/utils";
import { fetchAllPlayers } from "../../data/actions/players";

export const mapStateToProps = (state: State): StateProps => ({
  players: arrayFromObject(state.players.byId),
  status: state.players.status,
});

export const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  onAddGame: () => dispatch(fetchAllGames()),
  fetchAllPlayers: () => dispatch(fetchAllPlayers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameForm);
