import React from 'react';
import {useParams} from "react-router-dom";

const Episode = () => {
    const params = useParams()
    console.log(params)


    return (
        <div>
            Hello world
        </div>
    );
};

export default Episode;