import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const CustomCSS = styled.div`
#reviewsContainer{
    position:relative;
    display:flex;
    flex-wrap:wrap;
    width:90%vw;
    margin: 20px;
    justify-content:center;
}


#reviewImg{
    height:300px;
    width:200px;
}


.navClick{
    border: 4px solid transparent;
    height:300px;
    margin: 5px 5px;
}
.navClick:hover{
    position:relative;
    background: #e1e1e1;
    border: 4px solid #ffb703;
}
`

export default function Reviews(props) {
    return (
        <CustomCSS>
        <div id="reviewsContainer">
            <div id="two" className='navClick'>
                <NavLink to='/severance' activeClassName="active">
                    <img id= 'reviewImg' src='images\Projects\Reviews\severance.jpeg' alt='reviewImg'></img>    
                </NavLink>
            </div>
            <div id="one" className='navClick'>
                <NavLink to='/callister' activeClassName="active">
                    <img id= 'reviewImg' src='images\Projects\Reviews\callister.jpg' alt='reviewImg'></img>
                </NavLink>
            </div>
            <div id="two" className='navClick'>
                <NavLink to='/project hail mary' activeClassName="active">
                    <img id= 'reviewImg' src='images\Projects\Reviews\phm.jpg' alt='reviewImg'></img>
                </NavLink>
            </div>
            <div id="two" className='navClick'>
                <NavLink to='/artemis' activeClassName="active">
                    <img id= 'reviewImg' src='images\Projects\Reviews\artemis.jpg' alt='reviewImg'></img>
                </NavLink>
            </div>
            <div id="two" className='navClick'>
                <NavLink to='/martian' activeClassName="active">
                    <img id= 'reviewImg' src='images\Projects\Reviews\martian.jpg' alt='reviewImg'></img>
                </NavLink>
            </div>
            <div id="two" className='navClick'>
                <NavLink to='/playtest' activeClassName="active">
                    <img id= 'reviewImg' src='images\Projects\Reviews\playtest.jpg' alt='reviewImg'></img>
                </NavLink>
            </div>
            <div id="two" className='navClick'>
                <NavLink to='/queensgambit' activeClassName="active">
                    <img id= 'reviewImg' src='images\Projects\Reviews\queensgambit.jpg' alt='reviewImg'></img>    
                </NavLink>
            </div>
            <div id="one" className='navClick'>
                <NavLink to='/hollowknight' activeClassName="active">
                    <img id= 'reviewImg' src='images\Projects\Reviews\hollowknight.jpg' alt='reviewImg'></img>
                </NavLink>
            </div>
            <div id="two" className='navClick'>
                <NavLink to='/nosedive' activeClassName="active">
                    <img id= 'reviewImg' src='images\Projects\Reviews\nosedive.jpg' alt='reviewImg'></img>
                </NavLink>
            </div>
            <div id="two" className='navClick'>
                <NavLink to='/bettercallsaul' activeClassName="active">
                    <img id= 'reviewImg' src='images\Projects\Reviews\bettercallsaul.jpg' alt='reviewImg'></img>
                </NavLink>
            </div>
            <div id="two" className='navClick'>
                <NavLink to='/ozark' activeClassName="active">
                    <img id= 'reviewImg' src='images\Projects\Reviews\ozark.jpg' alt='reviewImg'></img>
                </NavLink>
            </div>
            <div id="two" className='navClick'>
                <NavLink to='/breakingbad' activeClassName="active">
                    <img id= 'reviewImg' src='images\Projects\Reviews\breakingbad.jpg' alt='reviewImg'></img>
                </NavLink>
            </div>
        </div>

        </CustomCSS>
    )
}

