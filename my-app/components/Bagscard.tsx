import React from 'react';
import styles from './Bagscard.module.css';
// 1. 이페이지 css를 만들어서 페이지 겉을 완성시킴
// 2. 카드띄움
// 3. 결제 버튼 누르면 쿠키 초기화 및 api에서 db의 주문정보 table에 구매 목록 및 uid 주문번호 를 입력하게함
// 4. bagscard를 다시 사용해서 주문내역 확인을 하는대 이번엔 db에 주문정보 table을 요청함
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
