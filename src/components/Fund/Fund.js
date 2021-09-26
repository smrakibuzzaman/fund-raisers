import React from 'react';
import Cart from '../Cart/Cart';
import './Fund.css'

const Fund = (props) => {
    const { name, age, country, donation, image, organization } = props.fund;
    console.log(props)
    return (
        <div className="fund-container col-md-4 g-5">
            <div className="card" >
                <img className="image" src={image} class="card-img-top img-thumbnail" alt="..." />
                <div className="card-body">
                    <p className="card-text">Name: {name}</p>
                    <p className="card-text">Organization: {organization} </p>
                    <p className="card-text">Age: {age} </p>
                    <p className="card-text">Country: {country}</p>
                    <p className="card-text">Donation: $ {donation} </p>
                    <button onClick={() => props.handleAddToCart(props.fund)} className="btn button"><i class="fas fa-donate"></i> Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Fund;