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
      <div align="center" class="pt-5 mt-5">
        <h1 class="textCenter">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input class="inputField form-control-lg m-2" type="text" value={userName} onChange={(event) => setUsername(event.target.value)} className="input" placeholder="Username" required />
          <input class="inputField form-control-lg m-2" type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="input" placeholder="Password" required /> <br/>
          <div align="center">
            <Button class="m-3 btn pt-2" type="submit"><span class="whiteText px-2 py-2 fs-3">Lets Go!!</span></Button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default LoginChat;