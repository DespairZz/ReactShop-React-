import React from 'react';
import './HeaderMenu.css';
import logo from './logo.png';
import Button from './Button';
import { Link } from 'react-router-dom';

export default function HeaderMenu() {
    return (
        <div className="headerBody">

            <Link to="/">
                <Button menu>Home</Button>
            </Link>
            
            <img src={logo} alt="Logo" />

            <Link to="/cart" className="onecart">
                 <Button cart>
                      <span className="cart--logo">3</span> 
                 </Button>
            </Link>
            
        </div>

        
        );
}

