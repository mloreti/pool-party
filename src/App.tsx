import React, { useState, useEffect } from 'react';

import './App.css';
import { getAllPlayers, addPlayer } from './api/players';
import { Player } from './api/types';
import { arrayFromObject } from './api/utils';

function App() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [input, setInput] = useState('');

  const fetchAllPlayers = async () => {
    const response = await getAllPlayers();
    const players = response ? response : [];
    setPlayers(arrayFromObject(players));
  }

  useEffect(() => {
    fetchAllPlayers();
  }, []);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  }

  const submit = () => {
    addPlayer({ name: input });
    setInput('');
  }

  console.log(players);

  return (
    <div className="App">
      <input name="name" value={input} onChange={onInputChange} placeholder="Player name" />
      <button onClick={submit}>Add Player</button>
    </div>
  );
}

export default App;
