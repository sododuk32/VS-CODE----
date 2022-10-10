/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
function login() {
    const [jwtk, setjwtk] = useState('');
    const [usersid, setID] = useState('');
    const [userspw, setPW] = useState('');

    function sendingInfo() {
        //서버에서 받아본 결과 req.params에 아무것도 안들어있음
        // 값을 정확하게 보내줄수있도록 코드 변경하기
        axios
            .post('http://localhost:8080/login', {
                usersid: usersid,
                userspw: userspw,
            })
            .then((res) => {
                console.log(usersid + 'id || pw' + userspw);
                console.log(res.data);
                setjwtk(res.data);
            });
    }
    let verifys = '';
    function verifyss() {
        console.log('parameter' + jwtk);

        axios
            .post('http://localhost:8080/verify', {
                mytoken: jwtk,
            })
            .then((res) => {
                console.log(jwtk);
                console.log(res.data);
                return (verifys = res.data);
            });
    }

    return (
        <div>
            <div id="loginContainer">
                <h1 id="signText">Sign in for faster checkout.</h1>
                <div id="inputContainer">
                    <span>Sign in to Apple Store</span>
                    <input
                        id="inputId"
                        placeholder="Apple-ID"
                        type="text"
                        onChange={(event) => setID(event.target.value)}
                    />
                    <input
                        id="inputPW"
                        placeholder="Apple-PW"
                        type="text"
                        onChange={(event) => setPW(event.target.value)}
                    />
                    <button onClick={sendingInfo}>Login</button>
                    <button onClick={verifyss}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default login;
