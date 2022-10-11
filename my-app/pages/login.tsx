/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import styles from './login.module.css';
import Nav from '../components/Nav';
function login() {
    const [jwtk, setjwtk] = useState('');
    const [usersid, setID] = useState('');
    const [userspw, setPW] = useState('');
    const mytokenss = {
        mytoken: jwtk,
    };
    const sendjson = {
        usersid: usersid,
        userspw: userspw,
    };

    function sendingInfo() {
        //서버에서 받아본 결과 req.params에 아무것도 안들어있음
        // 값을 정확하게 보내줄수있도록 코드 변경하기
        axios
            .post('http://localhost:8080/login', JSON.stringify(sendjson), {
                headers: { 'Content-Type': `application/json` },
            })
            .then((res) => {
                console.log(sendjson);
                console.log(res.data);
                setjwtk(res.data);
            });
    }
    // post api에 authorization 메인? 있는대 알아보기
    function verifyss() {
        console.log('parameter' + jwtk);

        axios
            .post('http://localhost:8080/verify', JSON.stringify(mytokenss), {
                headers: { 'Content-Type': `application/json` },
            })
            .then((res) => {
                console.log(JSON.stringify(mytokenss));
                console.log(res.data);
                return console.log(res.data);
            });
    }

    function visibleC() {
        document.getElementById('chekcingPw').style.visibility = 'visible';
    }

    return (
        <div>
            <Nav />
            <div id="loginContainer" className={styles.loginContainer}>
                <h1 id="signText" className={styles.signText}>
                    Sign in for faster checkout.
                </h1>
                <div id="inputContainer" className={styles.inputContainer}>
                    <span>Sign in to Apple Store</span>
                    <div id="checkingId">
                        <input
                            id="inputId"
                            placeholder="Apple-ID"
                            type="text"
                            onChange={(event) => setID(event.target.value)}
                        />
                        <button id="visiblePw" onClick={visibleC}>
                            next
                        </button>
                    </div>
                    <div id="chekcingPw" className={styles.chekcingPw}>
                        <input
                            id="inputPW"
                            placeholder="Apple-PW"
                            type="text"
                            onChange={(event) => setPW(event.target.value)}
                        />
                        <button onClick={sendingInfo}>Sign</button>
                    </div>
                    <button onClick={verifyss}>verify</button>
                </div>
            </div>
        </div>
    );
}

export default login;
