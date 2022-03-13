import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    const [{ cart, user }, dispatch] = useStateValue();
    return (
        <div className='allHeader'>
            <div className='header'>
                <Link to='/'>
                    <img className='header--logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='Amazon Logo' />
                </Link>

                <div className='header--search'>
                    <input className='header--searchInput type=' text />
                    <SearchIcon className='header--searchIcon' />
                </div>

                <div className='header--nav'>
                    <Link className='link' to={!user && '/login'}>
                        <div onClick={handleAuthentication} className='header--option'>
                            <span className='header--optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
                            <span className='header--optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                        </div>
                    </Link>

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
                        <span className='header--optionLineTwo header--basketCount'>{cart?.length}</span>
                    </div>
                </Link>
            </div>
                
                <div className='mobile--search'>
                    <input className='mobile--searchInput type=' text />
                    <SearchIcon className='mobile--searchIcon' />
                </div>

        </div>
    )
}

export default Header
