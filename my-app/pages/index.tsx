/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useState } from 'react';

import Nav from '../components/Nav';
import Mainpage from '../components/Mainpage';
import Grid from '../components/Gridpannel';
import Slider from '../components/Slider';
import axios from 'axios';
const Home: NextPage = () => {
    const [realtoggle, setToggle] = useState(false);
    let location;
    let windowTest;

    if (process.browser) {
        location = document.location;
        windowTest = window.location.href;
    }
    useEffect(() => {
        axios
            .get('http://localhost:8080/')
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err.res);
            });

        axios
            .get('http://localhost:8080/db')
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err.res);
            });
    }, []);

    return (
        <>
            <Nav />
            {realtoggle ? 'True' : 'False'}
            <Mainpage />
            <Grid />
            {Slider(realtoggle)}
            <button
                className="ToggleButton"
                onClick={() => setToggle(!realtoggle)}
            >
                Play/Stop
            </button>
        </>
    );
};

export default Home;
