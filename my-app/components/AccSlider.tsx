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
    let mk2 = 0;
    function customF(n: number) {
        if (carting.length === 0) {
            setCookie('cart', productInfo[n].name, { path: '/' });
        }

        let chngCart = carting;
        let tempName = productInfo[n].name;
        if (chngCart.some((e) => e.name === tempName)) {
            console.log('a');
            let location = chngCart.findIndex((x) => x.name === tempName);
            chngCart[location].count++;
            setcarting(chngCart);
        }
        //if문 2개보단 else if를 쓰자
        else if (!chngCart.some((e) => e.name === tempName)) {
            console.log('b');
            setcarting(() => {
                return [...chngCart, productInfo[n]];
            });
            console.log(productInfo[n]);
            console.log(carting);
        }
        setCookie('cart', carting, { path: '/' }); //carting 이 비엇을때도 가정해야함
        mk2 = mk1;
        mk2++;
        setmk1(mk2);
    }
    return (
        <div>
            <div className={styles.Accbody}>
                <span id="nameofSlide" className={styles.Featured}>
                    Featured iPhone Accessories
                </span>

                <div className={styles.cardSlider}>
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
                            <div className={styles.productId}>
                                iPhone 14 Silicone Case with MagSafe - Lilac
                            </div>
                            <span className={styles.productPrice}>$49.00</span>
                            <button onClick={(event) => customF(0)}>buy</button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardcontens}>
                            <Image
                                id="AccPhoto"
                                src={photo2}
                                alt=""
                                layout="fixed"
                                width={266}
                                height={291}
                            />
                            <div className={styles.productId}>
                                MagSafe Charger
                            </div>
                            <span className={styles.productPrice}>$39.00</span>
                            <button onClick={(event) => customF(1)}>buy</button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardcontens}>
                            <Image
                                id="AccPhoto"
                                src={photo3}
                                alt=""
                                layout="fixed"
                                width={266}
                                height={291}
                            />
                            <div className={styles.productId}>
                                iPhone 14 Pro Max Leather Case with MagSafe -
                                Ink
                            </div>
                            <span className={styles.productPrice}>$59.00</span>
                            <button onClick={(event) => customF(2)}>buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccSlider;
