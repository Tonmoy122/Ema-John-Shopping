import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import './SignUp.css'

const SignUp = () => {

    const [error, setError] = useState(null);

    const { createUser } = useContext(AuthContext);

    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const Confirm = form.Confirm.value;
        console.log(email, password, Confirm);

        if (password.length < 6) {
            setError('password should be 6 characters or more');
            return;
        }
        if (password !== Confirm) {
            setError('your password did not match');
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.log(error));
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>SignUp</h2>
            <form onSubmit={handelSubmit} action="">
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>

                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>

                <div className="form-control">
                    <label htmlFor="Confirm">Confirm Password</label>
                    <input type="password" name="Confirm" id="" required />
                </div>

                <input className='btn-submit' type="submit" value="Sign Up" />

            </form>

            <p className=''>Already Have An Account <Link to='/Login'>Login</Link></p>
            <p className='text-error'>{error}</p>

        </div>
    );
};

export default SignUp;