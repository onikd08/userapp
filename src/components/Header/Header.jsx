import React from 'react';
import logo from '../../assets/images/logo.png';
import reactLogo from '../../assets/images/react.svg';
import './Header.style.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div>
                    <img className="logo" src={logo} alt="Logo" />
                    Integrify React Pre-Assignment Full-Stack Course

                </div>
                <div className="textRight">
                    <img src={reactLogo} alt="React" className="reactLogo" />
                </div>
            </div>
        </header>
    );
};

export default Header;
