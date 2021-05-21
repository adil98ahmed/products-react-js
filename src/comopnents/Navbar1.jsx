import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import {Link } from "react-router-dom";
function Navbar1() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="p-2 m-1 text-white bg-info rounded" to='/'>Home</Link>
                        <Link className="p-2 m-1 text-white bg-success rounded" to='/login'>Login</Link>
                        <Link className="p-2 m-1 text-white bg-danger rounded" to='/sign-up'>Sign-up</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navbar1
