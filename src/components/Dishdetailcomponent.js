import React from 'react';
import {Card,Breadcrumb,BreadcrumbItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function RenderDish(props){
    return(
    <Card>
        <Card.Img width="100%" src={props.dish.image} alt={props.dish.name}/>
        <Card.Body>
            <Card.Title>{props.dish.name}</Card.Title>
            <Card.Text>{props.dish.description}</Card.Text>
        </Card.Body>
    </Card>
    );

}   
// props are sent as an object here {dish}
function AllComments({comments}){
    var comms = comments.map((commt) => {
        return (
            <div key={commt.id} className="row">
              <span className="col-6">  {commt.author} </span><span className="col-auto"></span> ,<span className="col-5"><h6>{commt.rating} <i class="fa fa-star fa-lg"></i> -*Date</h6></span>
              <p><cite>-{commt.comment}</cite></p>         
            </div>
        );
    });
    return(
        <Card>
            <Card.Body>
                <Card.Title>Comments</Card.Title>
                <Card.Text className="container">{comms}</Card.Text>
            </Card.Body>
        </Card>
        );


}

    

function DishDetail(props){
    if(props.dish!=null){
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
                        <AllComments comments={props.comments}/>
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