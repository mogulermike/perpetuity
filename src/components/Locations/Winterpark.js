import React from 'react';
import styled from 'styled-components';

const TripCss = styled.div`
#sedonaContainer {
    height: 91vh;
    width: 95vw;
    display: grid;
    grid-template-columns: 20% 4% 72% 4%;
    margin:0px, 10px, 0px, 10px;
}
  
#mainimg{
    width:100%;
    margin-top: 10px;
}

#one{
    background-color: #E2E7F1;
}
#two{
    background-color: #3767AB;
}
#three{
    background-color: #38486B;
}
#four{
    background-color: #303030;
}

#left{
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 15% 15% 25% 45%;
}

#middle{
    display: grid;
    margin-top:1vh;
    overflow-y:auto;
    scrollbar-width:none;
}

#text{
    text-shadow: 2px 2px 8px #000000;
    font-size:20px;
    color:white;
}


`

const Winterpark = () => {
    return (
        <TripCss>
            <div id='sedonaContainer'>

                <div id='left'>
                        <div id="one"><p>#E2E7F1</p></div>
                        <div id="two"><p>#3767AB</p></div>
                        <div id="three"><p>#38486B</p></div>
                        <div id="four"><p>#303030</p></div>
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
                    <img id= 'mainimg' src='images/winterpark/6.jpg' alt='mainimg'></img>
                    <img id= 'mainimg' src='images/winterpark/4.jpg' alt='mainimg'></img>
                    <img id= 'mainimg' src='images/winterpark/5.jpg' alt='mainimg'></img>  
                    <img id= 'mainimg' src='images/winterpark/1.jpg' alt='mainimg'></img>
                    <img id= 'mainimg' src='images/winterpark/2.jpg' alt='mainimg'></img>
                    <img id= 'mainimg' src='images/winterpark/3.jpg' alt='mainimg'></img>
                    
                                  
                </div>
                <div id='right'>
                </div>
                
                
            </div>
        </TripCss>
    )
}

export default Winterpark;