/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-string-refs */
import React from 'react';
import styles from './AccSlider.module.css';
import CartCookies from './notused/CookiesSave';
import Image from 'next/image';
import photo1 from '../public/MHXH3.jpg';
import photo2 from '../public/MPPP3.jpg';
import photo3 from '../public/MPRY3_AV1.jpg';

function AccSlider() {
    type Product = {
        id: string;
        name: string;
        price: string;
        imgName: string;
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

    let UserCart: Array<Product> = [];

    function setCookie(key, value, expiredays) {
        let todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays); // 현재 시각 + 일 단위로 쿠키 만료 날짜 변경
        //todayDate.setTime(todayDate.getTime() + (expiredays * 24 * 60 * 60 * 1000)); // 밀리세컨드 단위로 쿠키 만료 날짜 변경
        document.cookie =
            key +
            '=' +
            escape(value) +
            '; path=/; expires=' +
            todayDate.toString() +
            ';';
    }

    function getCookie(key) {
        key = new RegExp(key + '=([^;]*)'); // 쿠키들을 세미콘론으로 구분하는 정규표현식 정의
        if (process.browser) {
            return key.test(document.cookie) ? unescape(RegExp.$1) : '';
        }
        // 인자로 받은 키에 해당하는 키가 있으면 값을 반환
    }
    function boolCheckCookie(key) {
        return getCookie(key) != '' ? true : false;
    }

    function checkCookieTest(key) {
        let val = getCookie(key);
        if (val != '') {
            return val;
        } else {
            val = prompt(key + ' 쿠키의 값을 입력해주세요:', '');
            if (val != '' && val != null) {
                setCookie(key, val, 365);
                console.log(setCookie(key, val, 365));
                return val;
            }
        }
    }
    function customF(n: number) {
        UserCart.push(productInfo[n]);
        console.log(UserCart);
        setCookie('mykey', UserCart, 3000);
        return alert('담김');
    }
    console.log(getCookie('mykey'));
    console.log(checkCookieTest('mykey'));
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
