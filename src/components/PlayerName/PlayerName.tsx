import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Player } from '../../api/types';
import { makeStyles, Avatar } from "@material-ui/core";
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';

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

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
});

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
  const classes = useStyles();

  if (!name && !pending) {
    fetchPlayer(id);
  }
  if (useInitials) {
    renderedName = getInitials(name);
  }
  return (
    <Link to={`/players/${id}`}>
      <Avatar className={classes.avatar}>{renderedName}</Avatar>
    </Link>
  )  
}

export default PlayerName;