import React from 'react';
import Nav from '../components/Nav';
import SelectAcc from '../components/SelectAcc';
import styles from './buyingAcc.module.css';
import Image from 'next/image';
import rowsPhoto from '../public/rowsPhoto.jpg';
import Link from 'next/link';
import AccSlider from '../components/AccSlider';

function buyingAcc() {
    return (
        <div>
            <Nav />
            <div className={styles.localNav}>
                <a href="https://www.apple.com/kr/shop/accessories/all">
                    액세서리
                </a>
                <Link href="/buyingAcc">
                    <a>모두 검색</a>
                </Link>
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

            <div className={styles.thirdPannel}>
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
                <SelectAcc />
                <AccSlider />
            </div>
        </div>
    );
}

export default buyingAcc;
