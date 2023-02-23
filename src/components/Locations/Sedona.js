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
    background-color: #FFBD35;
}
#two{
    background-color: #1A8AAF;
}
#three{
    background-color: #D58668;
}
#four{
    background-color: #11383F;
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
    scrollbar-width:thin;

}

#text{
    text-shadow: 2px 2px 8px #000000;
    font-size:20px;
    color:white;
}


`

const Sedona = () => {
    return (
        <TripCss>
            <div id='sedonaContainer'>

                <div id='left'>
                        <div id="one"><p>#FFBD35</p></div>
                        <div id="two"><p>#1A8AAF</p></div>
                        <div id="three"><p>#D58668</p></div>
                        <div id="four"><p>#11383F</p></div>
                </div>
                <div></div>
                <div id='middle'>
                    <span id='text'>
                        The rich Native American culture in Sedona is unmistakable. 
                        It's strange to think that prior to around 200 years ago, 
                        these incredible areas were only known to Native Americans. 
                        It makes you have a certain respect. 
                        <br></br>
                        <br></br>
                    
                        What once was seen by only a handful of people now has a long wait line if you get there at the wrong time! 
                        (we got to Devil's Bridge before most and still waited 45 mins to get to the historic spot, 
                        and on our way out we were passing groups and groups of people). 
                        Its just crazy to me to think how much that area has changed in the past 50 years.
                        <br></br>
                        <br></br>
                    </span>

                    <img id= 'mainimg' src='images/Sedona/1.jpg' alt='mainimg'></img>
                    <img id= 'mainimg' src='images/Sedona/2.jpg' alt='mainimg'></img>
                    <img id= 'mainimg' src='images/Sedona/3.jpg' alt='mainimg'></img>
                    <img id= 'mainimg' src='images/Sedona/4.jpg' alt='mainimg'></img>
                    <img id= 'mainimg' src='images/Sedona/5.jpg' alt='mainimg'></img>
                    <img id= 'mainimg' src='images/Sedona/6.jpg' alt='mainimg'></img>                
                </div>
                <div id='right'>
                </div>
                
                
            </div>
        </TripCss>
    )
}

export default Sedona;