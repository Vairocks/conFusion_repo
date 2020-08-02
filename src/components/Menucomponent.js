import React from 'react';
import {Card, Breadcrumb,BreadcrumbItem} from 'react-bootstrap';
import DishDetail from './Dishdetailcomponent';
import {Link} from 'react-router-dom';//Link to makeing each card a link or the router the link id will be menu/dishId
import {Loading} from './LoadingComponent';

function RenderMenuItem({dish, onClick})
{
    return(
        <Card>
        <Link to={`/menu/${dish.id}`}>
        <Card.Img width="100%" src={dish.image} alt={dish.name}/>
        <Card.ImgOverlay>
            <Card.Title>{dish.name}</Card.Title>
        </Card.ImgOverlay>
        </Link>
    </Card>
    );
}   

const Menu = (props) => {
    // here menu componenet has accepted the new created property dishes by APP.js to Menu and is using dishes information passed via. it
    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish = {dish} />
            </div>
        );
    });
    if(props.dishes.isLoading) {
        return(
            <div className="container">
                <div className='row'>
                    <Loading />
                </div>
             </div>   
        )
    }
    else if(props.dishes.errMess) {
        return(
            <div className="container">
            <div className='row'>
                <h4>{props.dishes.errMess}</h4>
            </div>
         </div>
        );
    }
    else 
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr/>
                    </div>
                </Breadcrumb>
            </div>
            <div className="row">
                {menu}
            </div>
                    
        </div>
    );
}
    

    
export default Menu;