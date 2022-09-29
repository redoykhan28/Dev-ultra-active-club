import React, { useEffect, useState } from 'react';
import { addToListDb } from '../../Utilities/StorageDb';
import Details from '../Details/Details';
import Info from '../Info/Info';
import Practice from '../Practice/Practice';
import './Practices.css'

const Practices = () => {
    //fetching and set data
    const [Practices, setPractice] = useState([])

    useEffect(() => {
        fetch('excersiseDb.json')
            .then(res => res.json())
            .then(data => setPractice(data))
    }, [])

    //setup state for practice time
    const [practiceTime, setPracticeTime] = useState([])

    //handler button for list
    const addList = (practice) => {

        // console.log(practice)

        let newTime = [...practiceTime, practice];
        setPracticeTime(newTime)
        addToListDb(practice.time)
    }
    return (
        <div className='main-container'>


            <div >
                <h2>Select today’s Practice</h2>

                <div className='practice-container'>
                    {
                        Practices.map(practice => <Practice
                            key={practice.id}
                            practice={practice}
                            addToListHandler={addList}>
                        </Practice>)
                    }
                </div>

            </div>



            <div className='details-container'>
                <Info></Info>
                <Details
                    practice={Practices}
                    practiceTime={practiceTime}></Details>
            </div>

        </div>
    );
};

export default Practices;