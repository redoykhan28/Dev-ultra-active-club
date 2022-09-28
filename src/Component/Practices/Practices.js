import React, { useEffect, useState } from 'react';
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

    return (
        <div className='main-container'>


            <div >
                <h2>Select today’s Practice</h2>

                <div className='practice-container'>
                    {
                        Practices.map(practice => <Practice
                            key={practice.id}
                            practice={practice}>
                        </Practice>)
                    }
                </div>

            </div>



            <div className='details-container'>
                <Info></Info>
            </div>

        </div>
    );
};

export default Practices;