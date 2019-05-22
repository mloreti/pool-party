import React, { FC, useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";

import { Game } from "../../api/types";
import { getGameById, deleteGame } from "../../api/games";
import PlayerName from "../PlayerName";
import { timeFromNow } from "../../api/utils";

import "./Game.css";

interface GameRouterProps {
  readonly id: string;
}

interface GameProps extends RouteComponentProps<GameRouterProps> {}

const GamePage: FC<GameProps> = ({ match, history }) => {
  const gameId = match.params.id;
  const [game, setGame] = useState<Game>();

  useEffect(() => {
    getGameById(gameId).then(game => {
      setGame(game);
    });
  }, [gameId]);

  if (!game) {
    return null;
  }

  const removeGame = (gameId: string) => {
    deleteGame(gameId).then(() => {
      history.push("/games")
    });
  };

  return (
    <div className="Game">
      <h1>Game</h1>
      <h4>{timeFromNow(game.time)}</h4>
      <h4>
        Winner: <PlayerName id={game.winnerId} />
      </h4>
      <PlayerName id={game.player1Id} />
      <h1>{game.player1Score}</h1>
      <PlayerName id={game.player2Id} />
      <h1>{game.player2Score}</h1>
      <div>
        <span className="remove" onClick={() => removeGame(game.id)}>
          Delete Game
        </span>
      </div>
    </div>
  );
};

export default GamePage;
