import  { useState } from 'react';
import Logo from '../../assets/logo.png';
import './header.css';
import MenuIcon from '../../assets/menu.png';

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <div className="header">
        <img src={Logo} alt="img" className="logo" />

        <div className="mobile_menu_icon" onClick={toggleMenu}>
          <img src={MenuIcon} alt="menu" className="menu_icon" />
        </div>

        <ul className={`header_menu ${menuVisible ? 'visible' : ''}`}>
          <li>Home</li>
          <li>Programs</li>
          <li>why us</li>
          <li>Plans</li>
          <li>Testimonials</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
