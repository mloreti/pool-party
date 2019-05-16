export interface Player {
  readonly id: string;
  readonly name: string;
}

export interface Players {
  readonly [key: string]: Player;
}

export interface Game {
  readonly time: string;
  readonly id: string;
  readonly player1Id: string;
  readonly player2Id: string;
  readonly player1Score: number;
  readonly player2Score: number;
  readonly winnerId: string;
}
