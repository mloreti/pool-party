export interface Player {
  readonly id: string;
  readonly name: string;
}

export interface Game {
  player1Id: string;
  player2Id: string;
  player1Score: number;
  player2Score: number;
  winnerId: string;
}
