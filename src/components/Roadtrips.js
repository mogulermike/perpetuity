import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const TripCss = styled.div`


#tripsContainer{
    position:relative;
    display:flex;
    flex-wrap:wrap;
    width:90%vw;
    margin: 20px;
    overflow-y:auto;
    scrollbar-width:none;
    justify-content:center;
}

#location{
    position: absolute;
    top: 8px;
    left: 16px;
    text-shadow: 6px 6px 8px #000000;
    font-size:40px;
    color:white;
}
#year{
    position: absolute;
    bottom: -20px;
    right:-8px;
    text-shadow: 4px 4px 8px #000000;
    font-size:25px;
    color:white;
}
#tripImg{
    height:auto;
    width:550px;
}


.navClick{
    border: 4px solid transparent;
    height:366.66px;
    margin: 5px 5px;
}
.navClick:hover{
    position:relative;
    background: #e1e1e1;
    border: 4px solid #FFBD35;
}

#one{
    position:relative;
}
#two{
    position:relative;
}
#three{
    position:relative;
}
#four{
    position:relative;
}
`
const Roadtrips = () => {
    return (
        <TripCss>
        <div id='tripsContainer'>
            <div id="one" className='navClick'>
                <NavLink to='/sedona' activeClassName="active">
                    <img id= 'tripImg' src='images/Sedona/1.jpg' alt='tripImg'></img>
                    <div id="location"><h1>Sedona</h1>
                        <div id="year"><h1>2021</h1></div>
                    </div>
                </NavLink>
            </div>
            <div id="two" className='navClick'>
                <NavLink to='/winterpark' activeClassName="active">
                    <img id= 'tripImg' src='images/winterpark.jpg' alt='tripImg'></img>
                        <div id="location"><h1>WinterPark</h1>
                            <div id="year"><h1>2022</h1></div>
                        </div>
                </NavLink>
            </div>
            <div id="three" className='navClick'>
                <NavLink to='/destin' activeClassName="active">
                    <img id= 'tripImg' src='images/Destin.jpg' alt='tripImg'></img>
                        <div id="location"><h1>Destin</h1>
                            <div id="year"><h1>2022</h1></div>
                        </div>
                </NavLink>
            </div>
            <div id="four" className='navClick'>
                <NavLink to='/wildlife' activeClassName="active">
                    <img id= 'tripImg' src='images/Wildlife/4.jpg' alt='tripImg'></img>
                        <div id="location"><h1>Wildlife</h1>
                            <div id="year"><h1>2022</h1></div>
                        </div>
                </NavLink>
            </div>
        </div>
        <div id='navContainer'>
            
        </div>
        </TripCss>
    )
}

export default Roadtrips;