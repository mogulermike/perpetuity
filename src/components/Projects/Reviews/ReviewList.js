import React from 'react';
import styled from 'styled-components';
import Reviews from './Reviews';

const reviewInfo = [
    {
        url: '/Severance',
        source: 'images\Projects\Reviews\severance.jpg'
    },
    {
        url: '/Callister',
        source: 'images\Projects\Reviews\callister.jpg'
    },
    {
        url: '/Project Hail Mary',
        source: 'images\Projects\Reviews\phm.jpg'
    }
]

export default function ReviewList() {
    return (
        <div id = 'mainDiv'>
                {reviewInfo.map((item, id) => {
                    return <div key={id}>
                        <Reviews item={item}/>
                    </div>
                })}
        </div>
    )
}