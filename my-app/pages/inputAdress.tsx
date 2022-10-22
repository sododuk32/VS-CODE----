/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import styles from './inputAdress.module.css';
import { useState } from 'react';
import axios from 'axios';

function inputAdress() {
    const [Delinfo, setDelinfo] = useState<purchaseInfo>();
    let myInfo: purchaseInfo = {
        firstName: '',
        lastName: '',
        streetAdress: '',
        Apt: '',
        zipcode: 0,
        Email: '',
        PhoneNumber: '',
    };
    function sendingInfo() {
        myInfo = {
            firstName: document.getElementById('firstName')?.value,
            lastName: document.getElementById('lastName')?.value,
            streetAdress: document.getElementById('streetAdress')?.value,
            Apt: document.getElementById('Apt')?.value,
            zipcode: document.getElementById('zipcode')?.value,
            Email: document.getElementById('Email')?.value,
            PhoneNumber: document.getElementById('PhoneNumber')?.value,
        };
        axios
            .post('http://localhost:8080/delInfo', JSON.stringify(myInfo), {
                headers: { 'Content-Type': `application/json` },
            })
            .then((res) => {
                if (res.data === 'complete') {
                    console.log(res.data);
                    //배송현황 페이지 이동 메서드 추가하기
                }
                //완료시 동작수행
                if (res.data === 'ERROR') {
                    console.log(res);
                    console.log('you cant move something broke');
                }
                console.log('complete-Transfer');
            });
    }

    return (
        <div>
            <div className={styles.inputContainer}>
                <div>Where should we send your order?</div>
                <div>Enter your name and address:</div>
                <input type="text" id="firstName" placeholder="firstname" />
                <input type="text" id="LastName" placeholder="LastName" />
                <input
                    type="text"
                    id="Street Adress"
                    placeholder="Street Adress"
                />
                <input
                    type="text"
                    id="Apt"
                    placeholder="Apt,Suite,Building(optional)"
                />
                <input type="text" id="zipcode" placeholder="zipcode" />
                <input type="text" id="states" placeholder="states,city" />
            </div>
            <div id="contract" className={styles.contract}>
                <h1>What’s your contact information?</h1>
                <input type="text" id="Email" placeholder="Email Adress" />
                <input type="text" id="PhoneNumber" placeholder="PhoneNumber" />
            </div>

            <button onClick={sendingInfo}>결제</button>
        </div>
    );
}

export default inputAdress;
