import React from 'react';
import styles from "./style.module.css";
import Bender from '../../image/Bender_Rodriguez.png'

const Character = ({image, species, name}) => {

    return (
        <div className={styles.outer}>
            <div className={styles.hoverEffect}>
                <p className={styles.text}>{species}</p>
                <img
                    src={image === undefined ? Bender : image.main}
                    alt='hero'/>
            </div>
        </div>
    );
};

export default Character;