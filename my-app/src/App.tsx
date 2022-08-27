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
    if (!realtoggle) {
        console.log(realtoggle);
    }
    return (
        <div className="App">
            <Nav />
            <Mainpage />
            <Gridpannel />
            {Slider(realtoggle)}
            <button onClick={() => setToggle(!setToggle)}>Play/Stop</button>
            <Footer />
        </div>
    );
}

export default App;
