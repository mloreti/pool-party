import firebase from '../lib/firebase';

export const getAllPlayers = () => {
  return firebase
    .database()
    .ref('players')
    .once('value')
    .then(snapshot => snapshot.val());
}
type AddPlayer = (playerInfo: {name: string}) => Promise<any>;
export const addPlayer: AddPlayer = ({ name }) => {
  const ref = firebase
    .database()
    .ref('players/')
    .push();

  return ref.set({
    id: ref.key,
    name,
  });
}