import { useState } from 'react';
import './Singnup.css';

function Singnup({ setUserName }) {
  const [name, setName] = useState('');

  const handlerEnter = () => {
    localStorage.setItem('username', name);
    setUserName(name);
  };

  return (
    <div className="signup-page">
      <div className="signup-box">
        <h1>Welcome to CodeLeap network!</h1>
        <label>Please enter your username</label>
        <input
          placeholder="UserName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="signup-actions">
          <button disabled={!name} onClick={handlerEnter}>
            ENTER
          </button>
        </div>
      </div>
    </div>
  );
}

export default Singnup;
