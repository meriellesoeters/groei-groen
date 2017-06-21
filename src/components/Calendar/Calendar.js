import React from 'react';
import './styles.css';

import { Seasons } from './Seasons';

const Calendar = () => (
    <div className="calendarContainer">
        <Seasons/>
        <div className="seasonalContentContainer">
            <text>groente en fruit</text>
        </div>
    </div>
);

export default Calendar;
