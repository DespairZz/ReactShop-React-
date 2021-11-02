import React from 'react';

const Button = ({onClick, menu, cart, sorting, add, children}) => {
        return (
            <button onClick={onClick} className={`button 
                 ${menu ? 'button--menu' : ''} 
                 ${cart ? 'button--cart' : ''} 
                 ${sorting ? 'button--sorting' : ''} 
                 ${add ? 'button--add' : ''}
               
                `}>
                {children}
            </button>
        );
}

export default Button;