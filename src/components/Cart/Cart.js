import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    return (
        <div className="cart">
            <h2>Trustee Added:{cart.length}</h2>
            <ul>
                {
                    cart.map((fund) =>
                        <li key={fund.key}>Fund Donor and Amount: {fund.name} $ {fund.donation} </li>)
                }
            </ul>

        </div>
    );
};

export default Cart;