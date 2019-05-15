import React, { useState, useEffect } from 'react';

import './App.css';
import { getAllUsers, addUser } from './api/users';
import { User } from './api/types';
import { arrayFromObject } from './api/utils';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [input, setInput] = useState('');

  const fetchAllUsers = async () => {
    const response = await getAllUsers();
    setUsers(arrayFromObject(response));
  }

  useEffect(() => {
    fetchAllUsers();
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
    </div>
  );
}

export default App;
