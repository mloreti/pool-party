import React, { FC } from "react";
import { RouteComponentProps } from "react-router";
import { Player, Game } from "../../api/types";
import PlayerName from "../PlayerName";
import DateText from "../DateText";
import "./PlayerProfile.css";
import { Link } from "react-router-dom";
import WinRate from "../WinRate/WinRateContainer";
import { makeStyles, Avatar } from "@material-ui/core";
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import PlayerRating from "../PlayerRating";


interface OpponentStat {
  readonly opponent: Player;
  readonly winRate: number;
}

export interface PlayerProfileMatchProps {
  readonly id: string;
}

export interface StateProps {
  readonly name: Player['name'];
  readonly ratingConfidence: Player['ratingConfidence'];
  readonly gamesPlayed: Game[],
  readonly opponentStats: OpponentStat[],
}

export interface PlayerProfileRouteProps extends RouteComponentProps<PlayerProfileMatchProps> {}

export type PlayerProfileProps = PlayerProfileMatchProps & StateProps;

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
});

const PlayerProfile: FC<PlayerProfileProps> = ({ id, name, opponentStats, gamesPlayed }) => {
  const classes = useStyles();

  if (!name) {
    return null;
  }

  return (
    <div className="PlayerProfile">
      <h1><Avatar className={classes.orangeAvatar}><PlayerName id={id} useInitials={true} /></Avatar> <PlayerName id={id} /> - <PlayerRating id={id} /></h1>
      <h2>Win Rates</h2>
      <div>
        {
          opponentStats.map(stat => (
            <div className="opponent" key={stat.opponent.id}>
              <PlayerName id={stat.opponent.id} /> - <WinRate player1Id={id} player2Id={stat.opponent.id} />
            </div>
          ))
        }
      </div>
      <h2>Games Played</h2>
      <div className="PlayerGames">
        {gamesPlayed.map(game => (
          <div className="PlayerGame" key={game.id}>
            <Link to={`/games/${game.id}`}>
              <DateText date={game.time} />
            </Link>
            <div className="Content">
              <div className="opponent">
                Opponent:{" "}
                {game.player1Id === id ? (
                  <PlayerName id={game.player2Id} />
                ) : (
                  <PlayerName id={game.player1Id} />
                )}
              </div>
              <div className="score">
                {game.winnerId === id ? `✅` : `❌`}
                {game.player1Score} - {game.player2Score}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerProfile;
