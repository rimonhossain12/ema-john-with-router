import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';


const OrderReview = () => {
    const [products] = useProducts();
    const [cart] = useCart(products);
    return (
        <div>
            <h1>total products length is : {products.length}</h1>
            <h3>{cart.length}</h3>
        </div>
    );
};

export default OrderReview;