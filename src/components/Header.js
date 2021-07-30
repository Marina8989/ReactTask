import React from 'react';
import Button from './Button';

const Header = ({onAdd}) => {
    return (
        <div className="header">
            <h2>Task Tracker</h2>
            <Button onAdd={onAdd} color={'green'}/>
        </div>
    )
}

export default Header