import React from 'react';
import styles from './TotalPrice.module.css';

function TotalPrice(price: number) {
    return (
        <div>
            <div className={styles.receiptContainer}>{price}</div>
        </div>
    );
}

export default TotalPrice;
