import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home--container'>
                <img className='home--image' src='https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg' alt='' />

                <div className='home--row'>
                    <Product
                        id='01'
                        title='See U in C by Ali Karim Sayed (Author)'
                        price={4450}
                        image='https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg'
                    />
                    <Product
                        id="02"
                        title="Apple iPhone 11 (64GB) - Black"
                        price={31000}
                        image="https://m.media-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg"
                    />

                    <Product
                        id="03"
                        title="HP Chromebook x360 14-inch"
                        price={4450}
                        image="https://m.media-amazon.com/images/I/81hoonPUdxL._SL1500_.jpg"
                    />
                </div>
                <div className='home--row'>
                    <Product
                        id="04"
                        title="Noise ColorFit Pro 2"
                        price={2800}
                        image="https://m.media-amazon.com/images/I/61xzuXWWozS._SL1200_.jpg"
                    />

                    <Product
                        id="05"
                        title="Mi 80 cm (32 inches) HD"
                        price={16999}
                        image="https://m.media-amazon.com/images/I/81rONKWm24L._SL1500_.jpg"
                    />
                </div>
                <div className='home--row'>
                    <Product
                        id="05"
                        title="Echo Dot (3rd Gen)"
                        price={3450}
                        image="https://m.media-amazon.com/images/I/61WUqJd4dfS._SL1000_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
