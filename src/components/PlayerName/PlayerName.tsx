import React, { FC, useState, useEffect } from 'react';
import usePlayerName from './usePlayerName';

export interface PlayerNameProps {
  readonly id: string;
}

const PlayerName: FC<PlayerNameProps> = ({ id }) => {
  const name = usePlayerName(id);

  return  <span>{name}</span>;
}

export default PlayerName;