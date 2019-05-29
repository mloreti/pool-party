import { connect } from "react-redux";

import Games, { StateProps, DispatchProps } from "./Games";
import { fetchAllGames } from "../../data/actions/games";
import { State } from "../../data/types/state";
import { arrayFromObject } from "../../api/utils";
import { last12Games } from "../../data/selectors/games";

export const mapStateToProps = (state: State): StateProps => ({
  games: last12Games(state),
  status: state.games.status,
});

export const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  fetchAllGames: () => dispatch(fetchAllGames())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Games);
