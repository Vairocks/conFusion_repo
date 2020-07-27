import React, {Component} from 'react';
import {Navbar,NavbarBrand, Jumbotron} from 'react-bootstrap';

class Header extends Component{
    render(){
        return(
            <>
                <Navbar bg="dark" variant="dark">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante ConFusion</NavbarBrand>
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
}

export default Header;