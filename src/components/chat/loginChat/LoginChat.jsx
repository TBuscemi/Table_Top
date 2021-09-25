import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/button';
import "./LoginChat"



const projectID = "bc20eb8f-cb09-48db-80bc-fdb34b544181";

const LoginChat = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': userName, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', userName);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Hmmmmm Try Again!');
    }
  };

  

  return (
    <div>
      <div >
        <h1>Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={userName} onChange={(event) => setUsername(event.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="input" placeholder="Password" required />
          <div align="center">
          <Button type="submit">Lets Go!!</Button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default LoginChat;