/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import React from 'react';
import Image from 'next/image';
import { Cookies, useCookies } from 'react-cookie';
import { useRef } from 'react';
import Bagscard from './Bagscard';
import Link from 'next/link';

function Selectshipping() {
    const price2 = useRef(0);
    const [cookies, setCookie, removeCookie] = useCookies<any>(['cart']);
    const dateTodeliveredPrime = Date() + 7;
    const dateTodelivered = Date() + 14;

    function makingCard() {
        let myArray1 = [];
        const myArray2: Product[] = cookies.cart;
        for (let i = 0; i < myArray2?.length; i++) {
            myArray1.push(
                Bagscard(
                    myArray2[i]?.imgName,
                    myArray2[i]?.name,
                    myArray2[i]?.count,
                    myArray2[i]?.price,
                    50,
                    50
                )
            );
            let temp = parseInt(myArray2[i]?.price) * myArray2[i]?.count;
            price2.current += temp;
        }
        return myArray1;
    }
    return (
        <div>
            <div>
                <h1>in stock and ready to ship</h1>
                <div id="imeges">{makingCard()}product List</div>
                <div id="delivery method">
                    <div>
                        <button>deliverd on {Date() + 7}</button>
                        <button>deliverd on {Date() + 14}</button>
                    </div>
                </div>
                <div>
                    <Link
                        href={{
                            pathname: '/inputAdress',
                        }}
                    >
                        <button>go to inputAdress</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Selectshipping;
