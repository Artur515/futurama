import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import styles from './style.module.css'
import Characters from "../characters/Characters";
import Episodes from "../episodes/Episodes";
import TypeWriterEffect from 'react-typewriter-effect';
import CastsList from "../castsList/CastsList";
import Episode from "../episode/Episode";
import {
    FUTURAMA,
    FUTURAMA_CAST,
    FUTURAMA_CHARACTERS, FUTURAMA_CHARACTERS_INFO,
    FUTURAMA_EPISODE_ID,
    FUTURAMA_EPISODES
} from "../../utils/constants";
import CharacterInfo from "../characterInfo/CharacterInfo";


const Wrapper = () => {
    return (
        <div className={styles.wrapper}>
            <Switch>
                <Route exact path={FUTURAMA}>
                    <div className={styles.writer}>
                        <TypeWriterEffect
                            startDelay={1000}
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
                <Route exact path={FUTURAMA_CHARACTERS}><Characters/></Route>
                <Route exact path={FUTURAMA_CHARACTERS_INFO}><CharacterInfo/></Route>
                <Route exact path={FUTURAMA_CAST}><CastsList/></Route>
                <Route exact path={FUTURAMA_EPISODES}><Episodes/></Route>
                <Route exact path={FUTURAMA_EPISODE_ID}><Episode/></Route>
                <Redirect to='/'/>
            </Switch>
        </div>

    );
};

export default Wrapper;