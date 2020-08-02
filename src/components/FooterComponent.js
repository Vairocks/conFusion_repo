import React from 'react';
import {Link} from 'react-router-dom';

function Footer(props){
    return(
        <footer className="footer">
		<div className="container">
			<div className="row">
				<div className="col-5 offset-1 col-sm-2"> 
					<h5>Links</h5>
					<ul className="list-unstyled">
						<li><Link to="/home">Home</Link></li>
						<li><Link to="/aboutus">About</Link></li>
						<li><Link to="/menu">Menu</Link></li>
						<li><Link to="/contactus">Contact</Link></li>
					</ul>
				</div>
				<div className="col- col-sm-5">
					<h5>Our Address</h5>
					<address>
					121, Clear Water Bay Road<br/>
					Clear Water Bay, Kowloon<br/>
					HONG KONG<br/>
					<i className="fa fa-phone fa-lg"></i> :852 1234 5678<br/>
					<i className="fa fa-fax fa-lg"></i> :852 1234 5678<br/>
					<i className="fa fa-envelope fa-lg"></i><a href="mailto:vaibhav.garg.334@gmail.com"> confusion@food.net</a>
					</address>
				</div >
				<div className="col col-sm-4 align-self-center">
					<div>
						<a className="btn btn-social-icon btn-google-plus" href="https://www.google.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus fa-lg"></i></a>
						<a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook fa-lg"></i></a>
						<a className="btn btn-social-icon btn-linkedin" href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-lg"></i></a>
						<a className="btn btn-social-icon btn-twitter" href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-lg"></i></a>
						<a className="btn btn-social-icon btn-youtube" href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube fa-lg"></i></a>
						<a className="btn btn-social-icon btn-envelope" href="mailto:vaibhav.garg.334@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope fa-lg"></i></a>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-auto">
					<p>@ Copyright 25 Ristorante Con Fusion</p>
				</div>
			</div>
		</div>
	</footer>
    );
}

export default Footer;