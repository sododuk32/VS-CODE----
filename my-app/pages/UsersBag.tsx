/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import BagsCard from '../components/Bagscard';
import styles from './UsersBag.module.css';
import { useCookies } from 'react-cookie';
function UsersBag() {
    type Product = {
        id: string;
        name: string;
        price: string;
        imgName: string;
        count: number;
    };
    const [domLoaded, setDomLoaded] = useState(false);

    const [cookies, setCookie, removeCookie] = useCookies<any>(['cart']);

    const [hasMounted, setHasMounted] = React.useState(false);
    React.useEffect(() => {
        setHasMounted(true);
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
                    myArray2[i]?.price
                )
            );
            console.log(i);
        }
        return myArray1;
    }

    //윗코드안되서 생각한 해결법
    //배열을 4개만듬=> 각각의 배열의 이름을 imgName name count price로 짓고 해당되는 값을 상품의 순서대로 저장
    // 저장된 배열들의 0번째 값엔 0번째 상품의 정보가 저장됨=> 0번째를 만들땐 모든 배열의 0번째 정보를 불러옴

    // 두번째. 자동화 함수가 실패했음. 이유는 모름 => 왜 컴포넌트를 반환하는게 안되는지 찾아보기 => any로하니까 card 자체가 안뜸
    // 카드 호출하는법 다시 생각해보기
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
            </div>
        </div>
    );
}

export default UsersBag;
