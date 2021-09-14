import React, {useEffect, useState} from 'react';
import FuturamaApi from "../../api/futuramaApi";
import {useParams} from "react-router-dom";
import Loader from "../../helpers/loader/Loader";
import Bender from '../../image/Bender_Rodriguez.png'
import style from './style.module.css'

const CharacterInfo = () => {

    const [charInfo, setCharInfo] = useState(null)

    const params = useParams()

    useEffect(() => {
        getCharacterInfo(params.id)
    }, [params.id])


    async function getCharacterInfo(id) {
        const character = await FuturamaApi.getCharactersInfo(id)
        setCharInfo(character)
    }

    return (<>
            {charInfo === null ? <Loader/> :
                <div className={style.card}>
                    <h3>First name: {charInfo.name.first}</h3>
                    <h3>Last name: {charInfo.name.last}</h3>
                    <h3>Age: {charInfo.age}</h3>
                    <h3>{charInfo.species}</h3>
                    <img src={charInfo.images?.main?charInfo.images?.main:Bender} alt={charInfo.name.first}/>
                    <h2>{charInfo.name.first} sayings: </h2> {charInfo.sayings.map((say,index) => {
                    return <p key={index} className={style.card_descr}>{say}</p>
                })}
                </div>
            }
        </>
    );
};

export default CharacterInfo;