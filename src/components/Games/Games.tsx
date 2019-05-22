import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Game } from "../../api/types";
import { arrayFromObject } from "../../api/utils";
import { getLastNGames } from "../../api/games";
import PlayerName from "../PlayerName";
import GameForm from "../GameForm";

import "./Games.css";
import DateText from "../DateText";

function Games() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetchLast12Games();
  }, []);

  const fetchLast12Games = async () => {
    const response = await getLastNGames(12);
    const games = arrayFromObject(response).reverse();

    setGames(arrayFromObject(games));
  };

  return (
    <div className="Games">
      <h1>Games</h1>
      <GameForm onAddGame={fetchLast12Games} />
      <h2>History</h2>
      <ul>
        {games.map(game => (
          <li className="Game">
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

export default Games;
