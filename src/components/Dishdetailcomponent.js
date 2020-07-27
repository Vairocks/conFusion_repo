import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

class DishDetail extends Component{
    

        render(props){
            var dish = this.props.selected_dish;
            if(dish!=null){
                return(
                    <Card className="bg-dark text-white col-12 col-md-5 m-1">
                        <Card.Img width="100%" src={dish.image} alt={dish.name}/>
                        <Card.Body>
                            <Card.Title>{dish.name}</Card.Title>
                            <Card.Text>{dish.description}</Card.Text>
                        </Card.Body>
                    </Card>
                    );
            }
            else{
                return(
                    <div></div>
                );
            }
    }
    
}

export default DishDetail;