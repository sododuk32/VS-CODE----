import React from 'react';
import Nav from '../components/Nav';
//결제정보 입력받기
function payments() {
    return (
        <div>
            <Nav />
            <div id="paymentsNav">
                <h1>Check Out</h1>
                <a href="">show Order Summery here'stotalPrice</a>
            </div>
            <div id="choiceTaking">
                <h1>How would you like to get your order?</h1>
                <div>div생성 선택창 2개 배달,픽업 </div>
                <div>deliver to :이전에받은 zip코드</div>
            </div>
            <div id="productSummery">
                <div>card1</div>
                <div>card2</div>
            </div>
            <button>coninue shipping</button>

            <div>이하 인풋태그 여러개 </div>
            <div>여기 결제버튼</div>
        </div>
    );
}

export default payments;
