import React from 'react';

import './styles.css';

import { Header } from '../../components/Header';
import { BigBrand } from '../../components/BigBrand';
import { Calendar } from '../../components/Calendar';

const HomeScene = () => (
    <div className="HomeContainer">
        <BigBrand />
        <Header/>
        <div className="contentContainer">
            <Calendar />
        </div>
    </div>
);

export default HomeScene;
