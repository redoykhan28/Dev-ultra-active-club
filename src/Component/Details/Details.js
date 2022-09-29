import React, { useEffect, useState } from 'react';
import { addDb, getDb } from '../../Utilities/StorageDb';
import './Details.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = (props) => {

    //set state for break
    const [breakTime, setBreakTime] = useState(0)

    //retrieve value from local storage
    useEffect(() => {

        let getBreak = getDb();
        // console.log(getBreak)
        for (const id in getBreak) {

            setBreakTime(getBreak[id])
        }

    }, [breakTime])

    const { practiceTime } = props
    // console.log(props.practice)

    let time = 0
    for (const minute of practiceTime) {

        time = time + minute.time

    }

    const handlebtn = (id) => {

        setBreakTime(id);

        addDb(id);

    }

    //get toast
    const getToast = () => {

        toast("Congrats! Your activity is completed");

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

            <div className='pr-details'>
                <h3 className='practice-details'>Practice Details</h3>
                <h4 className='practice-time:' style={{ marginLeft: '15px' }}>practice time: <span style={{ color: "#7D93A1" }}>{time} Minutes</span></h4>
                <h4 className='break-time:' style={{ marginLeft: '15px' }}>Break time: <span style={{ color: "#7D93A1" }}>{breakTime} Minutes</span></h4>
            </div>

            <button className='activity-btn' onClick={getToast}>Activity Complete</button>

            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />

        </div>
    );
};

export default Details;