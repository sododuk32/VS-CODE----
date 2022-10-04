import React from 'react';
import Nav from '../components/Nav';
import Bagscard from '../components/Bagscard';
import styles from './UsersBag.module.css';
import cookie from 'react-cookie';
function UsersBag() {
    const mycookie = cookie.get('cart', true);

    return (
        <div>
            <Nav />
            <div className={styles.bodyContainer}>
                <div id="someTtext" className={styles.someTtext}>
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

                <div id="cardContainer">
                    {Bagscard('ph2', 'name2', 'amount2', 'price2')}
                </div>
            </div>
        </div>
    );
}

export default UsersBag;
