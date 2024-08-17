import React from 'react';
import '../css/SignupPage.css';

const SignUpPage = () => {
    return (
        <div className="signup-page">
            <h1>Sign Up</h1>
            <form>
                <input type="text" placeholder="Username" className="input-field" />
                <input type="password" placeholder="Password" className="input-field" />
                <input type="password" placeholder="Confirm Password" className="input-field" />
                <button className="sign-up-btn">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpPage;
