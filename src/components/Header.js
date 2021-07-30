import React from 'react';
import Button from './Button';

const Header = () => {
    const onClick = () => {
        console.log('clicked btn');
    }
    return (
        <div className="header">
            <h2>Task Tracker</h2>
            <Button onClick={onClick} color={'green'}/>
        </div>
    )
}

export default Header