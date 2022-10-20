import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import './Login.css'

const Login = () => {

    const { signIn, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state.from?.pathname || '/'

    const handelSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });

            })
            .catch(error => console.error(error))
    }


    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, []);


    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handelSubmit} action="">
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>

                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>

                <input className='btn-submit' type="submit" value="Login" />

            </form>

            <p className=''>New to Ema John <Link to='/SignUp'>Create A New Account</Link></p>

        </div>
    );
};

export default Login;