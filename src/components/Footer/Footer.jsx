import React from 'react';
import './Footer.style.css';

const Footer = () => {
    return (
        <footer>
            <div className="header-container, container">
                <div>
                    Copyright: Anik Das &copy;2021.
                    
                </div>
                <div className="textRight">
                    Built with
                    <a
                        href="https://reactjs.org/docs/create-a-new-react-app.html">
                            Create React App</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
