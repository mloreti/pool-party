import React, { FC } from 'react';
import usePlayerName from './usePlayerName';
import { Link } from 'react-router-dom';

export interface PlayerNameProps {
  readonly id: string;
}

const PlayerName: FC<PlayerNameProps> = ({ id }) => {
  const name = usePlayerName(id);

  return  <Link to={`/players/${id}`}>{name}</Link>;
}

export default PlayerName;