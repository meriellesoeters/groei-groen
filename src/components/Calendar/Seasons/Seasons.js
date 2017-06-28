import React from 'react';

import { seasons } from '../../../constants';
import './styles.css';

const Seasons = () => {

    const seasonsList = seasons.map((season, index) => {
        return (
            <div className='seasonTextContainer'>
                <text className="seasonText" id={ index }>{ season }</text>
            </div>
        )
    });

    return (
        <div className="seasonsListContainer">
            { seasonsList }
        </div>
    )
};

export default Seasons;
