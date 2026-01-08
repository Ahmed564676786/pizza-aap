import { useState } from 'react';
import Button from '../../ui/Button.jsx';
import {useDispatch} from 'react-redux';
import {updateName} from './userSlice.js';
import {useNavigate} from 'react-router-dom';
function CreateUser() {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();
    console.log( username);

    dispatch(updateName(username));

    navigate('/menu');

  }

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <p>👋 Welcome! Please start by telling us your name:</p>
        <input className="px-2 py-2 rounded-full"
          type="text"
          placeholder="Your full name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {username !== '' && (
          <div>

            <Button type="primary" onClick={handleSubmit}>Start ordering</Button>

          </div>
        )}
      </form>
    </div>
  );
}

export default CreateUser;
