import React from 'react';
import styles from './Mainpage.module.css';
import Image from 'next/image';
import Unicefimg from '../public/unicef.png';
import iPhoneimg from '../public/iphone.jpg';
import iPhoneimg2 from '../public/iphone2.jpg';
import iPhoneText1 from '../public/iPhoneText1.png';
import iPhoneText2 from '../public/iPhoneText2.png';
import catchPh2 from '../public/catchPh2.png';
import catchImg from '../public/catchImg.jpg';

function Mainpage() {
    return (
        <div className="main" style={{ zIndex: -1 }}>
            <div className={styles.selrectioncontent}>
                <Image
                    className="unicefImg"
                    src={Unicefimg}
                    alt="iPhone_01"
                    width={122}
                    height={32}
                />
                <a
                    className="catchPh"
                    href="https://www.savethechildren.org/us/where-we-work/ukraine"
                >
                    Donate to support families affected by the war in Ukraine
                </a>
            </div>
            <div className={styles.wholeLink}>
                <a
                    className={styles.catchPh2}
                    href="https://www.apple.com/iphone-13-pro/"
                    target="_self"
                >
                    <Image
                        src={catchPh2}
                        alt="notloaded"
                        layout="fixed"
                        width={850}
                        height={130}
                    />
                </a>
                <a
                    className={styles.ShopNowLink}
                    href="https://www.apple.com/us-hed/shop/back-to-school"
                    target="_self"
                >
                    Shop Now
                </a>
                <a
                    className="catchImg"
                    href="https://www.apple.com/iphone-13-pro/"
                    target="_self"
                    style={{ paddingTop: 25 }}
                >
                    <Image
                        src={catchImg}
                        alt="notloaded"
                        layout="fixed"
                        width={450}
                        height={460}
                    />
                </a>

                <a
                    className="iPhoneText1"
                    href="https://www.apple.com/iphone-13-pro/"
                    target="_self"
                    style={{ paddingTop: 10 }}
                >
                    <Image
                        src={iPhoneText1}
                        alt="iPhone_02"
                        layout="fixed"
                        width={475.993}
                        height={125.993}
                    />
                </a>
                <a
                    className={styles.LeanMoreLink}
                    href="https://www.apple.com/iphone-13-pro/"
                    target="_self"
                >
                    LeanMore
                </a>

                <a
                    className={styles.iPhoneShow2}
                    href="https://www.apple.com/iphone-13-pro/"
                    target="_self"
                >
                    <Image
                        src={iPhoneimg2}
                        alt="notloaded"
                        layout="fixed"
                        width={830.993}
                        height={470.993}
                    />
                </a>
                <a
                    className="iPhoneText2"
                    href="https://www.apple.com/iphone-13-pro/"
                    target="_self"
                    style={{ paddingTop: 50 }}
                >
                    <Image
                        src={iPhoneText2}
                        alt="notloaded"
                        layout="fixed"
                        width={375.993}
                        height={100.993}
                    />
                </a>
                <a
                    className={styles.LeanMoreLink}
                    href="https://www.apple.com/iphone-13-pro/"
                    target="_self"
                    style={{ paddingTop: 10, paddingBottom: 10 }}
                >
                    LeanMore
                </a>

                <a
                    className="iPhoneShow"
                    href="https://www.apple.com/iphone-13-pro/"
                    target="_self"
                >
                    <Image
                        src={iPhoneimg}
                        alt="notloaded"
                        layout="fixed"
                        width={650.993}
                        height={450.993}
                    />
                </a>
            </div>
        </div>
    );
}

export default Mainpage;
