/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styles from './TotalPrice.module.css';
import { useRef } from 'react';
import { Cookies } from 'react-cookie';
import { useCookies } from 'react-cookie';

import Bagscard from './Bagscard';

function TotalPrice() {
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

    function makingCard() {
        let myArray1 = [];
        let result = 0;
        const myArray2: Product[] = cookies.cart;
        for (let i = 0; i < myArray2?.length; i++) {
            myArray1.push(
                Bagscard(
                    myArray2[i]?.imgName,
                    myArray2[i]?.name,
                    myArray2[i]?.count,
                    myArray2[i]?.price,
                    200,
                    200
                )
            );
            result = parseInt(myArray2[i]?.price) * myArray2[i]?.count;
            price2.current += result;
            console.log('totalprice:' + result);
        }
        return result;
    }
    return (
        <div>
            <div className={styles.receiptContainer}>
                <div>Checkout</div>
                <div>{makingCard()}</div>
            </div>
        </div>
    );
}

export default TotalPrice;
function setHasMounted(arg0: boolean) {
    throw new Error('Function not implemented.');
}
