import React, {useEffect, useState} from 'react';
import style from './style.module.css'
import FuturamaApi from "../../api/futuramaApi";
import Loader from "../../helpers/loader/Loader";
import ButtonEpisode from "../../helpers/buttonEpisod/ButtonEpisode";


const Episodes = () => {
    const [episodes, setEpisodes] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getEpisodes()
    }, [])

    async function getEpisodes() {
        setLoading(true)
        const episodes = await FuturamaApi.getEpisodes()
        setEpisodes(episodes)
        setLoading(false)
    }

    // console.log(episodes)
    return (
        <div className={style.container}>
            {loading ? <Loader/> : episodes.map((episod) => {
                return <ButtonEpisode number={episod.number} id={episod.id} key={episod.id}/>
            })}
        </div>
    );
};

export default Episodes;