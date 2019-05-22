import React, { FC, useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";

import { Game } from "../../api/types";
import { getGameById, deleteGame } from "../../api/games";
import PlayerName from "../PlayerName";

import "./Game.css";
import { dateFormat } from "../../api/utils";

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
    const verify = window.confirm('Delete Game?');

    if (verify) {
      deleteGame(gameId).then(() => {
        history.push("/games");
      });
    }
  };

  return (
    <div className="Game">
      <h1>Game</h1>
      <h4 style={{ marginBottom: 10 }}>
        {dateFormat(game.time)}
      </h4>
      <div style={{ marginBottom: 20 }}>
        <span className="remove" onClick={() => removeGame(game.id)}>
          Delete Game
        </span>
      </div>
      <PlayerName id={game.player1Id} />
      <h1>{game.player1Score}</h1>
      <PlayerName id={game.player2Id} />
      <h1>{game.player2Score}</h1>
    </div>
  );
};

export default GamePage;
