//Login.js
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';
import logo3 from './assets/logo3.jpeg';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            if (auth) {
                history.push('/');
            }
        }).catch(error => alert(error.message));
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //it Successfull Create A new User
                if (auth) {
                    history.push('/');
                }
            }).catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to="/">
                <img className="login--logo" src={logo3} alt='Logo' />
            </Link>
            <div className='login--container'>
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' onClick={signIn} className='login--signButton'>Sign In</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button type='submit' onClick={register} className='login--registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login