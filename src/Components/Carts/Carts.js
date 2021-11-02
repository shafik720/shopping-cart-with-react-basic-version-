import React from 'react';

const Carts = (props) => {
    const{cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    return (
        <div>
            <h2>Product Ordered: {props.cart.length} </h2>
            <h2>Total Price: {total.toFixed(2)} </h2>
        </div>
    );
};

export default Carts;