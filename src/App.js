import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'


import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                
                <Switch>
                    
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />           
                </Switch>
            </div>
        </Router>
    )
}
