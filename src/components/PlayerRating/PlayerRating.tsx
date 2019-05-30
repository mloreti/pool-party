import React, { FC } from 'react';

export interface OwnProps {
  readonly id: string;
}

export interface StateProps {
  readonly rating: number;
}

export type PlayerRatingProps = StateProps & OwnProps;

const PlayerRating: FC<PlayerRatingProps> = ({ id, rating }) => {
  return (
    <>
      {rating}
    </>
  )  
}

export default PlayerRating;