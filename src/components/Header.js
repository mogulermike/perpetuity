import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import AuthIcon from './AuthIcon';

const HeaderCSS = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85vw;
  height: 70px;
  color: white;
  position: relative; /* Position relative to contain the dropdown */

  .burger-icon {
    font-size: 28px;
    cursor: pointer;
    display: none; /* Hide by default, show on mobile */
  }

  .menu {
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      color: white;
      margin: 0 15px;
      white-space: nowrap;
    }

    .active {
      color: red;
    }
  }

  @media (max-width: 768px) {
    .burger-icon {
      display: block;
    }

    .menu {
      display: ${(props) => (props.isOpen ? 'block' : 'none')};
      position: absolute;
      top: 70px;
      right: 0px;
      background-color: #333;
      width: 85%;
      text-align: right;
      padding: 10px 20px;
      z-index: 1000; /* Ensures the menu is in front of other elements */

      a {
        display: block;
        margin: 10px 0;
      }
    }
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const location = useLocation(); // Get the current location
  // console.log the location to see the pathname
  console.log(location);

  const isFlagsApp = location.pathname === '/flags'; // Adjust the path as needed

  return (
    <HeaderCSS isOpen={isOpen}>
      <div id='name'>
        <h1>MM</h1>
      </div>
      <MenuIcon className='burger-icon' onClick={toggleMenu} />

      <div className='menu'>
        {isFlagsApp && <AuthIcon />}
        <NavLink to='/home' activeClassName='active' onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to='/projects' activeClassName='active' onClick={closeMenu}>
          Projects
        </NavLink>
        <NavLink to='/photography' activeClassName='active' onClick={closeMenu}>
          Photography
        </NavLink>
      </div>
    </HeaderCSS>
  );
};

export default Header;
