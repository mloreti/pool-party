import firebase from '../lib/firebase';

export const getAllUsers = () => {
  return firebase
    .database()
    .ref('users')
    .once('value')
    .then(snapshot => snapshot.val());
}
type AddUser = (userInfo: {name: string}) => Promise<any>;
export const addUser: AddUser = ({ name }) => {
  const ref = firebase
    .database()
    .ref('users/')
    .push();

  return ref.set({
    id: ref.key,
    name,
  });
}