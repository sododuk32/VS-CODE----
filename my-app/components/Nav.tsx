import React from 'react';
import styles from './Nav.module.css';
import Image from 'next/image';

const Nav = () => {
    return (
        <div className={styles.navBar}>
            <div className={styles.navList}>
                <ul className={styles.list}>
                    <li className={styles.navLogo}>
                        <Image
                            className={styles.logogImage}
                            src="/logo.png"
                            alt="iPhone_01"
                            layout="fixed"
                            width={30.993}
                            height={20.993}
                        />
                    </li>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>ipad</li>
                    <li>iPhone</li>
                    <li>watch</li>
                    <li>AirPods</li>
                    <li>TV & Home</li>
                    <li>Only on Apple</li>
                    <li>Accessories</li>
                    <li>Support</li>
                    <li>search</li>
                    <li>
                        <a href="/UsersBag">userBag</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
