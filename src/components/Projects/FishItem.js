import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
display: flex;
padding: 10px;
margin: 10px;
line-height: 100%;
border-radius: 18px;
background: linear-gradient(145deg, #ffffff, #e6e6e641);
box-shadow:  5px 5px 10px #999999, 
             -5px -5px 10px #ffffff;
`


export default function FishItem(props) {
    return (
        
        <WrapperDiv>
            <div id = "fishWrapper">
                <div id="picDiv">
                <h1>{props.item.name}</h1>
                    <img id="fishImg" src={props.item.fishimg} alt="fishimg"></img>
                </div>

                <div id="infoDiv">
                    <h3>Aliases: <span>{props.item.aliases}</span></h3>
                    <h3>2022 Season: <span>{props.item.season}</span></h3>
                    <h3>Size: <span>{props.item.size}</span></h3>
                    <h3>Limit: <span>{props.item.limit}</span></h3>
                    <h3>Notes: <span>{props.item.notes}</span></h3>
                </div>
            </div>
        </WrapperDiv>
        
    )
}