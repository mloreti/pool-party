import React, { FC, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { getPlayerById } from "../../api/players";
import { Player, Game } from "../../api/types";
import { getAllGames } from "../../api/games";
import { arrayFromObject, gamesByPlayerId, playersPlayerPlayed } from "../../api/utils";
import PlayerName from "../PlayerName";
import DateText from "../DateText";

import "./PlayerProfile.css";
import { Link } from "react-router-dom";
import WinRate from "../WinRate";

interface PlayerProfileRouterProps {
  readonly id: string;
}

interface PlayerProfileProps
  extends RouteComponentProps<PlayerProfileRouterProps> {}


const PlayerProfile: FC<PlayerProfileProps> = ({ match }) => {
  const [info, setInfo] = useState<Player>({ id: "", name: "" });
  const [allGamesPlayed, setAllGamesPlayed] = useState<Game[]>([]);
  const [playersPlayed, setPlayersPlayed] = useState<Player['id'][]>([]);
  const userId = match.params.id;

  const fetchAllGames = async () => {
    const response = await getAllGames();
    const games = response ? response : [];
    const sortedGames = arrayFromObject(games).reverse();

    setAllGamesPlayed(sortedGames);
  };

  const fetchAllOpponents = async (player: Player, allGames: Game[]) => {
    const opponentIds = await playersPlayerPlayed(player, allGames);
    setPlayersPlayed(arrayFromObject(opponentIds));
  }
  
  useEffect(() => {
    fetchAllGames();
    getPlayerById(userId).then(player => {
      setInfo(player);
      fetchAllOpponents(player, allGamesPlayed);
    });
  }, [userId, allGamesPlayed]);
  
  const gamesPlayed = gamesByPlayerId(allGamesPlayed, userId);

  return (
    <div className="PlayerProfile">
      <h1>{info.name}</h1>
      <h2>Win Rates</h2>
      <div>
        {
          playersPlayed.map(opponentId => (
            <div className="opponent">
              <PlayerName id={opponentId} /> - <WinRate player1Id={userId} player2Id={opponentId} games={allGamesPlayed} />
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
                {game.player1Id === userId ? (
                  <PlayerName id={game.player2Id} />
                ) : (
                  <PlayerName id={game.player1Id} />
                )}
              </div>
              <div className="score">
                {game.winnerId === userId ? `✅` : `❌`}
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
