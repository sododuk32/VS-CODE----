import React from 'react';
import Image from 'next/image';
import grid1 from '../public/grid1.jpg';
import grid2 from '../public/grid2.jpg';
import grid3 from '../public/grid3.jpg';
import grid4 from '../public/grid4.jpg';
import grid5 from '../public/grid5.jpg';
import grid6 from '../public/grid6.jpg';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './Gridpannel.module.css';

function Gridpannel() {
    return (
        <div className="gridPannel">
            <div className="gridContainer">
                <Image
                    id="gridImage"
                    src={grid1}
                    alt=""
                    layout="fixed"
                    width={475.993}
                    height={125.993}
                />
                <Image
                    id="gridImage"
                    src={grid2}
                    alt=""
                    layout="fixed"
                    width={475.993}
                    height={125.993}
                />
                <Image
                    id="gridImage"
                    src={grid3}
                    alt=""
                    layout="fixed"
                    width={475.993}
                    height={125.993}
                />
                <Image
                    id="gridImage"
                    src={grid4}
                    alt=""
                    layout="fixed"
                    width={475.993}
                    height={125.993}
                />
                <Image
                    id="gridImage"
                    src={grid5}
                    alt=""
                    layout="fixed"
                    width={475.993}
                    height={125.993}
                />
                <Image
                    id="gridImage"
                    src={grid6}
                    alt=""
                    layout="fixed"
                    width={475.993}
                    height={125.993}
                />
            </div>
        </div>
    );
}

export default Gridpannel;
