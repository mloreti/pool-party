import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Player } from '../../api/types';

export interface OwnProps {
  readonly id: string;
}

export interface StateProps {
  readonly name: Player['name'] | null;
  readonly pending: boolean;
}

export interface DispatchProps {
  fetchPlayer(id: OwnProps['id']): void;
}

export type PlayerNameProps = StateProps & OwnProps & DispatchProps;

const PlayerName: FC<PlayerNameProps> = ({ id, name, fetchPlayer, pending }) => {
  if (!name && !pending) {
    fetchPlayer(id);
  }
  return  <Link to={`/players/${id}`}>{name}</Link>;
}

export default PlayerName;