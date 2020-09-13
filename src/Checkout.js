import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket, user }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                {/* {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                    </div>
                ) : (
                    <div>
                        <h2>Your Shopping Basket</h2>
                    </div>
                )} */}
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                </div>
                
                {/* This part is for checkout from refreshing, while coding */}
                    {/* <CheckoutProduct 
                        id={12345678}
                        title='this is a test'
                        image="https://images-na.ssl-images-amazon.com/images/I/51IHxsdQIjL._AC_SL1000_.jpg"
                        price={1099.99}
                        rating={5}
                    />
                    <CheckoutProduct 
                        id={12345678}
                        title='this is a test'
                        image="https://images-na.ssl-images-amazon.com/images/I/51IHxsdQIjL._AC_SL1000_.jpg"
                        price={1099.99}
                        rating={5}
                    /> */}

                    {/* CheckoutProduct */}
                {basket.map(item => (
                    <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
            
            <div className="checkout__right">
                {/* Subtotal component */}
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
