import React from 'react';
import styles from './inputAdress.module.css';
function inputAdress() {
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

            <button>결제</button>
        </div>
    );
}

export default inputAdress;
