import React from 'react';
import style from './style.module.css'
import {useHistory} from "react-router-dom";

const ButtonEpisode = ({number, id}) => {
    const history = useHistory()


    const handleEpisod = (id) => {
        history.push(`/futurama/episodes/episod${id}`)
    }
    return (
        <div className={style.contents} onClick={() => handleEpisod(id)}>
            <p className={style.btn}><span>{number}</span></p>
        </div>
    );
};

export default ButtonEpisode;