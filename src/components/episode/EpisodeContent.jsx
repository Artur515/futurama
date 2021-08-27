import React from 'react';
import style from './style.module.css'

const EpisodeContent = ({date, title, number, writers, descr}) => {
    return (
        <div className={style.card}>
            <h3>Episode: {number}</h3>
            <p>Title: {title}</p>
            <h3>Writers: {writers}</h3>
            <p>date:{date}</p>
            <p>{descr}</p>
        </div>
    );
};

export default EpisodeContent;