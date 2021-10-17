import React from 'react';
import { Link } from 'react-router-dom';
import './assets/Header.css'

function Header() {
    return (
        <div>
            <header>
                <h2><Link className="link home" to="/">Human Generator</Link></h2>
                
                <h1>Test3 Colab</h1>
            </header>
        </div>
    )
}

export default Header
