import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Authenticate user
  };

  return (
    <Container className="login-container login-centered">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username" className="login-form-group">
              <Form.Label className="login-form-label">Username</Form.Label>
              <Form.Control type="text" value={username} onChange={(event) => setUsername(event.target.value)} className="login-form-control" />
            </Form.Group>
            <Form.Group controlId="password" className="login-form-group">
              <Form.Label className="login-form-label">Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="login-form-control" />
            </Form.Group>
            <Button type="submit" className="login-button">Login</Button>
          </Form>
    </Container>
  );
};

export default LoginComponent;