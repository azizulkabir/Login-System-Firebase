import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link, Navigate } from 'react-router-dom';

const Header = () => {
    const handleLogin=()=>{
       <Navigate to = "/login" replace={true}/>
    }
    return (
        <div className='mt-4 text-center'>
            <ButtonGroup >
                
                <Link to='/login' className='btn btn-success'>Login</Link> <br></br>
                <Link to='/register' className='btn btn-success'>Register</Link>
                
            </ButtonGroup>
        </div>
    );
};

export default Header;