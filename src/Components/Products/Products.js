import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    const{img, name, price, seller, stock } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingBag} />

    return (
        <div className='products'>
            <div className="products-one">
                <img src={img} alt="" />
            </div>
            <div className="products-two">
                <h3> {name} </h3>
                <p>Price: <strong>{price}</strong> </p>
                <p>sold by <strong>{seller}</strong> </p>
                <p>only {stock} items left in stock </p>
                <button onClick={()=>{props.handleClick(props.product)}} className='btn-regular'> {cartIcon}   Add to cart</button>
            </div>
        </div>
    );
};

export default Products;