/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from 'react';
import Nav from '../components/Nav';
import { useState } from 'react';
import Selectshipping from '../components/Selectshipping';
import Selecttakeoff from '../components/Selecttakeoff';
import { useEffect } from 'react';
import { Cookies } from 'react-cookie';
import useCookies from 'react-cookie';
import TotalPrice from '../components/TotalPrice';

function payments() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectOrder, setselectOrder] = useState('delevered');
    const [hasMounted, setHasMounted] = React.useState(false);
    const price2 = useRef(0);

    React.useEffect(() => {
        setHasMounted(true);
        console.log('mounted');
    }, []);
    if (!hasMounted) {
        return null;
    }

    return (
        <div>
            <Nav />
            <div id="paymentsNav">
                <h1>Check Out</h1>
                <a href="">show Order Summery here </a>
                <TotalPrice />
            </div>
            <div id="choiceTaking">
                <h1>How would you like to get your order?</h1>
                <button onClick={() => setselectOrder('delevered')}>
                    iapos;d like to delivered
                </button>
                <button onClick={() => setselectOrder('pickup')}>
                    iapos;ill pick it up
                </button>
                <div>Deilivered to:zipcode</div>
                {selectOrder === 'delevered' ? (
                    <Selectshipping />
                ) : (
                    <Selecttakeoff />
                )}
                <div>deliver to :이전에받은 zip코드</div>
                <div className="mainComponentWrapper"></div>
            </div>
            <div id="productSummery">
                <div>card1</div>
                <div>card2</div>
            </div>
            <button>coninue shipping</button>

            <div>이하 인풋태그 여러개 </div>
            <div>여기 결제버튼</div>
        </div>
    );
}

export default payments;
