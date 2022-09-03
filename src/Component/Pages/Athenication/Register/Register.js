import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(email,password);
    }
    const handleEmail =(event)=>{
        event.preventDefault();
        setEmail(event.target.value)
    }
    const handlePassword =(event)=>{
        event.preventDefault();
        setPassword(event.target.value)
    }

    return (
        <div >
            <div className='w-50 mx-auto my-3'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
        </div>
    );
};

export default Register;