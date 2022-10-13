import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
           
           
                <div style={{ backgroundImage: "url(/bg.png)",width: '90rem',
  height: '64.438rem' }}>
    <h5>Omega</h5>
    <form style={{
        backgroundColor:'rgba(0, 0, 0, 0.44)',

}}>
            <h2>Sign Up</h2>
            <p>No credit card required</p>
                <p>
                    <br/>
                    <input type="email" name="email" placeholder='Email address ' required />
                </p>
                <p>
                    <br/>
                    <input type="text" name="first_name" placeholder='Company Name' required />
                </p>
                <p>
                   <br/>
                    <input type="password" name="password" placeholder='Password' requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Get Started</button>
                </p>
                <p>Already have an account?<Link to="/login">Sign in</Link></p>
                </form></div>

          
        </div>
    )

}
