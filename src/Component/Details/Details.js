import React, { useState } from 'react';
import './Details.css'

const Details = (props) => {

    //set state for break
    const [breakTime, setBreakTime] = useState(0)

    const { practiceTime } = props
    console.log(props)

    let time = 0
    for (const minute of practiceTime) {

        time = time + minute.time

    }

    return (
        <div className='details'>
            <div className='break'>
                <h3>Add a Break</h3>
                <div className='btn-card'>
                    <button className='btn2' onClick={() => setBreakTime(10)}>10m</button>
                    <button className='btn2' onClick={() => setBreakTime(20)} >20m</button>
                    <button className='btn2' onClick={() => setBreakTime(30)}>30m</button>
                    <button className='btn2' onClick={() => setBreakTime(40)}>40m</button>
                </div>
            </div>
            <h3 className='practice-details' style={{ marginTop: '50px' }}>Practice Details</h3>
            <h4 className='practice-time:' style={{ marginLeft: '15px' }}>practice time: <span style={{ color: "#7D93A1" }}>{time} Minutes</span></h4>
            <h4 className='break-time:' style={{ marginLeft: '15px' }}>Break time: <span style={{ color: "#7D93A1" }}>{breakTime} Minutes</span></h4>

            <button className='activity-btn'>Activity Complete</button>

        </div>
    );
};

export default Details;