import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import app from '../../../../firebase.init';
import SharedComponent from '../../../SharedComponent/SharedComponent';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .catch(error => {
                const errorMassage = error.message;
                setError(errorMassage);
            })
        console.log(user.displayName);
    }


    const handleEmail = (event) => {
        event.preventDefault();
        const email = event.target.value;
        setEmail(email);
    }
    const handlePassword = (event) => {
        event.preventDefault();
        const password = event.target.value;
        setPassword(password);
    }
    //google login//
    const handleGoogleLogin=(event)=>{
        event.preventDefault();
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);
        signInWithPopup(auth, provider)
        .then(result=>{
            const user =result.user;
            setUser(user);
        })
        .catch(error=>{
            const errorMassage = error.message;
            setError(errorMassage); 
        })
        
    }
    //github login //
    const handleGithubLogin=(event)=>{
        event.preventDefault();
        const provider = new GithubAuthProvider();
        const auth = getAuth(app);
        signInWithPopup(auth, provider)
        .then(result=>{
            const user= result.user;
            setUser(user);
            console.log(user);
        })
        .catch(error=>{
            const errorMassage = error.message;
            setError(errorMassage);
        })

        

    }

    return (
        <div>
            <h1 className='text-center'>Login Now</h1>
            <div className='w-50 mx-auto my-3'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                        { }

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </Form>

                <h1>{user.email}</h1>
                <h1>{error}</h1>
            </div>
            <SharedComponent></SharedComponent>

            <div className='text-center'>
                <button onClick={handleGoogleLogin} >Google Login</button>
                <button onClick={handleGithubLogin}>Github Login</button>
            </div>
        </div>
    );
};

export default Login;