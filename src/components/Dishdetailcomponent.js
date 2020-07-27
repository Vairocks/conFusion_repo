import React from 'react';
import {Card} from 'react-bootstrap';


function RenderDish(props){
    return(
    <Card className="bg-dark text-white col-12 col-md-5 m-1">
        <Card.Img width="100%" src={props.dish.image} alt={props.dish.name}/>
        <Card.Body>
            <Card.Title>{props.dish.name}</Card.Title>
            <Card.Text>{props.dish.description}</Card.Text>
        </Card.Body>
    </Card>
    );

}   
// props are sent as an object here {dish}
function AllComments({dish}){
    var comms = dish.comments.map((commt) => {
        return (
            <div key={commt.id} className="row">
              <span className="col-6">  {commt.author} </span><span className="col-auto"></span> ,<span className="col-5"><h6>{commt.rating} <i class="fa fa-star fa-lg"></i> -*Date</h6></span>
              <p><cite>-{commt.comment}</cite></p>         
            </div>
        );
    });
    return(
        <Card className="bg-dark text-white col-12 col-md-5 m-1">
            <Card.Body>
                <Card.Title>Comments</Card.Title>
                <Card.Text className="container">{comms}</Card.Text>
            </Card.Body>
        </Card>
        );


}

    

function DishDetail(props){
    var dish = props.selected_dish;
    if(dish!=null){
        return(
        
                <div className="row">
                    <RenderDish dish={dish}/>
                    <AllComments dish={dish}/>
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