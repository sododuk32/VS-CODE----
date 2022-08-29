import React from 'react';
import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import Mainpage from './components/Mainpage';
import Slider from './components/Slider';
import Gridpannel from './components/Gridpannel';
import Footer from './components/Footer';
function App() {
    const [realtoggle, setToggle] = useState(true);

    return (
        <div className="App">
            <Nav />
            {realtoggle ? 'True' : 'False'}
            <Mainpage />
            <Gridpannel />
            {realtoggle}
            {Slider(realtoggle)}
            <button
                className="ToggleButton"
                onClick={() => setToggle(!realtoggle)}
            >
                Play/Stop
            </button>
            <Footer />
        </div>
    );
}

export default App;
