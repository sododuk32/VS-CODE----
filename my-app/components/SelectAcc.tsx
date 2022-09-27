/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './SelectAcc.module.css';
import AccSlider from './AccSlider';
import Image from 'next/image';

import axios from 'axios';
function SelectAcc() {
    console.log('Mounted');
    const [first, setfirst] = useState(true);
    const [second, setsecond] = useState(false);
    const [axing1, setaxing1] = useState(null);
    const [axing2, setaxing2] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:8080/image/3')
            .then((res) => setaxing1(res?.data[0]?.image_name));
        axios
            .get('http://localhost:8080/image/3')
            .then((res) => setaxing2(res?.data[0]?.name));
    }, []);
    console.log(axing1);
    console.log(axing2);
    function changing1() {
        setfirst(!first);
        setsecond(!second);
    }
    function changing2() {
        setsecond(!second);
        setfirst(!first);
    }

    return (
        <div>
            <button onClick={changing1}>Browse by Product</button>
            <button onClick={changing2}>Browse by Category</button>
            <div id="browseButtons">
                <div
                    className={first === true ? styles.cont1 : styles.cont2}
                    id="BrowsebyProduct"
                >
                    <ul>
                        <li>
                            <div>
                                <Image
                                    className={styles.Icon}
                                    src={'/' + axing1}
                                    alt="iPhone_01"
                                    layout="fixed"
                                    width={70}
                                    height={120}
                                />
                            </div>
                            <div>{axing2}</div>
                        </li>
                        <li>
                            <a href="https://www.apple.com/shop/mac/accessories">
                                <div>image</div>
                                <span>iPad</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.apple.com/shop/mac/accessories">
                                <div>image</div>
                                <span>iPhone</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.apple.com/shop/mac/accessories">
                                <div>image</div>
                                <span>Watch</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.apple.com/shop/mac/accessories">
                                <div>image</div>
                                <span>TV & Home</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div
                    className={second === true ? styles.cont1 : styles.cont2}
                    id="BrowsebyCategory"
                >
                    <ul>
                        <li>
                            <a href="https://www.apple.com/shop/accessories/all/made-by-apple">
                                <div>image</div>
                                <span>Made by Apple</span>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.apple.com/shop/accessories/all/made-by-apple">
                                <div>image</div>
                                <span>What&rsquo s New</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.apple.com/shop/accessories/all/made-by-apple">
                                <div>image</div>
                                <span>Cases & Protection</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.apple.com/shop/accessories/all/made-by-apple">
                                <div>image</div>
                                <span>Power & Cables</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.apple.com/shop/accessories/all/made-by-apple">
                                <div>image</div>
                                <span>Apple Watch Bands</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <AccSlider />
            </div>
        </div>
    );
}

export default SelectAcc;
