import type { NextPage } from 'next';
import React from 'react';
import { useState } from 'react';
import Nav from '../components/Nav';
import Mainpage from '../components/Mainpage';
import Grid from '../components/Gridpannel';
import Slider from '../components/Slider';
const Home: NextPage = () => {
    const [realtoggle, setToggle] = useState(true);
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
