import React, {useEffect, useState} from 'react';
import FuturamaApi from "../../api/futuramaApi";
import style from "../characters/style.module.css";
import {useParams} from "react-router-dom";

const CharacterInfo = () => {
    const [loading, setLoading] = useState(false)
    const [charInfo, setCharInfo] = useState([])

    const params = useParams()

    console.log(charInfo)

    useEffect(() => {
        getCharacterInfo(params.id)
    }, [])


    async function getCharacterInfo(id) {
        setLoading(true)
        const characters = await FuturamaApi.getCharactersInfo(id)
        setCharInfo(characters)
        setLoading(false)
    }

    return (
        <div className={style.container}>
            {/*{loading ? <Loader/> : characters.map((char) => {*/}
            {/*    return <Character key={char.id} image={char.images} species={char.species} name={char.name}*/}
            {/*                      id={char.id}/>*/}
            {/*})}*/}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ea laborum saepe tenetur. Cupiditate expedita fuga magni, minima non porro.
        </div>
    );
};

export default CharacterInfo;