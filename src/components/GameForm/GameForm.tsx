import React, { useState, FC } from "react";
import { addGame } from "../../api/games";
import { Player } from "../../api/types";

import "./GameForm.css";
import { STATUS } from "../../data/types/state";

export interface DispatchProps {
  onAddGame(): void;
  fetchAllPlayers(): void;
}

export interface StateProps {
  readonly players: Player[];
  readonly status: STATUS;
}

export type GameFormProps = DispatchProps & StateProps;

const GameForm: FC<GameFormProps> = ({
  fetchAllPlayers,
  onAddGame,
  status,
  players
}) => {
  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState("Player 2");
  const [player1Score, setPlayer1Score] = useState<number>(0);
  const [player2Score, setPlayer2Score] = useState<number>(0);

  if (status === STATUS.NOT_REQUESTED) {
    fetchAllPlayers();
  }

  const onSelect = (e: React.SyntheticEvent<HTMLSelectElement, Event>) => {
    setPlayer1(e.currentTarget.value);
  };

  const onSelectPlayer2 = (
    e: React.SyntheticEvent<HTMLSelectElement, Event>
  ) => {
    setPlayer2(e.currentTarget.value);
  };

  const onSubmitGame = () => {
    const winnerId = player1Score > player2Score ? player1 : player2;

    addGame({
      player1Id: player1,
      player2Id: player2,
      player1Score,
      player2Score,
      winnerId
    });

    setPlayer1Score(0);
    setPlayer2Score(0);
    setPlayer1("Player 1");
    setPlayer2("Player 2");

    onAddGame();
  };

  const onInputClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.currentTarget.setSelectionRange(0, e.currentTarget.value.length)
  }

  const button =
    player1 !== "Player 1" && player2 !== "Player 2" ? (
      <button className="AddGame" onClick={onSubmitGame}>
        Add Game
      </button>
    ) : null;

  return (
    <>
      <h2>Add Game</h2>
      <div className="Forms">
        <div>
          <h4>Player 1</h4>
          <form>
            <select onChange={onSelect} value={player1}>
              <option value="Player 1" disabled>
                Select a player
              </option>
              {players.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
            <label>
              Score
              <input
                onClick={onInputClick}
                type="text"
                pattern="[0-9]*"
                value={player1Score}
                min={0}
                max={17}
                onChange={e => setPlayer1Score(Number(e.currentTarget.value))}
              />
            </label>
          </form>
        </div>
        <div>
          <h4>Player 2</h4>
          <form>
            <select onChange={onSelectPlayer2} value={player2}>
              <option value="Player 2" disabled>
                Select a player
              </option>
              {players.map(({ id, name }) => {
                return player1 !== id ? (
                  <option key={id} value={id}>
                    {name}
                  </option>
                ) : null;
              })}
            </select>
            <label>
              Score
              <input
                onClick={onInputClick}
                type="text"
                pattern="[0-9]*"
                value={player2Score}
                min={0}
                max={17}
                onChange={e => setPlayer2Score(Number(e.currentTarget.value))}
              />
            </label>
          </form>
        </div>
      </div>
      {button}
    </>
  );
};

export default GameForm;
