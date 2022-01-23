import React from 'react';
import './Payment.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Payment() {
    const [{ cart, user }, dispatch] = useStateValue();

    return (
        <div className='payment'>
            <div className='payment--container'>
                {/* Delivery Address */}
                <div className='payment--section'>
                    <div className='payment--title'>
                        <h3>Delivery Address: </h3>
                    </div>
                    <div className='payment--address'>
                        <p>{user?.email}</p>
                        <p>Flat No 02, Hiranandani</p>
                        <p>Andheri, India</p>
                    </div>
                </div>
                {/* Cart Review */}
                <div className='payment--section'>
                    <div className='payment--title'>
                        <h3>Review Your Items in Cart: </h3>
                    </div>
                    <div className='payment--items'>

                        {cart.map(item =>
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                            />
                        )}
                    </div>
                </div>
                {/* Payment Gateway */}
                <div className='payment--section'>
                    <div className='payment--title'>
                        <h3>Payment Method: </h3>
                    </div>
                    <div className='payment--details'>
                        {/* Stripe Secret Code */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
