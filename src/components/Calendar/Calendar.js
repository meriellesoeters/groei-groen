import React from 'react';
import './styles.css';

import { Seasons } from './Seasons';
import { Months } from './Months';

const Calendar = () => (
    <div className="calendarContainer">
        <Months/>
        <Seasons/>
        <div className="seasonalContentContainer">
            <text>groente en fruit</text>
        </div>
    </div>
);

export default Calendar;