/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
function login() {
    let ttt = '';
    function sendingInfo() {
        //서버에서 받아본 결과 req.params에 아무것도 안들어있음
        // 값을 정확하게 보내줄수있도록 코드 변경하기
        axios
            .post('http://localhost:8080/login', {
                usersid: document.getElementById('inputId').value,
                userspw: document.getElementById('inputPw').value,
            })
            .then((res) => {
                ttt = res.data;
                console.log(ttt);
                testingToken(ttt);
            });
    }
    function testingToken(ttoken: string) {
        console.log('parameter' + ttoken);
        axios
            .post('http://localhost:8080/verify', {
                mytoken: ttoken,
            })
            .then((res) => {
                console.log(res.data);
            });
    }
    return (
        <div>
            <div id="loginContainer">
                <h1 id="signText">Sign in for faster checkout.</h1>
                <div id="inputContainer">
                    <span>Sign in to Apple Store</span>
                    <input id="inputId" placeholder="Apple-ID" type="text" />
                    <input id="inputPw" placeholder="Password" type="text" />
                    <button onClick={sendingInfo}>login</button>
                </div>
            </div>
        </div>
    );
}

export default login;
