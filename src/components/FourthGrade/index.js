import React, { useState } from 'react';
import styles from './styles.module.scss';

export const FourthGrade = ({ reductionGeneralClicks, doubleGeneralClick }) => {
    return (
        <div className={styles.fourthContainer}
            onDoubleClick={doubleGeneralClick}
            onContextMenu={reductionGeneralClicks}
            >
            <p>Double General clicks</p>

        </div>
    );
};
