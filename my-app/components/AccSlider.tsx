/* eslint-disable react/no-string-refs */
import React from 'react';
import styles from './AccSlider.module.css';

import Image from 'next/image';
import photo1 from '../public/MHXH3.jpg';
import photo2 from '../public/MPPP3.jpg';
import photo3 from '../public/MPRY3_AV1.jpg';

function AccSlider() {
    return (
        <div>
            <div className={styles.Accbody}>
                <div id="nameofSlide">nameofs</div>

                <div className={styles.card}>
                    <div className={styles.card}>
                        <div className={styles.cardcontens}>
                            <Image
                                id="AccPhoto"
                                src={photo1}
                                alt=""
                                layout="fixed"
                                width={266}
                                height={291}
                            />
                            <div>
                                iPhone 14 Silicone Case with MagSafe - Lilac
                            </div>
                            <div>1</div>

                            <span>$49.00</span>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Image
                            id="AccPhoto"
                            src={photo2}
                            alt=""
                            layout="fixed"
                            width={266}
                            height={291}
                        />
                        <div>MagSafe Charger</div>
                        <div>2</div>

                        <span>$39.00</span>
                    </div>
                    <div className={styles.card}>
                        <Image
                            id="AccPhoto"
                            src={photo3}
                            alt=""
                            layout="fixed"
                            width={266}
                            height={291}
                        />
                        <div>
                            iPhone 14 Pro Max Leather Case with MagSafe - Ink
                        </div>
                        <div>3</div>

                        <span>$59.00</span>
                    </div>
                </div>
                <div id="nameofSlide">nameofs</div>
            </div>
        </div>
    );
}

export default AccSlider;
