import React from 'react';
import logo from '../../image/img3.jpg'
import './Info.css'

const Info = () => {
    return (

        <div>
            <div className='identy'>
                <img src={logo} alt="" />
                <div>
                    <h4 style={{ margin: '0px' }}>Sezan Ahmed</h4>
                    <small>Member of soccer club</small>
                </div>
            </div>

            <div className='measure'>
                <div>
                    <h3 style={{ margin: '0px', fontSize: '25px' }} >75<span style={{ color: "#7D93A1", fontSize: '12px' }} >Kg</span></h3>
                    <h4 style={{ margin: '0px', color: "#7D93A1" }}>Weight</h4>
                </div>
                <div>
                    <h3 style={{ margin: '0px', fontSize: '25px' }} >6.5</h3>
                    <h4 style={{ margin: '0px', color: "#7D93A1" }}>Height</h4>
                </div>
                <div>
                    <h3 style={{ margin: '0px', fontSize: '25px' }} >24<span style={{ color: "#7D93A1", fontSize: '12px' }} >yrs</span></h3>
                    <h4 style={{ margin: '0px', color: "#7D93A1" }}>Age</h4>
                </div>

            </div>
        </div >
    );
};

export default Info;