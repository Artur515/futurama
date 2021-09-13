import React from 'react';
import styles from "./style.module.css";
import Bender from '../../image/Bender_Rodriguez.png'
import {useHistory} from "react-router-dom";


const Character = ({image, species, id}) => {
    const history = useHistory()





    const handleCharInfo = () => {
        history.push(`/futurama/characters/characters${id}`)
    }

    return (
        <div className={styles.outer}>
            <div className={styles.hoverEffect}>
                <p className={styles.text}>{species}</p>
                <img onClick={handleCharInfo}
                     src={image === undefined ? Bender : image.main}
                     alt='hero'/>
            </div>
        </div>
    );
};

export default Character;