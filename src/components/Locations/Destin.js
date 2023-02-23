import React from 'react';
import styled from 'styled-components';

const TripCss = styled.div`
#sedonaContainer {
    height: 84vh;
    width: 90vw;
    display: grid;
    grid-template-columns: 20% 4% 72% 4%;
}


  
#mainimg{
    width:100%;
    margin-top: 10px;
}

#one{
    background-color: #E1D5CC;
}
#two{
    background-color: #B4BBCE;
}
#three{
    background-color: #79A0A5;
}
#four{
    background-color: #5076C1;
}

#left{
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 15% 15% 25% 45%;
}

#left div{
    position: relative;
}

#middle{
    display: grid;
    margin-top:1vh;
    overflow-y:auto
}

#text{
    text-shadow: 2px 2px 8px #000000;
    font-size:20px;
    color:white;
}



`

const Destin = () => {
    return (
        <TripCss>
            <div id='sedonaContainer'>

                <div id='left'>
                        <div id="one"><p>#E1D5CC</p></div>
                        <div id="two"><p>#B4BBCE</p></div>
                        <div id="three"><p>#79A0A5</p></div>
                        <div id="four"><p>#5076C1</p></div>
                </div>
                <div></div>
                <div id='middle'>
                    <span id='text'>
                        Wintpark CO, 2022. 
                        <br></br>
                        <br></br>
                        Saturday was the perfect day. WinterPark was hit with a foot of fresh powder.
                        <br></br>
                        <br></br>
                        I took lessons and the instructor took us to some of the best places through the trees in fresh powder. 
                        <br></br>
                        <br></br>
                        Can't wait to go skiing again with this group. Two of them had not skied for more than 6 hours in their 
                        life so the learning curve for them was quite steep. We had a few close calls... but once we all got 
                        stopping down, we we were able to hit the better runs. 
                    </span>
                    <img id= 'mainimg' src='images/destin/4.jpg' alt='mainimg'></img>
                    <img id= 'mainimg' src='images/destin/6.jpg' alt='mainimg'></img>
                    <img id= 'mainimg' src='images/destin/5.jpg' alt='mainimg'></img>  
                    <img id= 'mainimg' src='images/destin/1.jpg' alt='mainimg'></img>
                    <img id= 'mainimg' src='images/destin/2.jpg' alt='mainimg'></img>
                    <img id= 'mainimg' src='images/destin/3.jpg' alt='mainimg'></img>
                    <img id= 'mainimg' src='images/destin/7.jpg' alt='mainimg'></img>
                    <img id= 'mainimg' src='images/destin/8.jpg' alt='mainimg'></img>  
                    <img id= 'mainimg' src='images/destin/9.jpg' alt='mainimg'></img>
                    <img id= 'mainimg' src='images/destin/10.jpg' alt='mainimg'></img>
                    
                                  
                </div>
                <div id='right'>
                </div>
                
                
            </div>
        </TripCss>
    )
}

export default Destin;