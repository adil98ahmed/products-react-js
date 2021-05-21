import React from 'react'
import Home from './Home'
import Navbar1 from './Navbar1'
import ProductItem from './ProductItem'
import Login from './Login'
import SignUp from './SignUp'


import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
function Routing() {
    return (
        <Router>
            <Navbar1></Navbar1>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/sign-up" exact component={SignUp}></Route>
                <Route path="/product/:id" exact component={ProductItem}></Route>
            </Switch>
        </Router>
    )
}

export default Routing
