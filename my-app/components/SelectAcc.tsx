/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useState } from 'react';
import styles from './SelectAcc.module.css';
import AccSlider from './AccSlider';
import axios from 'axios';
function SelectAcc() {
    const [first, setfirst] = useState(true);
    const [second, setsecond] = useState(false);
    let photo1;

    axios
        .get('http://localhost:8080/image?numbering=6')
        .then((res) => {
            photo1 = res;
            console.log(photo1);
        })
        .catch((err) => {
            console.log(err.res);
        });

    function changing1() {
        setfirst(!first);
        console.log(first);
        setsecond(!second);
        console.log(second);
    }
    function changing2() {
        setsecond(!second);
        console.log(second);
        setfirst(!first);
        console.log(first);
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
                            <a href="https://www.apple.com/shop/mac/accessories">
                                <div>image</div>
                                <span>Mac</span>
                            </a>
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
