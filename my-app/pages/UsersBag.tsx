/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Nav from '../components/Nav';
import Bagscard from '../components/Bagscard';
import styles from './UsersBag.module.css';
import { useEffect, useState } from 'react';

import Cookies from 'react-cookie';
import { useCookies } from 'react-cookie';
function UsersBag() {
    type Product = {
        id: string;
        name: string;
        price: string;
        imgName: string;
        count: number;
    };
    const [cookies, setCookie, removeCookie] = useCookies<any>(['cart']);

    function makingCard() {
        if (cookies?.cart) {
            ('배열의 갯수 파악한다 -> 갯수만큼 각각의 배열의 정보로 Bagscard를 생성한다 ');
        } else if (!cookies?.cart) {
            return 'nothing';
        }
    }
    return (
        <div>
            <Nav />
            <div className={styles.bodyContainer}>
                <div id="someText" className={styles.someText}>
                    <h1 id="phrase" className={styles.phrase}>
                        Review your bag
                    </h1>
                    <div id="examin" className={styles.examin}>
                        Free delivery and free returns
                    </div>
                </div>
                <div id="payingexplane" className={styles.payingexplane}>
                    Pay $3.25/mo.per month at 0% APRfootnote◊ for eligible items
                    in your order when you choose Apple Card Monthly
                    Installments at checkout.
                </div>

                <div id="cardContainer">BagsCard 생성 함수를 만들자</div>
            </div>
        </div>
    );
}

export default UsersBag;
