import React from 'react';

import './styles.css';

import { Header } from '../../components/Header';
import { BigBrand } from '../../components/BigBrand';
import { CalendarGrid } from '../../components/Calendar';

const HomeScene = () => (
    <div className="HomeContainer">
        <BigBrand />
        <Header/>
        <div className="contentContainer">
          <CalendarGrid />
        </div>
    </div>
);

export default HomeScene;
