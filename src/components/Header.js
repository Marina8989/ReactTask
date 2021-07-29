import React, {useState} from 'react';
import Button from './Button';

function Header() {
    const [text, setText] = useState(true);

    const onClick = () => {
        console.log('click');
        setText(!text);
    }
    return (
        <div className='header'>
            <h2>Task Tracker</h2>
            <Button value={text} onClick={onClick} />
        </div>
    )
}

export default Header
