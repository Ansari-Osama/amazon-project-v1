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
                        price={100}
                        image='https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg'
                    />

                    <Product
                        id="02"
                        title="Apple iPhone 11 (64GB) - Black"
                        price={300}
                        image="https://m.media-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg"
                    />

                    <Product
                        id="03"
                        title="HP Chromebook x360 14-inch"
                        price={200}
                        image="https://m.media-amazon.com/images/I/81hoonPUdxL._SL1500_.jpg"
                    />
                    <Product
                        id="04"
                        title="Noise ColorFit Pro 2"
                        price={150}
                        image="https://m.media-amazon.com/images/I/61xzuXWWozS._SL1200_.jpg"
                    />
                </div>
                <div className='home--row'>
                    <Product
                        id="05"
                        title="Apple MacBook Pro"
                        price={500}
                        image="https://m.media-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg"
                    />
                    <Product
                        id="06"
                        title="SanDisk Cruzer Blade 32GB USB Flash Drive"
                        price={369}
                        image="https://m.media-amazon.com/images/I/61DjwgS4cbL._SL1500_.jpg"
                    />
                    <Product
                        id="07"
                        title="Apple iPad"
                        price={1000}
                        image="https://m.media-amazon.com/images/I/71dwvdUu72L._SL1500_.jpg"
                    />
                    <Product
                        id="08"
                        title="Ganvida Desktop Computer"
                        price={3000}
                        image="https://m.media-amazon.com/images/I/811A5xhCQtL._SL1500_.jpg"
                    />
                </div>
                <div className='home--row'>
                    <Product
                        id="09"
                        title="Pigeon by Stovekraft Cruise 1800 watt Induction Cooktop (Black)"
                        price={1000}
                        image="https://m.media-amazon.com/images/I/61DAkNxj9uL._SL1080_.jpg"
                    />
                    <Product
                        id="10"
                        title="Chopper"
                        price={60}
                        image="https://m.media-amazon.com/images/I/61EeTvDZ0SL._SL1500_.jpg"
                    />
                    <Product
                        id="11"
                        title="Stainless Steal Chopping Board"
                        price={130}
                        image="https://m.media-amazon.com/images/I/616ZtqZvQDL._SL1100_.jpg"
                    />
                    <Product
                        id="12"
                        title="Oil Despenser"
                        price={80}
                        image="https://m.media-amazon.com/images/I/41SBP-ZAgzL.jpg"
                    />
                </div>
            </div>
        </div >
    )
}

export default Home
