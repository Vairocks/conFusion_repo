import React, {useState, Component} from 'react';
import {Nav,Navbar, Jumbotron, Form} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {baseUrl2} from '../shared/baseUrl';
import {Button, Modal} from 'react-bootstrap';
import { render } from '@testing-library/react';
import {Link} from 'react-router-dom';


{/*function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
      <>
        <Link to='/login'>
        <Button variant="primary" onClick={handleShow}>
        <span class="fa fa-sign-in sm"><div>`${this.props.login_status.loggedin?"No need":"Login"}`</div></span>
        </Button></Link>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton className="modal-header nav-color">
            <Modal.Title>Ristorante ConFusion</Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>UserName</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" onClick={handleClose}>
                    <span class="fa fa-sign-in sm">Login</span> 
                    </Button><span className="col-auto">or</span>
                    <Button variant="secondary" onClick={handleClose} className="justify-content-end">
                    <span class="fa fa-sign-in sm">SignUp</span>
                    </Button>
            </Form>
          </Modal.Body>
    </Modal>
      </>
    );
  }
  

 */}


function Header(props){
        const us = props.login_status.username;
        return( 
            <>
                <Navbar bg="dark" variant="dark" expand="md">
                    <div className="container">
                        <Navbar.Brand className="mr-auto"  href="/"><img src={baseUrl2+'assets/images/kadhai4.png'} height="30" width="41" alt="Ristorante Con Fusion"/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav navbar>
                        <NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg"></span> Home</NavLink>
                        <NavLink className="nav-link" to="/aboutus"><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                        <NavLink className="nav-link" to="/menu"><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                        <NavLink className="nav-link" to="/contactus"><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                        </Nav><p className="ml-auto"></p><Nav className="justify-content-end" activeKey="/home">
                        
                        <Nav.Item >
                            {!(props.login_status.loggedIn)?
                             <Link to='/login'>
                              <Button variant="primary">
                                <span className="fa fa-sign-in sm">Login</span>
                              </Button>
                             </Link>:<>
                             <span>{us} </span>
                             <Button variant="primary" onClick={() => props.logout()}>
                             <span className="fa fa-sign-in sm" >Logout</span>
                             </Button> </>                            
                           } 
                        </Nav.Item>
                         
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
