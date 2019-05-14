import React, { useState, useEffect } from 'react';

import './App.css';
import { getAllUsers, addUser } from './api/users';

function App() {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    getAllUsers().then(users => {
      setUsers(users);
    })
  }, []);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  }

  const submit = () => {
    addUser({ name: input });
    setInput('');
  }

  console.log(users);
  return (
    <div className="App">
      <input name="name" value={input} onChange={onInputChange} placeholder="update me" />
      <button onClick={submit}>Add User</button>
      {(users).map(user => (
        <span>{user.name}</span>
      ))}
    </div>
  );
}

export default App;
