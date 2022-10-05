import React from 'react';
import styles from './Bagscard.module.css';

function Bagscard(
    photoName: string,
    productName: string,
    amount: number,
    price: string
) {
    return (
        <div>
            <div id="cardContainer" className={styles.cardContainer}>
                <div id="img">{photoName}</div>
                <div id="cardDetail" className={styles.cardDetail}>
                    <div id="productInfo" className={styles.productInfo}>
                        <div id="productName" className={styles.productName}>
                            {productName}
                        </div>
                        <div
                            id="productAmount"
                            className={styles.productAmount}
                        >
                            {amount}
                        </div>
                        <div id="productPrice" className={styles.productPrice}>
                            {price}
                        </div>
                    </div>
                    <div id="addMessage">Add a gift message or gift wrap</div>
                    <div id="zipCode">
                        Find out how soon you can get this item.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bagscard;
