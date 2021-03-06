import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return user.length > 0 && password.length > 0;
    }
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" contentID="user">
                    <Form.Label>User</Form.Label>
                    <Form.Control
                        auto
                        Focus
                        type="user"
                        value={user}
                        onChange={(e) => setUser(e.target.value)} />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()} >
                    Login
                </Button>
            </Form>
        </div>
    );
}