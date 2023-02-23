import React from 'react';
import styled from 'styled-components';
import FishItem from './FishItem';

const WrapperDiv = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 100%;
justify-content: center;
align-content: center;
margin-top: 40px;
`
const fishInfo = [
    {
        name: 'Florida Pompano',
        aliases: 'Florida Pompano also commonly known as Sunfish, Gulf Pompano or simply “Pompano”.',
        fishimg: "./images/pompano.png",
        season: "All Year Round",
        size: '11" Fork Length Min.',
        limit: "6 per person"
    },
    {
        name: 'Whiting',
        aliases: 'Sea Mullet, Gulf Kingfish',
        fishimg: "./images/whiting.png",
        season: "All Year Round",
        size: "unregulated",
        limit: "unregulated",
        notes: "Whiting can have a slight iodine flavor that can be easily removed with a salt water bath or by freezing overnight."
    },
    {
        name: 'Red Drum',
        aliases: 'Redfish, red bass, spottail bass, channel bass, puppy drum',
        fishimg: "./images/redfish.png",
        season: "All Year Round",
        size: '18" min, 27" max',
        limit: "1 or 2 depending on zone",
        notes: "Can have harmless parasites (not for squeemish)"

    },
    {
        name: 'Spanish Mackerel',
        aliases: 'Redfish, red bass, spottail bass, channel bass, puppy drum',
        fishimg: "./images/spanish.png",
        season: "All Year Round",
        size: '18" min, 27" max',
        limit: "1 or 2 depending on zone",
        notes: "Can have harmless parasites (not for squeemish)"

    }
]

export default function Fish() {
    return (
        <div id = 'mainDiv'>
            <WrapperDiv>
                {fishInfo.map((item, id) => {
                    return <div key={id}>
                        <FishItem item={item} />
                    </div>
                })}
            </WrapperDiv>
        </div>
    )
}