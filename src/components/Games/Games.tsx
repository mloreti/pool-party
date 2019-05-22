import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Game } from "../../api/types";
import { arrayFromObject } from "../../api/utils";
import { getAllGames } from "../../api/games";
import PlayerName from "../PlayerName";
import GameForm from "../GameForm";

function Games() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetchAllGames();
  }, [])

  const fetchAllGames = async () => {
    const response = await getAllGames();
    const games = response ? response : [];

    setGames(arrayFromObject(games));
  };

  return (
    <div className="Games">
      <h1>Games</h1>
      <GameForm onAddGame={fetchAllGames} />
      <h2>History</h2>
      <ol>
        {games.map(game => (
          <li className="Game">
            <Link to={`/games/${game.id}`}>Link to game</Link>
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
      </ol>
    </div>
  );
}

export default Games;
