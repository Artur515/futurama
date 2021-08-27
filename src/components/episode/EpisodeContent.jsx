import React from 'react';

const EpisodeContent = ({date, title, number, writers, descr}) => {
    return (
        <div>
            <h2>Episode: {number}</h2>
            <h3>Title: {title}</h3>
            <h3>Writers: {writers}</h3>
            <span>date:{date}</span>
            <p>{descr}</p>
        </div>
    );
};

export default EpisodeContent;