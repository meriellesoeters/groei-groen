import React from 'react';
import './styles.css';

const Months = () => {
    const months = [ 'januari', 'februari', 'maart', 'april', 'mei',
        'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december' ];

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

