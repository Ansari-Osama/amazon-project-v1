import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
import ProductInfo from './ProductInfo';
import { Link } from 'react-router-dom';

function Product({ id, title, price, image }) {
    const [{ cart }, dispatch] = useStateValue();

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
        <div className='product'>
            <div className='product--info'>
                <p>{title}</p>

                <p className='product--price'>
                    <bold>₹</bold>
                    <strong>{price}</strong>
                </p>
                <img className='product--image' src={image} alt='See U in C' />
            </div>
            <Link to="/productInfo">
                <button className='product--button' onClick={addToCart} >Add to Cart</button>
            </Link>
        </div>
    )
}

export default Product
