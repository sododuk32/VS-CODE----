import React from 'react';
import './style.css';
import Logo from '../img/logog.png';
const Nav = () => {
    return (
        <div className="navBar">
            <div className="navList">
                <ul className="list">
                    <li className="navLogo">
                        <img className="logoImage" alt="iPhone_01" src={Logo} />
                    </li>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>ipad</li>
                    <li>iPhone</li>
                    <li>watch</li>
                    <li>AirPods</li>
                    <li>TV & Home</li>
                    <li>Only on Apple</li>
                    <li>Accessories</li>
                    <li>Support</li>
                    <li>search</li>
                    <li>user</li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
