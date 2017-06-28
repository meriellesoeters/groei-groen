import React from 'react';
import './styles.css';

import { Seasons } from './Seasons';
import { Months } from './Months';
import { Food } from './Food';

const Calendar = () => (
    <div className="calendarContainer">
        <Seasons/>
        <Months/>
        <Food/>
    </div>
);

export default Calendar;
