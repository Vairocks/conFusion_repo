import React from 'react';
import {Card, Breadcrumb,BreadcrumbItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';//Link to makeing each card a link or the router the link id will be menu/dishId
import {Loading} from './LoadingComponent';
import {baseUrl} from "../shared/baseUrl";

function RenderMenuItem({dish, onClick})
{
    return(
        <Card>
        <Link to={`/menu/${dish.id}`}>
        <Card.Img width="100%" src={baseUrl + dish.image} alt={dish.name}/>
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
        <>
            <div className="row-12">
                <Breadcrumb>
                    <BreadcrumbItem className="offset-1"><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
            </div>            
            <h3 className="offset-5">Menu</h3><hr/>
            <div className="container">
                 <div className="row">
                    {menu}
                </div>
            </div>
        </>
    );
}
    

    
export default Menu;