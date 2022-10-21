/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from 'react';
import Nav from '../components/Nav';
import BagsCard from '../components/Bagscard';
import styles from './UsersBag.module.css';
import { useCookies } from 'react-cookie';
import TotalPrice from '../components/TotalPrice';
function UsersBag() {
    const [cookies, setCookie, removeCookie] = useCookies<any>(['cart']);
    const [hasMounted, setHasMounted] = React.useState(false);
    const price2 = useRef(0);
    React.useEffect(() => {
        setHasMounted(true);
        console.log('mounted');
    }, []);
    if (!hasMounted) {
        return null;
    }
    //위의 구문을 추가하니까 hydreted문제 해결됨. 근대 왠지 모름? ??? ?
    //근대 여전히 3번째 쿠키값은 렌더링안됨
    function makingCard() {
        let myArray1 = [];
        const myArray2: Product[] = cookies.cart;
        for (let i = 0; i < myArray2?.length; i++) {
            myArray1.push(
                BagsCard(
                    myArray2[i]?.imgName,
                    myArray2[i]?.name,
                    myArray2[i]?.count,
                    myArray2[i]?.price,
                    200,
                    200
                )
            );
            let temp = parseInt(myArray2[i]?.price) * myArray2[i]?.count;
            price2.current += temp;
        }
        return myArray1;
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
                {makingCard()}
                {TotalPrice()}
            </div>
        </div>
    );
}

export default UsersBag;
