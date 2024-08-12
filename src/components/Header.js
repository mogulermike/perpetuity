import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderCSS = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  width: 85vw;
  height: 70px;
  // position: fixed;
  // top: 0;
  // padding-top: 15px;

  a {
    text-decoration: none;
    color: white;
    margin: 10px 5px;
    white-space: nowrap;
  }

  .name {
    display: flex;
  }

  .active {
    color: #ffbd35;
    text-align: center;
  }
`;

// nav .active {
//     background-color: #FFBD35;
//     color: rgb(45, 45, 45);
//     border: 2px solid rgb(28, 28, 28);
//     text-align: center;
//     padding: 5px 5px;
//   }
//   nav a {
//     text-decoration: none;
//     color: white;
//     border: 2px solid rgb(130, 130, 130);
//     padding: 6px;
//     border-radius: 4px;
//     margin: 10px 5px;
//     white-space: nowrap;
//   }

//   nav {
//     display: flex;
//     align-content: center;
//     justify-content: space-between;
//     width: 300vw;
//     margin-right: 8vw;
//     margin-left: 8vw;
//   }

const Header = () => {
  return (
    <HeaderCSS>
      <div id='name'>
        <h1>Michael Manning</h1>
      </div>

      <div>
        <NavLink to='/home' activeClassName='active'>
          Home
        </NavLink>
        <NavLink to='/projects' activeClassName='active'>
          Projects
        </NavLink>
        {/* <NavLink to='/fish' activeClassName="active">Fishing</NavLink> */}
        <NavLink to='/photography' activeClassName='active'>
          Photography
        </NavLink>
      </div>
    </HeaderCSS>
  );
};

export default Header;
