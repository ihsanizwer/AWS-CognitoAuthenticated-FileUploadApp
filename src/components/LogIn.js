import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import UserPool from '../UserPool';
import { CognitoUser, AuthenticationDetails} from "amazon-cognito-identity-js";
import { Navigate } from 'react-router-dom';


export const LogIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        const user = new CognitoUser({
            Username: email,
            Pool: UserPool,
        });

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
        });
    
        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                localStorage.setItem('token', true);
                console.log("success");
                window.location.replace("MembersOnly")
            },
            onFailure: (err) => {
                console.error("OnFailure: ", err);
            },
            newPasswordRequired: (data) => {
                console.log("newPasswordRequired: ", data)
            }
        })
    };

  return (
    <div>

                <Card>
                <Card.Header><h3>Log In page</h3></Card.Header>
                <Card.Body>
                    <br/>
                    <Card.Title>Please Login to Continue to the Members Only Section.</Card.Title>
                    <br/><br/>
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" placeholder="Username" htmlSize="0.5" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" htmlSize="0.5" value={password} onChange={(event) => setPassword(event.target.value)}/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
 
  </div>
  )
}
