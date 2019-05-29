import React, { FC } from 'react';
import { Player } from '../../api/types';

export interface OwnProps {
  readonly player1Id: Player['id'];
  readonly player2Id: Player['id'];
}

export interface StateProps {
  readonly winRate: number;
  readonly totalGames: number;
}

export type WinRateProps = OwnProps & StateProps;

const WinRate: FC<WinRateProps> = ({ winRate, totalGames }) => {
  return (
    <span>
      {winRate}% ({totalGames})
    </span>
  )
}

export default WinRate;