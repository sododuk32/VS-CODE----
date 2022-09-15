import React from 'react';
import Nav from '../components/Nav';
import styles from './buyingAcc.module.css';
import Image from 'next/image';
import rowsPhoto from '../public/rowsPhoto.jpg';

function buyingAcc() {
    return (
        <div>
            <Nav />
            <div className={styles.localNav}>
                <a href="https://www.apple.com/kr/shop/accessories/all">
                    액세서리
                </a>
                <a href="/buyingAcc">모두 검색</a>
            </div>

            <div>
                <div className={styles.plate1}>
                    <div className={styles.PhotoRow}>
                        <div>
                            <h2>MagSafe로 믹스앤매치.</h2>
                            <p>
                                케이스, 카드지갑, 무선 충전기, 배터리 팩까지
                                간편하게 착.
                            </p>
                            <p>MagSafe 쇼핑하기</p>
                        </div>
                        <Image
                            className="unicefImg"
                            src={rowsPhoto}
                            alt="rowPhoto1"
                            width={2500}
                            height={800}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.findyours}>
                <span>원하는 액세서리를 찾아보세요.</span>
            </div>
            <div className={styles.findyours}>
                <input
                    type="text"
                    name="firstname"
                    placeholder="액세서리 검색"
                />
            </div>
            <div>제품,카테고리별 검색 div생성자</div>
            <div>슬라이드 및 카드</div>
            <div>footer</div>
        </div>
    );
}

export default buyingAcc;
