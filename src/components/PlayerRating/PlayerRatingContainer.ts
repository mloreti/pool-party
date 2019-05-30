import PlayerRating, { StateProps, OwnProps } from "./PlayerRating";
import { State } from "../../data/types/state";
import { connect } from "react-redux";
import { computePlayerRating } from "../../data/selectors/players";

const mapStateToProps = (state: State, ownProps: OwnProps): StateProps => ({
  rating: computePlayerRating(state, ownProps.id) || 0
})

export default connect(
  mapStateToProps,
)(PlayerRating);