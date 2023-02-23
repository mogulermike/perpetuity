import React from 'react';
import styled from 'styled-components';

const TripCss = styled.div`
#sedonaContainer {
    height: 84vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 20% 4% 72% 4%;
}


  
#mainimg{
    width:100%;
    margin-top: 10px;
}

#one{
    background-color: #A9A29C;
}
#two{
    background-color: #CB4850;
}
#three{
    background-color: #395323;
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
    overflow-y:auto
}

#text{
    text-shadow: 2px 2px 8px #000000;
    font-size:20px;
    color:white;
}


`

const Wildlife = () => {
    return (
        <TripCss>
            <div id='sedonaContainer'>

                <div id='left'>
                        <div id="one"><p>#A9A29C</p></div>
                        <div id="two"><p>#CB4850</p></div>
                        <div id="three"><p>#395323</p></div>
                        <div id="four"><p>#303030</p></div>
                </div>
                <div></div>
                <div id='middle'>
                    <span id='text'>
                        Wildlife Photography 2022. 
                        <br></br>
                        <br></br>
                        I love capturing nature. There is no drama. Nature can be brutal, it's all survival of the fittest. It's strangely simple
                        <br></br>
                        <br></br>
                        I can't wait to travel again and capture some more creatures. 
                        <br></br>
                        <br></br>
                        I just bought this zoom lense to help with the far shots. 
                        <br></br>
                        &nbsp; &nbsp; -Canon EF-S 55-250mm f/4.0-5.6 STM IS Lens
                    </span>
                    <img id= 'mainimg' src='images/wildlife/3.jpg' alt='mainimg'></img>
                    <img id= 'mainimg' src='images/wildlife/4.jpg' alt='mainimg'></img>
                    <img id= 'mainimg' src='images/wildlife/2.jpg' alt='mainimg'></img>  
                    <img id= 'mainimg' src='images/wildlife/1.jpg' alt='mainimg'></img>
                                  
                </div>
                <div id='right'>
                </div>
                
                
            </div>
        </TripCss>
    )
}

export default Wildlife;