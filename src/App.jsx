import { useState } from 'react';
import Home from './pages/Home';
import Singnup from './components/Singnup/Singnup';

function App() {
  const [username, setUserName] = useState(() => {
    return localStorage.getItem('username') || '';
  });

  if (!username) {
    return <Singnup setUserName={setUserName} />;
  }

  return (
    <>
      <Home username={username}
      setUserName={setUserName} />
    </>
  );
}

export default App;
