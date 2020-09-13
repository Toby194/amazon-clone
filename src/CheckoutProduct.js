import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // removing the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                    <div className="checkoutProduct__rating">
                        {Array(rating)
                        .fill()
                        .map(()  => (
                            <p>⭐️</p>
                        ))}
                    </div>
                    {!hideButton && (
                        <button onClick={removeFromBasket}>
                            Remove from Basket
                        </button>
                    )}
                </p>
            </div>
        </div>
    )
}

export default CheckoutProduct
