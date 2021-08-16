import React from 'react';
import {Route} from "react-router-dom";
import styles from './style.module.css'
import Characters from "../characters/Characters";
import Episodes from "../episodes/Episodes";
import TypeWriterEffect from 'react-typewriter-effect';
import CastsList from "../castsList/CastsList";
import Episode from "../episode/Episode";

const Wrapper = () => {
    return (
        <div className={styles.wrapper}>
            <Route exact path='/futurama'>
                <div className={styles.writer}>
                    <TypeWriterEffect
                        startDelay={2000}
                        cursorColor="#3F3D56"
                        multiText={[
                            'Open menu',
                            'Or wait...',
                            'What are you waiting',
                            '(｡◕‿◕｡)'
                        ]}
                        multiTextDelay={1200}
                        typeSpeed={80}
                    />
                </div>
            </Route>
            <Route exact path='/futurama/characters'><Characters/></Route>
            <Route exact path='/futurama/cast'><CastsList/></Route>
            <Route exact path='/futurama/episodes'><Episodes/></Route>
            <Route exact path='/futurama/episodes/episod:id'><Episode/></Route>
        </div>
    );
};

export default Wrapper;