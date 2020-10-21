import React, { useState } from 'react';
import styles from './styles.module.scss';
import { SecondGrade } from '../../components';

export const FirstGrade = () => {
    const [generalClicks, setGeneralClicks] = useState(0);
    // const [generalSubtractClicks, setGeneralSubtractClicks] = useState()

    const incrementClickCount = (e) => {
        e.stopPropagation();

        setGeneralClicks(generalClicks + 1);
    };

    const reductionClickCount = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setGeneralClicks(generalClicks - 1);
    };

    const doubleGeneralClick = (e) => {
        e.stopPropagation();
        setGeneralClicks(generalClicks * 2);

        console.log(
            `Площа кола з радіусом  ${generalClicks} дорівнює  ${Math.PI * generalClicks ** 2}`,
        );
    };

    return (
        <div
            className={styles.container}
            onClick={incrementClickCount}
            onContextMenu={reductionClickCount}
        >
            <h1 className={styles.header}>FIRST GRADE</h1>
            <p className={styles.paragraf}>General clicks {generalClicks}</p>

            <SecondGrade
                incrementGeneralClicks={incrementClickCount}
                reductionGeneralClicks={reductionClickCount}
                generalClicks={generalClicks}
                doubleGeneralClick={doubleGeneralClick}
            />
            <SecondGrade
                incrementGeneralClicks={incrementClickCount}
                reductionGeneralClicks={reductionClickCount}
                generalClicks={generalClicks}
                doubleGeneralClick={doubleGeneralClick}
            />
        </div>
    );
};
