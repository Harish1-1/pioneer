
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggle = () => setIsMenuOpen(!isMenuOpen);
    
    return (
        <>
            <button 
                className="btn btn-primary" 
                type="button" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#offcanvasNavbar" 
                aria-controls="offcanvasNavbar"
                onClick={handleToggle}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div 
                className={`offcanvas offcanvas-start ${isMenuOpen ? 'show' : ''}`} 
                tabIndex="-1" 
                id="offcanvasNavbar" 
                aria-labelledby="offcanvasNavbarLabel" 
                style={{visibility: isMenuOpen ? 'visible' : 'hidden'}}
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                    <button 
                        type="button" 
                        className="btn-close text-reset" 
                        data-bs-dismiss="offcanvas" 
                        aria-label="Close"
                        onClick={handleToggle}
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" onClick={handleToggle}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/population-graph" onClick={handleToggle}>Population Graph</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/crypto-prices" onClick={handleToggle}>Crypto Prices</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/metamask-wallet" onClick={handleToggle}>MetaMask Wallet</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavigationBar;
