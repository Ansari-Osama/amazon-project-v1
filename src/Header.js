import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
            <img className='header--logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='Amazon Logo' />
            </Link>

            <div className='header--search'>
                <input className='header--searchInput type=' text />
                <SearchIcon className='header--searchIcon' />
            </div>

            <div className='header--nav'>
                <div className='header--option'>
                    <span className='header--optionLineOne'>Hello Guest</span>
                    <span className='header--optionLineTwo'>SignIn</span>
                </div>

                <div className='header--option'>
                    <span className='header--optionLineOne'>Retun</span>
                    <span className='header--optionLineTwo'>&Order</span>
                </div>

                <div className='header--option'>
                    <span className='header--optionLineOne'>Your</span>
                    <span className='header--optionLineTwo'>Prime</span>
                </div>
            </div>

           <Link to='/checkout'>
            <div className='header--optionBasket'>
                <ShoppingCartIcon />
                <span className='header--optionLineTwo header--basketCount'>0</span>
            </div>
            </Link>
        </div>
    )
}

export default Header
