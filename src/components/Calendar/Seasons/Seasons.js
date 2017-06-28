import React from 'react';
import './styles.css';

const Seasons = () => {
    const seasons = [ 'Lente', 'Zomer', 'Herfst', 'Winter' ];

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
