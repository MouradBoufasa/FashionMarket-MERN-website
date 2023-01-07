import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Store } from '../Store.js';
import '../Styles/signin.css'
const SignIn = () => {
    const navigate = useNavigate();
    const {search} = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {state, dispatch : ctxDispatch}  = useContext(Store);
    const submitHandler = async (e) =>{
        e.preventDefault();
        try {
            const {data} = await axios.post('/api/users/login',{
                email,
                password
            });
            ctxDispatch({type:'USER_SIGNIN',payload:data});
            localStorage.setItem('userInfo',JSON.stringify(data));
            navigate(redirect || '/');
        } catch (err) {
            alert('invalid E-mail or Password');
        }
    }    
    return (
    <div className='signin-container'>
        <div className="signin-row">
            <div className="signin-col">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required/>
                    </div>
                    <div className="form-group">
                        <button type="submit">Sign In</button>
                    </div>
                    <div className="form-group">
                        <Link to={`/signup?redirect=${redirect}/`} >Create you account</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
    }
export default SignIn