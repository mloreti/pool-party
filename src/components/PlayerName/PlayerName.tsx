import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Player } from '../../api/types';

export interface OwnProps {
  readonly id: string;
  readonly useInitials?: boolean;
}

export interface StateProps {
  readonly name: Player['name'] | null;
  readonly pending: boolean;
}

export interface DispatchProps {
  fetchPlayer(id: OwnProps['id']): void;
}

export type PlayerNameProps = StateProps & OwnProps & DispatchProps;


const getInitials = (name: string | null) => {
  if (!name) {
    return '??';
  }
  let initialMatches = name.match(/\b\w/g) || [];
  let initials = ((initialMatches.shift() || '') + (initialMatches.pop() || '')).toUpperCase();
  return initials;
}

const PlayerName: FC<PlayerNameProps> = ({ id, name, fetchPlayer, pending, useInitials = false }) => {
  let renderedName = name;

  if (!name && !pending) {
    fetchPlayer(id);
  }
  if (useInitials) {
    renderedName = getInitials(name);
  }
  return (
    <Link to={`/players/${id}`}>{renderedName}</Link>
  )  
}

export default PlayerName;