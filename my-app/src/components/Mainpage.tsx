import React from 'react';
import './Mainpage.css';
import Unicefimg from '../img/unicef.png';
import iPhoneimg from '../img/iphone.jpg';
import iPhoneimg2 from '../img/iphone2.jpg';
import iPhoneText1 from '../img/iPhoneText1.png';
import iPhoneText2 from '../img/iPhoneText2.png';
import catchPh2 from '../img/catchPh2.png';
import catchImg from '../img/catchImg.jpg';
function Mainpage() {
    return (
        <div className="main">
            <div className="selrection-content">
                <img className="unicefImg" src={Unicefimg} />
                <a
                    className="catchPh"
                    href="https://www.savethechildren.org/us/where-we-work/ukraine"
                >
                    Donate to support families affected by the war in Ukraine
                </a>
            </div>
            <div className="wholeLink">
                <a
                    className="iPhoneText1"
                    href="https://www.apple.com/iphone-13-pro/"
                    target="_self"
                >
                    <img src={iPhoneText1} alt="notloaded" />
                </a>
                <a
                    className="LeanMoreLink"
                    href="https://www.apple.com/iphone-13-pro/"
                    target="_self"
                >
                    LeanMore
                </a>

                <a
                    className="iPhoneShow2"
                    href="https://www.apple.com/iphone-13-pro/"
                    target="_self"
                >
                    <img src={iPhoneimg2} alt="notloaded" />
                </a>
                <a
                    className="iPhoneText2"
                    href="https://www.apple.com/iphone-13-pro/"
                    target="_self"
                >
                    <img src={iPhoneText2} alt="notloaded" />
                </a>
                <a
                    className="LeanMoreLink"
                    href="https://www.apple.com/iphone-13-pro/"
                    target="_self"
                >
                    LeanMore
                </a>

                <a
                    className="iPhoneShow"
                    href="https://www.apple.com/iphone-13-pro/"
                    target="_self"
                >
                    <img src={iPhoneimg} alt="notloaded" />
                </a>

                <a
                    className="catchPh2"
                    href="https://www.apple.com/iphone-13-pro/"
                    target="_self"
                >
                    <img src={catchPh2} alt="notloaded" />
                </a>
                <a
                    className="ShopNowLink"
                    href="https://www.apple.com/us-hed/shop/back-to-school"
                    target="_self"
                >
                    Shop Now
                </a>
                <a
                    className="catchImg"
                    href="https://www.apple.com/iphone-13-pro/"
                    target="_self"
                >
                    <img src={catchImg} alt="notloaded" />
                </a>
            </div>
        </div>
    );
}

export default Mainpage;
