/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './SelectAcc.module.css';
import Image from 'next/image';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import axios from 'axios';
function SelectAcc() {
    console.log('Mounted');
    const [first, setfirst] = useState(true);
    const [second, setsecond] = useState(false);
    const [axing1, setaxing1] = useState(null);
    const [axing2, setaxing2] = useState(null);
    // 유저의 사용감과 성능을위해 sql문 최적화와 api횟수를 최소한으로 만들기
    // useEffect(() => {
    //     axios
    //         .get('http://localhost:8080/image/3')
    //         .then((res) => setaxing1(res?.data[0]?.image_name));
    //     axios
    //         .get('http://localhost:8080/image/3')
    //         .then((res) => setaxing2(res?.data[0]?.name));
    // }, []);
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
            <div className={styles.SelctAccBody}>
                <div className={styles.btns}>
                    <button onClick={changing1}>Browse by Product</button>
                    <button onClick={changing2}>Browse by Category</button>
                </div>

                <div id="selecPannel" className={styles.changeBtn1}>
                    <div
                        className={first === true ? styles.cont1 : styles.cont2}
                        id="BrowsebyProduct"
                    >
                        <ul className={styles.listOf}>
                            <li className={styles.BoxList}>
                                <div className={styles.IconBox}>
                                    <Image
                                        className={styles.Icon}
                                        src={'/' + axing1}
                                        alt="iPhone_01"
                                        layout="fixed"
                                        width={70}
                                        height={70}
                                    />
                                    <span>Mac</span>
                                </div>
                                <div>{axing2}</div>
                            </li>
                            <li className={styles.BoxList}>
                                <div className={styles.IconBox}>
                                    <div>image</div>
                                    <span>iPad</span>
                                </div>
                            </li>
                            <li className={styles.BoxList}>
                                <div className={styles.IconBox}>
                                    <div>image</div>
                                    <span>iPhone</span>
                                </div>
                            </li>
                            <li className={styles.BoxList}>
                                <div className={styles.IconBox}>
                                    <div>image</div>
                                    <span>Watch</span>
                                </div>
                            </li>
                            <li className={styles.BoxList}>
                                <div className={styles.IconBox}>
                                    <div>image</div>
                                    <span>TV & Home</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div
                        className={
                            second === true ? styles.cont1 : styles.cont2
                        }
                        id="BrowsebyCategory"
                    >
                        <ul className={styles.listOf}>
                            <li className={styles.BoxList}>
                                <div className={styles.IconBox}>
                                    <div>image</div>
                                    <span>Madi by Apple</span>
                                </div>
                            </li>

                            <li className={styles.BoxList}>
                                <div className={styles.IconBox}>
                                    <div>image</div>
                                    <span>What&rsquo s New</span>
                                </div>
                            </li>
                            <li className={styles.BoxList}>
                                <div className={styles.IconBox}>
                                    <div>image</div>
                                    <span>Cases & Protection</span>
                                </div>
                            </li>
                            <li className={styles.BoxList}>
                                <div className={styles.IconBox}>
                                    <div>image</div>
                                    <span>Power & Cables</span>
                                </div>
                            </li>
                            <li className={styles.BoxList}>
                                <div className={styles.IconBox}>
                                    <div>image</div>
                                    <span>Apple Watch Bands</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectAcc;
