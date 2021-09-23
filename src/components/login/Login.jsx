import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/button';
import './Login.css';


const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('');

  function validateForm() {
    return userName.length > 6 && password.length > 6;
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="Login">
      <h2>
        Enter username and password
      </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="userName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div class='btn-toolbar'>
          <Button variant='info' block size="md" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        
        <span>
          Not a member? sign up <a href='register'>here</a>
        </span>

        </div>
      </Form>
    </div>
  );
}

export default Login