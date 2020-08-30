import React, {Component} from 'react';
import {Button, FormLabel, Col,Row} from 'react-bootstrap';
import { Control, LocalForm,Errors } from 'react-redux-form';
import {Link, Redirect} from 'react-router-dom';

const required = (val) => (val && val.length);
const maxLength =(len) => (val) => !(val) || (val.length <= len );
const minLength =(len) => (val) => !(val) || (val.length >= len );

class Login extends Component{

    constructor(props){
        super(props);

    }

    handleSubmit(values){
        this.props.login(values.username,values.password) 
        console.log("Current State is: "+JSON.stringify(values));
        alert("Current State is: " +JSON.stringify(values));
    }

    render()
    {
        if(!this.props.login_status.loggedIn){    
    return(
        <div className='container'>
        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                    <FormLabel htmlFor="username" >UserName:</FormLabel>
                    <Col>
                        <Control.text model=".username" className="form-control" id="username" 
                         name="username" placeholder="UserName"    
                         validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(25)
                                    }}
                        />
                        <Errors
                            className="errors"
                            model= ".username"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 25 characters or less'
                                }} 
                        />
                    </Col>
                </Row>
                <Row className="form-group">
                    <FormLabel htmlFor="password" >Password:</FormLabel>
                    <Col md={9}>
                        <Control.text type="password" model=".password" className="form-control" id="password" 
                         name="password" placeholder="your password"    
                         validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(25)
                                    }}
                        />
                        <Errors
                            className="errors"
                            model= ".password"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 25 characters or less'
                                }} 
                        />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col >
                  
                        <Button type="submit" className="primary col-2 col-md-1">
                            Login
                        </Button>
                        <span className="col"></span>
                        <Link to={`/register`}><Button className="primary col-2 col-md-1">
                            Register
                        </Button></Link>             
                    </Col>
                </Row>
            </LocalForm>
   </div> );
   }
   else{return(<Redirect to="/home" />); }
}
}


export default Login;