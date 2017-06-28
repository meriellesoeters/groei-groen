import React from 'react';

import { months } from '../../../constants';
import './styles.css';

const Months = () => {
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

