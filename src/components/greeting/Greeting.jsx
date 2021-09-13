import React, {useEffect, useState} from 'react';
import {greetingInfo} from "../../api/futuramaApi";
import Loader from "../../helpers/loader/Loader";
import styles from './style.module.css'
import {Link} from "react-router-dom";
import TypeWriterEffect from 'react-typewriter-effect';

const firstCreator = "David X. Cohen"
const secondCreator = "Matt Groening"

const Greeting = () => {
    const [synopsis, setSynopsis] = useState('')
    const [goTo, setGoTo] = useState('')


    useEffect(() => {
        greetingInfo()
            .then(response => setSynopsis(response.data[0].synopsis))
    }, [])



    useEffect(() => {
        setTimeout(() => {
            setGoTo('Let`s go =>')
        }, 10000)
    }, [])

    return (
        <div className={styles.greeting}>
            {synopsis === '' ? <Loader/> : <div>
                <TypeWriterEffect
                    startDelay={2000}
                    cursorColor="#3F3D56"
                    multiText={[
                        firstCreator,
                        secondCreator,
                        'Presents...',
                        synopsis,
                    ]}
                    multiTextDelay={1000}
                    typeSpeed={50}
                />
                <Link to='/futurama'>
                    <div className={styles.btn_go}>{goTo}</div>
                </Link>
            </div>}
        </div>
    );
};

export default Greeting;