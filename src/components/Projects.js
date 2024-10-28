import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const CustomCSS = styled.div`
  #projectsContainer {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 90%vw;
    margin: 20px;
    justify-content: center;
  }

  #bigTitle {
    position: absolute;
    top: 8px;
    left: 16px;
    text-shadow: 6px 6px 8px #000000;
    font-size: 40px;
    color: white;
  }
  #littleTitle {
    position: absolute;
    bottom: -20px;
    right: -8px;
    text-shadow: 4px 4px 8px #000000;
    font-size: 25px;
    color: white;
  }
  #projectImg {
    height: 366.66px;
    width: 550px;
  }

  .navClick {
    border: 4px solid transparent;
    height: 366.66px;
    margin: 5px 5px;
  }
  .navClick:hover {
    position: relative;
    background: #e1e1e1;
    border: 4px solid #ffbd35;
  }

  #one {
    position: relative;
  }
  #two {
    position: relative;
  }
  #three {
    position: relative;
  }
  #four {
    position: relative;
  }
`;

const Projects = () => {
  return (
    <CustomCSS>
      <div id='projectsContainer'>
        <div id='two' className='navClick'>
          <NavLink
            to='/reviews'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <img
              id='projectImg'
              src='images/projects/reviews.jpeg'
              alt='projectImg'
            ></img>
            <div id='bigTitle'>
              <h1>Reviews</h1>
            </div>
          </NavLink>
        </div>
        {/* <div id="one" className='navClick'>
                <NavLink to='/pallette' className={({ isActive }) => (isActive ? 'active' : '')} >
                    <img id= 'projectImg' src='images/projects/pallette.jpg' alt='projectImg'></img>
                        <div id="bigTitle"><h1>Color</h1>
                            <div id="littleTitle"><h1>Pallette</h1></div>
                        </div>
                </NavLink>
            </div> */}
        <div id='two' className='navClick'>
          <NavLink
            to='/fish'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <img
              id='projectImg'
              src='images/projects/fishing.jpg'
              alt='projectImg'
            ></img>
            <div id='bigTitle'>
              <h1>Florida</h1>
              <div id='littleTitle'>
                <h1>Fish</h1>
              </div>
            </div>
          </NavLink>
        </div>
        <div id='two' className='navClick'>
          <NavLink
            to='/flags'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <img
              id='projectImg'
              src='images/projects/flagsGame.jpg'
              alt='projectImg'
            ></img>
            <div id='bigTitle'>
              <h1>Flag</h1>
              <div id='littleTitle'>
                <h1>Game</h1>
              </div>
            </div>
          </NavLink>
        </div>
      </div>

      <div id='navContainer'></div>
    </CustomCSS>
  );
};

export default Projects;
