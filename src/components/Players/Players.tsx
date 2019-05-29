import React, { useState, FC } from "react";

import { addPlayer } from "../../api/players";
import { Player } from "../../api/types";
import { Link } from "react-router-dom";
import { STATUS } from "../../data/types/state";

export interface StateProps{
  readonly players: Player[];
  readonly status: STATUS;
}

export interface DispatchProps {
  fetchAllPlayers(): void;
}

export type PlayersProps = StateProps & DispatchProps;

const Players: FC<PlayersProps> = ({ status, players, fetchAllPlayers}) => {
  const [input, setInput] = useState("");

  if (status === STATUS.NOT_REQUESTED) {
    fetchAllPlayers();
  }


  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };

  const submit = () => {
    addPlayer({ name: input }).then(() => {
      fetchAllPlayers();
    });
    setInput("");
  };

  return (
    <div className="Players">
      <h1>Players</h1>
      <input
        name="name"
        value={input}
        onChange={onInputChange}
        placeholder="Player name"
      />
      <button onClick={submit} disabled={input.length < 1}>Add Player</button>
      <ul>
        {players.map(({id, name}) => (
          <li key={id}>
            <Link to={`/players/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Players;
