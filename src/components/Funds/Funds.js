import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Fund from '../Fund/Fund';
import './Funds.css'

const Funds = () => {
    const [funds, setFunds] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>
        fetch("./fund.json")
            .then(res => res.json())
            .then(data => setFunds(data))
        , [])

    const handleAddToCart = (fund) => {
        const newCart = [...cart, fund];
        setCart(newCart);
    }

    return (
        <div className="funds-container">

            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            funds.map(fund => <Fund key={fund.id} fund={fund} handleAddToCart={handleAddToCart}> </Fund>)
                        }
                    </div>
                </div>

                <div className="col-md-3">
                    <Cart cart={cart}> </Cart>
                </div>
            </div>
        </div>
    );
};

export default Funds;