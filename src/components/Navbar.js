import React , {useState} from "react";
import logo from '../images/logo.png'

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return(
        <nav className="header">
            <img src={logo} className='nav-logo' alt="logo"></img>
            <h1 className="slogan"> Empowering Farmers through technology </h1>
            <button  onClick={toggleMenu} className="btn">Services</button> 
            {isMenuOpen && (
            <div className="dropdown-menu">
                <ul>
                    <li><a href="https://www.google.com/">Disease Detection</a></li>
                    <li><a href="https://www.google.com/">Rent or Lease</a></li>
                    <li><a href="https://www.google.com/">Know your Crop</a></li>
                </ul>
            </div>
            )}
        </nav>
    )
}