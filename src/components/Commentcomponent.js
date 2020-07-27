import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

//{new Intl.DateTimeFormat('en-US',{year:'numeric',month:"short",day:'2-digit'}).format(new Date(Date.parse(commt.date)))}

class Comm extends Component{
    constructor(props){
        super(props);
        
    }

        render(props){
            var dish = this.props.current_dish;


            if(dish!=null){
                var comms = dish.comments.map((commt) => {
                    return (
                        <div key={commt.id} className="row">
                          <span className="col-6">  {commt.author} </span><span className="col-auto"></span> ,<span className="col4"> {commt.rating}Star - *No date</span>
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
            else{
                return(
                    <div></div>
                );
            }
    }
    
}

export default Comm;