import React, {useEffect, useState} from 'react';
import FuturamaApi from "../../api/futuramaApi";
import Loader from "../../helpers/loader/Loader";
import Cast from "../cast/Cast";

const CastsList = () => {
    const [casts, setCasts] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getCasts()
    }, [])

    async function getCasts() {
        setLoading(true)
        const casts = await FuturamaApi.getCast()
        setCasts(casts)
        setLoading(false)
    }


    return (
        <>
            {loading ? <Loader/> : casts.map((cast) => {
                return <Cast name={cast.name} born={cast.born} url={cast.bio.url} key={cast.id} id={cast.id}/>
            })}
        </>
    );
};

export default CastsList;