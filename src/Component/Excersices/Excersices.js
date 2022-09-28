import React, { useEffect, useState } from 'react';

const Excersices = () => {
    //fetching and set data
    const [excersices, setExcersice] = useState([])

    useEffect(() => {
        fetch('excersiseDb.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div className='main-container'>

            <div className='exersice-container'>

            </div>

            <div className='details-container'>

            </div>

        </div>
    );
};

export default Excersices;