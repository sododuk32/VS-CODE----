/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-string-refs */
import React from 'react';
import styles from './AccSlider.module.css';
import { useCookies } from 'react-cookie';
import Image from 'next/image';
import photo1 from '../public/MHXH3.jpg';
import photo2 from '../public/MPPP3.jpg';
import photo3 from '../public/MPRY3_AV1.jpg';
import { useState, useMemo } from 'react';
function AccSlider() {
    const [cookies, setCookie] = useCookies(['cart']);

    type Product = {
        id: string;
        name: string;
        price: string;
        imgName: string;
    };
    const productInfo: Array<Product> = [
        {
            id: '1',
            name: 'iPhone 14 Silicone Case with MagSafe - Lilac',
            price: '49',
            imgName: 'MHXH3.jpg',
        },
        {
            id: '2',
            name: 'MagSafe Charger',
            price: '39',
            imgName: 'MPPP3.jpg',
        },
        {
            id: '3',
            name: 'iPhone 14 Pro Max Leather Case with MagSafe - Ink',
            price: '59',
            imgName: 'MPRY3_AV1.jpg',
        },
    ];
    // eslint-disable-next-line prettier/prettier
    const [carting, setcarting] = useState<Product>([]);
    let UserCart: Array<Product> = [];

    function customF(n: number) {
        let UserCart: Array<Product> = [];

        if (!carting) {
            for (let i = 0; i < UserCart.length; i++) {
                UserCart.push(carting[i]);
            }

            UserCart.push(productInfo[n]);
        }

        console.log(UserCart);
        setcarting(UserCart);
        let UserCart_object = { items: UserCart };
        console.log(carting);

        setCookie('cart', UserCart_object, { path: '/' });
        return alert('담김');
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
