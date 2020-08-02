import React from 'react';
import {Nav,Navbar, Jumbotron} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

function Header(){
        return( 
            <>
                <Navbar bg="dark" variant="dark" expand="md">
                    <div className="container">
                        <Navbar.Brand className="mr-auto"  href="/"><img src="../../public/logo192.svg" height="30" width="41" alt="Ristorante Con Fusion"/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav navbar>
                        <Nav.Link href="/home"><span className="fa fa-home fa-lg"></span> Home</Nav.Link>
                        <Nav.Link href="/aboutus"><span className="fa fa-info fa-lg"></span> About Us</Nav.Link>
                        <Nav.Link href="/menu"><span className="fa fa-list fa-lg"></span> Menu</Nav.Link>
                        <Nav.Link href="/contactus"><span className="fa fa-address-card fa-lg"></span> Contact Us</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the Worlds best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>      
            </>
        );
    
}

export default Header;