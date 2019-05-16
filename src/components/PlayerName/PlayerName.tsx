import React, { FC, useState, useEffect } from 'react';
import { getPlayerById } from '../../api/players';

export interface PlayerNameProps {
  readonly id: string;
}

const PlayerName: FC<PlayerNameProps> = ({ id }) => {
  const name = usePlayerName(id);

  return  <span>{name}</span>;
}

function usePlayerName(id: string) {
  const [name, setName] = useState('');

  useEffect(() => {
    getPlayerById(id).then(player => {
      setName(player.name);
    })
  }, [id])

  return name
}

export default PlayerName;