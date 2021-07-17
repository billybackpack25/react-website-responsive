import React from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';
import './NavBar.css';


const NavBar = () => {
    // Toggle Nav bar on click
    const [toggleMenu, setToggleMenu] = React.useState(false);
    const [button, setButton] = React.useState(true);

    // Hide the button if on a mobile device - Start
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    React.useEffect(() => {
        showButton();
    }, [button])

    window.addEventListener('resize', showButton);
    // ----------------------------------------------
    
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={() => setToggleMenu(false)}>
                    TRVL <i className="fab fa-typo3" />
                </Link>
                <div className="menu-icon" onClick={() => setToggleMenu(prev => !prev)} >
                    <i className={toggleMenu ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                {/** After clicking the nav, close it down */}
                <ul className={toggleMenu ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={() => setToggleMenu(false)}>
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/services" className="nav-links" onClick={() => setToggleMenu(false)}>
                            Services
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/products" className="nav-links" onClick={() => setToggleMenu(false)}>
                            Products
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/sign-up" className="nav-links-mobile" onClick={() => setToggleMenu(false)}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
    );
};

export default NavBar;