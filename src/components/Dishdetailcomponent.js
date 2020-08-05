import React, {Component} from 'react';
import {Card,Breadcrumb,BreadcrumbItem,Button,Modal, FormLabel, Col,Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { Control, LocalForm,Errors } from 'react-redux-form';
import {Loading} from './LoadingComponent';
import {baseUrl} from "../shared/baseUrl";
import {FadeTransform,Fade,Staggger} from 'react-animation-components';


const required = (val) => (val && val.length);
const maxLength =(len) => (val) => !(val) || (val.length <= len );
const minLength =(len) => (val) => !(val) || (val.length >= len );
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


function RenderDish(props){
    return(
    <FadeTransform in 
            transformProps={{
                exitTransform: 'scale(0.5) translate(-50%)'
            }}>
    <Card>
        <Card.Img width="100%" src={baseUrl + props.dish.image} alt={props.dish.name}/>
        <Card.Body>
            <Card.Title>{props.dish.name}</Card.Title>
            <Card.Text>{props.dish.description}</Card.Text>
        </Card.Body>
    </Card>
    </FadeTransform>
    );

} 

class AllComments extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            showModal:false
        }
    }
    
    handleSubmit(values){
        this.setModalShow(false);
        this.props.postComment(this.props.dishId,values.ratings,values.fullname,values.message) 
        console.log("Current State is: "+JSON.stringify(values));
        alert("Current State is: " +JSON.stringify(values));
    }


    setModalShow(intent){
        this.setState({showModal: intent});
    }

    render(){

    const comms = this.props.comments.map((commt) => {
        return (
            <>
              <span className="col-6">  {commt.author} </span><span className="col-auto"></span> ,<span className="col-5"><h6>{commt.rating} <i className="fa fa-star fa-lg"></i> -*Date</h6></span>
              <p><cite>-{commt.comment}</cite></p>         
            </>
        );
    });
    
    return(
      <Card>
        <Card.Body>
          <Card.Title>Comment</Card.Title>
          <Card.Text className="container">{comms}</Card.Text>     
          <Button variant="outline-dark" onClick={() => this.setModalShow(true)}>
          <span className="fa fa-pencil"></span> Comment</Button>
            
            <Modal show={this.state.showModal} onHide={() => this.setModalShow(false)}>
              <Modal.Header className="nav-color" closeButton>
                  <Modal.Title >Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>

                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                  <Row className="form-group">
                  <FormLabel htmlFor="ratings" md={5}>Ratings</FormLabel>
                     <Col md={{size: 6, offfset: 1}}>
                            <Control.select model=".ratings" defaultValue={5} className="form-control" name="ratings" id="ratings">
                                <option>5</option>
                                <option>4</option>
                                <option>3</option>
                                <option>2</option>
                                <option>1</option>
                            </Control.select>
                        </Col>
                  </Row>
                  <Row className="form-group">
                    <FormLabel htmlFor="fullname" >First name:</FormLabel>
                    <Col md={9}>
                        <Control.text model=".fullname" className="form-control" id="fullname" 
                         name="fullname" placeholder="Your Full Name"    
                         validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(25)
                                    }}
                        />
                        <Errors
                            className="errors"
                            model= ".fullname"
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
                        <FormLabel htmlFor="message" md={2}>Your Comment:</FormLabel>
                        <Col md={12}>
                            <Control.textarea className="form-control" model=".message" 
                            id="message" name="message" 
                            placeholder="Type here" rows="6"></Control.textarea>
                        </Col>
                  </Row>
                  <Row className="form-group">
                        <Button variant="secondary" onClick={() => this.setModalShow(false)}>Close</Button>
                        <Col></Col>
                        <Col >
                            <Button type="submit" className="primary" onClick={() => this.setModalShow(false)}>
                                Send
                            </Button>
                        </Col>
                    </Row>
                    </LocalForm>
                    </Modal.Body>
      </Modal>
            </Card.Body>
        </Card>
        );
    }

}

    

function DishDetail(props)
{ 
    if(props.isLoading) {
        return(
            <div className="container">
                <div className='row'>
                    <Loading />
                </div>
             </div>   
        )
    }
    else if(props.errMess) {
        return(
            <div className="container">
            <div className='row'>
                <h4>{props.errMess}</h4>
            </div>
         </div>
        );
    }
    else if(props.dish!=null){
        return(
            <div className="container">
                <div className="row-12">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                            <hr/>
                    </Breadcrumb>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <AllComments comments={props.comments} 
                        postComment={props.postComment}
                        dishId={props.dish.id}/>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return(
            <div></div>
        );
    }
    }

    
export default DishDetail;