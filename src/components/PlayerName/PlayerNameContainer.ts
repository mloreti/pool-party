import PlayerName, { StateProps, OwnProps, DispatchProps } from "./PlayerName";
import { State } from "../../data/types/state";
import { connect } from "react-redux";
import { fetchPlayer } from "../../data/actions/players";
import { getPlayerName, isPlayerPending } from "../../data/selectors/players";

const mapStateToProps = (state: State, ownProps: OwnProps): StateProps => ({
  name: getPlayerName(state, ownProps.id),
  pending: isPlayerPending(state, ownProps.id),
})

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  fetchPlayer: (id: string) => dispatch(fetchPlayer(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerName);