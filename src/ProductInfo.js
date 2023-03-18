import React from 'react'
import './ProductInfo.css';
import { useStateValue } from './StateProvider';

function ProductInfo({ id, title, image, price }) {
    const [{ details }, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
            }
        }
        );
    }
    return (
        <div className='container'>
            <div className='img'>
                <img className="login--logo" src={image} alt='Logo' />
            </div>
        </div>
    )
}

export default ProductInfo