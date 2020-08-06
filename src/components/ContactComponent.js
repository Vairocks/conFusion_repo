import React from 'react';
import {Component} from 'react';
import {Breadcrumb,BreadcrumbItem, Button, FormLabel, Col,Row} from 'react-bootstrap';
import {Link} from 'react-router-dom'; 
import { Control, Form,Errors } from 'react-redux-form';

const required = (val) => {
    console.log(!(val) || (val.length <= 5 ));
    return(val && val.length);
};
const maxLength =(len) => (val) => !(val) || (val.length <= len );
const minLength =(len) => (val) => !(val) || (val.length >= len );
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Contact extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.errorFunction = this.errorFunction.bind(this);
    }

handleSubmit(values){
    console.log("Current State is: "+JSON.stringify(values));
    alert("Current State is: " +JSON.stringify(values));
    this.props.reset();
}

//no need for validate saperately becuse that would be done by react-redux on our behalf

errorFunction(val)
{
    console.log("Current State is: "+JSON.stringify(val));
   // document.getElementById("errorBox").innerHTML = "You wrote: " + val;
  
}


render(){
    return(
        <>
            <div className="row-12">
                <Breadcrumb>
                    <BreadcrumbItem className="offset-1"><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>              
                </Breadcrumb>
            </div>
            <h3 className="offset-5">Contact Us</h3>
                <hr/><br/>
        <div className="container">
        <div class="row row-header mb-0">        
            <div class="col-12">
                <h2>Location Information</h2>
            </div>
        
            <div class="col-12 col-md-6 offset-md-1">
                <h4>Our Address</h4>
                <address>
            
                    121, Clear Water Bay Road<br/>
                    Clear Water Ba, Kowloon<br/>
                    HONG Kong<br/>
                    <i class="fa fa-phone fa-lg"></i> :852 1234 5678<br/>
                    <i class="fa fa-fax fa-lg"></i> :852 1234 5678<br/>
                    <i class="fa fa-envelope fa-lg"></i><a href="mailto:vaibhav.garg.334@gmail.com"> confusion@food.net</a><br/><br/>             
                </address>
            </div>
        
            <div class="col-12 col-md-5">
                <h4>Map of our Location</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-11 offset-md-1">
                <div class="btn-group" role="group">
                    <a role="button" class="btn btn-primary" href="tel:+919720647434"><i class="fa fa-phone"> Call us</i></a>
                    <a role="button" class="btn btn-success" href="https://www.linkedin.in/"><i class="fa fa-skype"> Skype</i></a>
                    <a role="button" class="btn btn-primary" href="mailto:vaibhav.garg.334@gmail.com"><i class="fa fa-envelope"> Email</i></a>
                </div>
            </div>
        </div>

    

        <div class="row row-content no-gutters">
                    
                
            <div class="col-12">
                <h4>Send us feedback</h4>
            </div>
            <br/><br/>
            <div class="col-12 col-md-9">
                
                
                <Form model='feedback' onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <FormLabel htmlFor="firstname" md={2}>First name</FormLabel>
                        <Col md={10}>
                            <Control.text model=".firstname" className="form-control" id="firstname" 
                            name="firstname" placeholder="First name"
                         
                            validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15)
                            }}
                            />
                           <Errors
                                className="errors"
                                model= "firstname"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }} 
                                />
                            </Col>
                    </Row>
                    <Row className="form-group">
                    <FormLabel htmFor="lastname" md={2}>Last name</FormLabel>
                    <Col md={10}>
                            <Control.text model=".lastname" className="form-control" id="lastname" 
                            name="lastname" placeholder="Last Name"
                    
                            validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15)
                            }}
                            />
                           <Errors
                                className="errors"
                                wrapper={'p'}
                                model="lastname"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }} 
                           />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <FormLabel htmlFor="telnum" md={2}>Contact Tel.</FormLabel>
                        <Col md={10}>
                            <Control.text  t model=".telnum" class="form-control" id="telnm" 
                            name="telnum" placeholder="Tel. Number"
                            className="form-control" 
                            validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15),isNumber
                            }}
                            />
                          <Errors
                                className="text-danger"
                                model=".telnum"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 numbers',
                                    maxLength: 'Must be 15 numbers or less',
                                    isNumber: 'Must be a number'
                                }}
                            /> 
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <FormLabel htmlFor="email" md={2}>Email</FormLabel>
                        <Col md={10}>
                            <Control.text model=".email" className="form-control" 
                            id="email" name="email" placeholder="Email"
                            validators={{
                                required, validEmail
                            }}
                            />
                            <Errors
                                className="text-danger"
                                model=".email"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    validEmail: 'Invalid email Address must be of the form : ___@___.___'
                                    
                                }} 
                           />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={{size: 5, ofset: 2}}>
                            <div className="form-check-label">
                                <FormLabel check>
                                    <Control.checkbox model=".agree" 
                                    className="form-check-input" name="agree"/>{' '}
                                    <strong>May we contact you?</strong>
                                </FormLabel>
                            </div> 
                        </Col>
                        <Col md={{size: 3, offfset: 1}}>
                            <Control.select model=".contactType" className="form-control" name="contactType">
                                <option>Tel.</option>
                                <option>Email</option>
                            </Control.select>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <FormLabel htmlFor="message" md={2}>Your Feedback</FormLabel>
                        <Col md={10}>
                            <Control.textarea className="form-control" model=".message" 
                            id="message" name="message" 
                            placeholder="Type here" rows="12"></Control.textarea>
                        </Col>
                    </Row>

                    <Row className="form-group">
                        <Col md={{size:10, offset:2}}>
                            <Button type="submit" class="primary">
                                Send Feedback
                            </Button>
                        </Col>
                    </Row>


                </Form>
            </div>
        </div>
     </div>
     </>
    );
  }
}

export default Contact;