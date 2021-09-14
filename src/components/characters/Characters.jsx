import React, {useEffect, useState} from 'react';
import Loader from "../../helpers/loader/Loader";
import Character from "../character/Character";
import FuturamaApi from "../../api/futuramaApi";
import style from './style.module.css'

const Characters = () => {
    const [loading, setLoading] = useState(false)
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        getCharacters()
    }, [])


    async function getCharacters() {
        setLoading(true)
        const characters = await FuturamaApi.getCharacters()
        setCharacters(characters)
        setLoading(false)
    }


    return (
        <div className={style.container}>
            {loading ? <Loader/> : characters.map((char) => {
                return <Character key={char.id} image={char.images} species={char.species} name={char.name} id={char.id}/>
            })}
        </div>
    )

};

export default Characters;