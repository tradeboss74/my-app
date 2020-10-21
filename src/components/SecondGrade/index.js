import React, { useState } from 'react';
import styles from './styles.module.scss';
import { ThirdGrade } from '../ThirdGrade';

export const SecondGrade = ({
    incrementGeneralClicks,
    reductionGeneralClicks,
    generalClicks,
    doubleGeneralClick,
    className,
}) => {
    const [childClicks, setChildClicks] = useState(0);

    const incrementChildClicksCount = () => {
        setChildClicks(childClicks + 1);
    };

    return (
        <div
            className={styles.secondContainer}
            onClick={(e) => {
                incrementGeneralClicks(e);
            }}
            onContextMenu={reductionGeneralClicks}
        >
            <h1 className={styles.header}>SECOND GRADE</h1>
            <p className={styles.paragraf}>All chaild clicks {childClicks}</p>
            <ThirdGrade
                
                incrementGeneralClicks={incrementGeneralClicks}
                incrementChildClicksCount={incrementChildClicksCount}
                generalClicks={generalClicks}
                reductionGeneralClicks={reductionGeneralClicks}
                doubleGeneralClick={doubleGeneralClick}
            />
            <ThirdGrade
                incrementGeneralClicks={incrementGeneralClicks}
                incrementChildClicksCount={incrementChildClicksCount}
                generalClicks={generalClicks}
                reductionGeneralClicks={reductionGeneralClicks}
                doubleGeneralClick={doubleGeneralClick}
            />
            <ThirdGrade
                incrementGeneralClicks={incrementGeneralClicks}
                incrementChildClicksCount={incrementChildClicksCount}
                generalClicks={generalClicks}
                reductionGeneralClicks={reductionGeneralClicks}
                doubleGeneralClick={doubleGeneralClick}
            />
        </div>
    );
};
