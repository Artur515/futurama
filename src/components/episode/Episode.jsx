import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import FuturamaApi from "../../api/futuramaApi";
import Loader from "../../helpers/loader/Loader";
import EpisodeContent from "./EpisodeContent";
import style from './style.module.css'

const Episode = () => {
    const [episode, setEpisode] = useState(null)

    const params = useParams()


    console.log(episode)
    useEffect(() => {
        FuturamaApi.getEpisode(params.id)
            .then(response => setEpisode(response.data))
    }, [params.id])


    return (
        <div className={style.content}>
            {episode === null ? <Loader/> :
                <EpisodeContent number={episode[0].number}
                                date={episode[0].originalAirDate}
                                title={episode[0].title}
                                writers={episode[0].writers}
                                descr={episode[0].desc}
                />
            }
        </div>
    );
};

export default Episode;