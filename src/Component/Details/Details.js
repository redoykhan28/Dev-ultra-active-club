import React from 'react';
import './Details.css'

const Details = (props) => {

    const { practiceTime } = props
    console.log(props)

    let time = 0
    for (const minute of practiceTime) {

        time = time + minute.time

    }

    return (
        <div className='details'>
            <h3>Practice Details</h3>
            <h4 style={{ marginLeft: '15px' }}>practice time: <span style={{ color: "#7D93A1" }}>{time} Minutes</span></h4>
        </div>
    );
};

export default Details;