import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
            <div style={{ backgroundImage: "url(/bg.png)",width: '90rem',
  height: '64.438rem' }}>
<h5>Omega</h5>
            <form action="/home" style={{
        backgroundColor:'rgba(0, 0, 0, 0.44)',

}}>
            <h2>Sign in to us</h2>
                <p>
                    <br/>
                    <input type="text" name="first_name" placeholder='Username or email address' required />
                </p>
                <p>
                
                    
                    <br/>
                    <input type="password" name="password" placeholder='Password' required /><br/>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link><br/>
                </p>
                <p>
                    <button id="sub_btn" type="submit">Sign in</button>
                </p>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </form>
            </div>
        </div>
    )
}
