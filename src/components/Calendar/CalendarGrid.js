import React from 'react';
import './styles.css';

import { Seasons } from './Seasons';
import { Months } from './Months';
import { Food } from './Food';

const CalendarGrid = () => (
    <div className="calendarGridContainer">
        <div className="foodnames" />
        <Seasons/>
        <Months/>
        <Food/>
    </div>
);

export default CalendarGrid;
