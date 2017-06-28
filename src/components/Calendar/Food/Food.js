import React from 'react';

import './styles.css';
// TODO change classNames to something better
const Food = () => {
    const veggies = ['tomaat', 'komkommer', 'paprika' ]

    const foodsList = veggies.map(() => {
        return (
            <div className="foodContainer">
                <div className="foodMonth">01</div>
                <div className="foodMonth">02</div>
                <div className="foodMonth">03</div>
                <div className="foodMonth">04</div>
                <div className="foodMonth">05</div>
                <div className="foodMonth">06</div>
                <div className="foodMonth">07</div>
                <div className="foodMonth">08</div>
                <div className="foodMonth">09</div>
                <div className="foodMonth">10</div>
                <div className="foodMonth">11</div>
                <div className="foodMonth">12</div>
            </div>
        )
    });

    return (
        <div className="seasonalContentContainer">
            { foodsList }
        </div>
    )
};

export default Food;
