import React from 'react';
import grid1 from '../img/grid1.jpg';
import grid2 from '../img/grid2.jpg';
import grid3 from '../img/grid3.jpg';
import grid4 from '../img/grid4.jpg';
import grid5 from '../img/grid5.jpg';
import grid6 from '../img/grid6.jpg';
import './Gridpannel.css';
function Gridpannel() {
    return (
        <div className="gridPannel">
            <div className="gridContainer">
                <img id="gridImage" src={grid1} alt="" />
                <img id="gridImage" src={grid2} alt="" />
                <img id="gridImage" src={grid3} alt="" />
                <img id="gridImage" src={grid4} alt="" />
                <img id="gridImage" src={grid5} alt="" />
                <img id="gridImage" src={grid6} alt="" />
            </div>
        </div>
    );
}

export default Gridpannel;
