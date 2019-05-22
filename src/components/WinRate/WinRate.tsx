import React, { FC } from 'react';
import { Player, Game } from '../../api/types';
import { gamesBetweenPlayers } from '../../api/utils';

export interface WinRateProps {
  readonly player1Id: Player['id'];
  readonly player2Id: Player['id'];
  readonly games: Game[];
}

const WinRate: FC<WinRateProps> = ({ player1Id, player2Id, games }) => {
  const gamesBetweenTwoPlayers = gamesBetweenPlayers(player1Id, player2Id, games);
  const player1Wins = gamesBetweenTwoPlayers.filter(game => game.winnerId === player1Id);

  return (
    <span>{Math.round((player1Wins.length/gamesBetweenTwoPlayers.length) * 100)}% ({gamesBetweenTwoPlayers.length})</span>
  );
}

export default WinRate;