import React from 'react';
import {Card} from 'react-bootstrap';
import DishDetail from './Dishdetailcomponent';


function RenderMenuItem({dish, onClick})
{
    return(
        <Card onClick={() => onClick(dish.id)}>
        <Card.Img width="100%" src={dish.image} alt={dish.name}/>
        <Card.ImgOverlay>
            <Card.Title>{dish.name}</Card.Title>
        </Card.ImgOverlay>
    </Card>
    );
}   

const Menu = (props) => {
    // here menu componenet has accepted the new created property dishes by APP.js to Menu and is using dishes information passed via. it
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish = {dish} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
                    
        </div>
    );
}
    

    
export default Menu;