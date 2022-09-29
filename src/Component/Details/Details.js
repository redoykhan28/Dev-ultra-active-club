import React, { useEffect, useState } from 'react';
import { addDb } from '../../Utilities/StorageDb';
import './Details.css'

const Details = (props) => {

    //set state for break
    const [breakTime, setBreakTime] = useState(0)

    useEffect(() => {

        let store = localStorage.getItem('break-time')
        let storeParse = JSON.parse(store);
        console.log(storeParse)

    }, [breakTime])

    const { practiceTime } = props
    console.log(props.practice)

    let time = 0
    for (const minute of practiceTime) {

        time = time + minute.time

    }

    const handlebtn = (id) => {

        setBreakTime(id);

        addDb(id);

    }



    return (
        <div className='details'>
            <div className='break'>
                <h3>Add a Break</h3>
                <div className='btn-card'>
                    <button className='btn2' onClick={() => handlebtn(10)}>10m</button>
                    <button className='btn2' onClick={() => handlebtn(20)} >20m</button>
                    <button className='btn2' onClick={() => handlebtn(30)}>30m</button>
                    <button className='btn2' onClick={() => handlebtn(40)}>40m</button>
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