import React from 'react';

import { Header } from '../../components/Header';
import { BigBrand } from '../../components/BigBrand';

const HomeScene = () => (
    <div className="HomeContainer">
        <BigBrand />
        <Header/>
        <div className="hugeDiv"/>
    </div>
);

export default HomeScene;
