import React from 'react';
import {Breadcrumb,BreadcrumbItem} from 'react-bootstrap';
import {Link} from 'react-router-dom'; 
function Contact(props){
    return(
        <div class="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr/>
                    </div>
                </Breadcrumb>
            </div>
        <div class="row row-header mb-0">
           
            <div class="col-12">
                <h3>Contact Us</h3>
                <hr/><br/>
            </div>                   
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
                    <a role="button" class="btn btn-success" href="#"><i class="fa fa-skype"> Skype</i></a>
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
                <form>
                    <div class="form-group row">
                        <label for="firstname" class="col-md-2 col-form-label">First name</label>
                        <div class="col-md-10">
                            <input type="text" class="form-control" id="firstname" name="firstname" placeholder="First name"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="lastname" class="col-md-2 col-form-label">Last name</label>
                        <div class="col-md-10">
                            <input type="text" class="form-control" id="lastname" name="lastname" placeholder="Last name"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="telnum" class="col-md-2 col-form-label">Telephone no.</label>
                        <div class="col-5 col-sm-4 col-md-3">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                <span class="input-group-text">(</span></div>
                                <input type="tel" class="form-control" id="areacode" name="areacode" placeholder="Areacode"/>
                                <div class="input-group-append">
                                <span class="input-group-text">)</span></div>
                            </div>
                        </div>
                        <div class="col-7 col-sm-6 col-md-7">
                            <input type="tel" class="form-control" id="telnum" name="telnum" placeholder="Telephone number"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="emailid" class="col-md-2 col-form-label">Email</label>
                        <div class="col-md-10">
                            <input type="email" class="form-control" id="emailid" name="emailid" placeholder="Email"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="form-check col-5 offset-md-2">
                                <label for="form-check-label">
                                <input type="checkbox" class="form-check-input" name="approve" value=""/>
                                <strong>May we contact you?</strong>
                            </label> 
                        </div>
                        <div class="col"></div>
                        <div class="col-4">
                            <select class="form-control">
                                <option>Tel.</option>
                                <option>Email</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="feedback" class="col-md-2 col-form-label">Your Feedback</label>
                        <div class="col-md-10">
                            <textarea class="form-control" id="feedback" name="Feedback" placeholder="Type here" rows="12"></textarea>
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="offset-md-2 col-md-10">
                            <button type="submit" class="btn btn-primary">
                                Send Feedback
                            </button>
                        </div>
                    </div>


                </form>
            </div>
        </div>
     </div>
    );
}

export default Contact;