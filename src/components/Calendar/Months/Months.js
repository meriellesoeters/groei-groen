import React from 'react';
import './styles.css';

const Months = () => {
    const months = [ 'mrt', 'apr', 'mei',
        'jun', 'jul', 'aug', 'sept', 'okt', 'nov', 'dec', 'jan', 'feb' ];

    const monthsList = months.map((month, index) => {
        return (
            <div className='monthTextContainer'>
                <text className="monthText" id={ index }>{ month }</text>
            </div>
        )
    });

    return (
        <div className="monthsListContainer">
            { monthsList }
        </div>
    )
};

export default Months;

