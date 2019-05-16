import React, { useState, useEffect } from "react";

import { getAllPlayers, addPlayer } from "../../api/players";
import { arrayFromObject } from "../../api/utils";
import { Player } from "../../api/types";
import { Link } from "react-router-dom";

function Players() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [input, setInput] = useState("");

  const fetchAllPlayers = async () => {
    const players = await getAllPlayers();
    setPlayers(arrayFromObject(players));
  }

  useEffect(() => {
    fetchAllPlayers();
  }, []);

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
      <button onClick={submit}>Add Player</button>
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
