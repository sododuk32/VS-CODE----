/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-string-refs */
import React, { useEffect } from 'react';
import styles from './AccSlider.module.css';
import { useCookies } from 'react-cookie';
import Cookies from 'react-cookie';
import Image from 'next/image';
import photo1 from '../public/MHXH3.jpg';
import photo2 from '../public/MPPP3.jpg';
import photo3 from '../public/MPRY3_AV1.jpg';
import { useState, useMemo } from 'react';

function AccSlider() {
    const [cookies, setCookie] = useCookies(['cart']);
    const [carting, setcarting] = useState<Product[]>([]);

    useEffect(() => console.log('mounted'), [carting]);
    type Product = {
        id: string;
        name: string;
        price: string;
        imgName: string;
        count: number;
    };
    const productInfo: Array<Product> = [
        {
            id: '1',
            name: 'iPhone 14 Silicone Case with MagSafe - Lilac',
            price: '49',
            imgName: 'MHXH3.jpg',
            count: 1,
        },
        {
            id: '2',
            name: 'MagSafe Charger',
            price: '39',
            imgName: 'MPPP3.jpg',
            count: 1,
        },
        {
            id: '3',
            name: 'iPhone 14 Pro Max Leather Case with MagSafe - Ink',
            price: '59',
            imgName: 'MPRY3_AV1.jpg',
            count: 1,
        },
    ];

    const [mk1, setmk1] = useState<number>(0);
    console.log('버튼 눌림 횟수:' + mk1);
    function customF(n: number) {
        let chngCart = carting;
        let tempName = productInfo[n].name;
        if (chngCart.some((e) => e.name === tempName)) {
            let location = chngCart.findIndex((x) => x.name === tempName);
            chngCart[location].count++;
            setcarting(chngCart);
        }
        if (!chngCart.some((e) => e.name === tempName)) {
            setcarting([...chngCart, productInfo[n]]);
        }
        setCookie('cart', carting, { path: '/' });
    }
    return (
        <div>
            <div className={styles.Accbody}>
                <div id="nameofSlide">nameofs</div>

                <div className={styles.card}>
                    <div className={styles.card} id="">
                        <div className={styles.cardcontens}>
                            <Image
                                id="AccPhoto"
                                src={photo1}
                                alt=""
                                layout="fixed"
                                width={266}
                                height={291}
                            />
                            <div id="">
                                iPhone 14 Silicone Case with MagSafe - Lilac
                            </div>
                            <span>$49.00</span>
                            <button onClick={(event) => customF(0)}>buy</button>
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
                        <span>$39.00</span>
                        <button onClick={(event) => customF(1)}>buy</button>
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
                        <span>$59.00</span>
                        <button onClick={(event) => customF(2)}>buy</button>
                    </div>
                </div>
                <div id="nameofSlide">nameofs</div>
            </div>
        </div>
    );
}

export default AccSlider;
