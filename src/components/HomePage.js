import React from 'react';
import styled from 'styled-components';

const HomeCSS = styled.div`
img {
    height:auto;
    width:69vw;
}
`




export default function HomePage() {

    return (
        <HomeCSS>
            <div>  
                { <img id= 'backgroundImg' src='../images/5.jpg' alt='backgroundImg'></img> }
            </div>
    
        </HomeCSS>
    )
};

