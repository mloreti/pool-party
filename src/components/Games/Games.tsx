import React from "react";
import { Link } from "react-router-dom";

import { Game } from "../../api/types";
import PlayerName from "../PlayerName";
import GameForm from "../GameForm";

import "./Games.css";
import DateText from "../DateText";
import { STATUS } from "../../data/types/state";

export interface StateProps {
  readonly games: Game[];
  readonly status: string;
}

export interface DispatchProps {
  fetchAllGames(): void;
}

export type GamesProps = StateProps & DispatchProps;

function GamesPage(props: GamesProps) {
  if (props.status === STATUS.NOT_REQUESTED) {
    props.fetchAllGames();
  }
  
  return (
    <div className="Games">
      <h1>Games</h1>
      <GameForm />
      <h2>History</h2>
      <ul>
        {props.games.map((game: Game) => (
          <li key={game.id} className="Game">
            <Link to={`/games/${game.id}`}>
              <DateText date={game.time} />
            </Link>
            <div>
              <PlayerName id={game.player1Id} />{" "}
              <strong>{game.player1Score}</strong> vs{" "}
              <strong>{game.player2Score}</strong>{" "}
              <PlayerName id={game.player2Id} />
            </div>
            <div>
              Winner:{" "}
              <strong>
                <PlayerName id={game.winnerId} />
              </strong>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GamesPage;
