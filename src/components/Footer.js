import React from 'react';
import styled from 'styled-components';



const LogoImg = styled.img`
height: 100%;
margin-left: 0vw;
margin-top: 0vw;
}

`





const Footer = () => {
    return (
            <div id="footer">
                <LogoImg src="./images/instalogo.png" alt="logo" />            
            </div>
    )
}

export default Footer;