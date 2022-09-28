import React from 'react';
import './Practice.css'

const Practice = (props) => {
    const { img, name, desc, time } = props.practice
    return (

        <div className='card'>
            <img src={img} alt="img" />
            <h4 style={{ marginLeft: '10px' }}>{name}</h4>
            <p style={{ marginLeft: '10px' }}>{desc.slice(0, 70)}...</p>
            <h5 style={{ marginLeft: '10px' }}>Time: {time} Minutes</h5>
            <button className='btn'>Add to list</button>
        </div>
    );
};

export default Practice;