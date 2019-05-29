import { connect } from "react-redux";

import Players, { StateProps, DispatchProps } from "./Players";
import { State } from "../../data/types/state";
import { arrayFromObject } from "../../api/utils";
import { fetchAllPlayers } from "../../data/actions/players";

export const mapStateToProps = (state: State): StateProps => ({
  players: arrayFromObject(state.players.byId),
  status: state.players.status,
});

export const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  fetchAllPlayers: () => dispatch(fetchAllPlayers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Players);
