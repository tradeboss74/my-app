import React, { useState } from 'react';
import styles from './styles.module.scss';
import { FourthGrade } from '../FourthGrade';

export const ThirdGrade = ({
    incrementGeneralClicks,
    incrementChildClicksCount,
    generalClicks,
    reductionGeneralClicks,
    doubleGeneralClick,
    className,
}) => {
    const [localClicks, setLocalClicks] = useState(0);

    return (
        <div
            className={styles.thirdContainer}
            onClick={(e) => {
                incrementGeneralClicks(e);
                incrementChildClicksCount(e);
                setLocalClicks(localClicks + 1);
            }}
            onContextMenu={reductionGeneralClicks}
        >
            <p>3rd grade clicks: {localClicks}</p>
            <p>General clicks: {generalClicks}</p>
            <FourthGrade
                doubleGeneralClick={doubleGeneralClick}
                reductionGeneralClicks={reductionGeneralClicks}
            />
        </div>
    );
};
