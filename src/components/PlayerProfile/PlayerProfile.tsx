import React, { FC, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { getPlayerById } from "../../api/players";
import { Player } from "../../api/types";

interface PlayerProfileRouterProps {
  readonly id: string;
}

interface PlayerProfileProps
  extends RouteComponentProps<PlayerProfileRouterProps> {}

const PlayerProfile: FC<PlayerProfileProps> = ({ match }) => {
  const [info, setInfo] = useState<Player>({ id: "", name: "" });

  useEffect(() => {
    getPlayerById(match.params.id).then(player => {
      setInfo(player);
    });
  }, [match.params.id]);

  return (
    <div className="PlayerProfile">
      <h1>{info.name}</h1>
    </div>
  );
};

export default PlayerProfile;
