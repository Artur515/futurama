import React, {useState} from 'react';
import './menu.scss'
import {Link} from "react-router-dom";

const Menu = () => {
    const [check, setCheck] = useState('')
    const handleCheck = () => {
        setCheck(!check)
    }

    // console.log(check)
    return (
        <nav>
            <div className="nav-wrap">
                <input type="checkbox" id="hamburger" checked={check} onChange={() => setCheck(!check)}/>
                <label htmlFor="hamburger" className="hamburger">
                    <span></span>
                </label>
                <div className="brand">
                    Futurama
                </div>
                <label htmlFor="hamburger" className="menu-bg">
                    <Link to='/futurama/characters' onClick={handleCheck}>Heroes</Link>
                    <Link to='/futurama/cast' onClick={handleCheck}>Cast</Link>
                    <Link to='/futurama/episodes' onClick={handleCheck}>Episodes</Link>
                    <Link to='/'>Close</Link>
                </label>
            </div>
        </nav>
    );
};

export default Menu;