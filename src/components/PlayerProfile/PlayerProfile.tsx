import React, { FC, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { getPlayerById } from "../../api/players";
import { Player, Game } from "../../api/types";
import { getAllGames } from "../../api/games";
import { arrayFromObject, gamesByPlayerId } from "../../api/utils";

interface PlayerProfileRouterProps {
  readonly id: string;
}

interface PlayerProfileProps
  extends RouteComponentProps<PlayerProfileRouterProps> {}

const PlayerProfile: FC<PlayerProfileProps> = ({ match }) => {
  const [info, setInfo] = useState<Player>({ id: "", name: "" });
  const [allGamesPlayed, setAllGamesPlayed] = useState<Game[]>([]);
  const userId = match.params.id;

  const fetchAllGames = async () => {
    const response = await getAllGames();
    const games = response ? response : [];

    setAllGamesPlayed(arrayFromObject(games));
  };

  useEffect(() => {
    fetchAllGames();
    getPlayerById(userId).then(player => {
      setInfo(player);
    });
  }, [userId]);

  const gamesPlayed = gamesByPlayerId(allGamesPlayed, userId);
  return (
    <div className="PlayerProfile">
      <h1>{info.name}</h1>
      <h2>Games Played</h2>
      {gamesPlayed.map(game => (
        <div>{game.id}</div>
      ))}
    </div>
  );
};

export default PlayerProfile;
