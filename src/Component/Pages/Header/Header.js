import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Header = () => {
    const handleLogin=()=>{
       console.log('working'); 
    }
    return (
        <div className='mt-4'>
            <ButtonGroup >
                <Button onClick={handleLogin} variant="secondary">Login</Button>
                <Button variant="secondary">Register</Button>
                
            </ButtonGroup>
        </div>
    );
};

export default Header;