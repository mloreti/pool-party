import React, { FC } from "react";
import { RouteComponentProps } from "react-router";
import { Player, Game } from "../../api/types";
import PlayerName from "../PlayerName";
import DateText from "../DateText";

import "./PlayerProfile.css";
import { Link } from "react-router-dom";
import WinRate from "../WinRate/WinRateContainer";


interface OpponentStat {
  readonly opponent: Player;
  readonly winRate: number;
}

export interface PlayerProfileMatchProps {
  readonly id: string;
}

export interface StateProps {
  readonly name: Player['name'];
  readonly rating: Player['rating'];
  readonly ratingConfidence: Player['ratingConfidence'];
  readonly gamesPlayed: Game[],
  readonly opponentStats: OpponentStat[],
}

export interface PlayerProfileRouteProps extends RouteComponentProps<PlayerProfileMatchProps> {}

export type PlayerProfileProps = PlayerProfileMatchProps & StateProps;

const PlayerProfile: FC<PlayerProfileProps> = (props) => {
  let { id, name, rating, opponentStats, gamesPlayed } = props;

  return (
    <div className="PlayerProfile">
      <PlayerName id={id} useInitials={true} />
      <h1>{name} - {rating}</h1>
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
