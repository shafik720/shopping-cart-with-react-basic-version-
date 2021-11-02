import React, { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const[products, setProducts] = useState([]);
    const[cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    const handleClick = (product) =>{
        const storeCart = [...cart, product];
        setCart(storeCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                <h3>Products Found: {products.length} </h3>
                <h2>This is product Container</h2>
                {
                    products.map(product=><Products
                        product = {product}
                        key = {product.key}
                        handleClick = {handleClick}
                    ></Products>)
                }
            </div>
            <div className="cart-container">
                
                <Carts cart={cart}></Carts>
            </div>
        </div>
    );
};

export default Shop;