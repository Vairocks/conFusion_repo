import React from 'react';
import {Card,Table} from 'react-bootstrap';

function LeaderCard({leader})
{
    return(<>
        <img src={leader.image} alt={leader.name} className="col-8 col-sm-6 col-md-4 col-lg-2"/>
        <div className="col-auto"></div>
        <div className="col-12 col-md-7 col-lg-9">
        <h5>{leader.name}<small>     {leader.designation}</small></h5>                                    
            {leader.description}
        </div>
        </>
    );
}

function ShowLeaders({leaders})
{
    const leaderWall = leaders.map((leader) => {
        return (
            <div key={leader.id} className="row cardlike">
                <LeaderCard leader = {leader} />
            </div>
        );
    });

    return(
        <div className="row text-align-center">
            <h2>Corporate Leadership</h2>
            {leaderWall}
        </div>
    );

    }


function About({leaders}){
    return(
        <div class="container">
        <div class="row row-content align-self-center">
            <div class="col col-sm-6">
                <h2>Our History</h2>
                <div class="d-none d-sm-block">
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong.With its uniue brand of world fusion cuisine that can be found nowhere else, it enos patronage from the Alist clientele in Hong Kong. Featuring four of the best threestar Michelin chef's in the world, ou neer know what will arrie on your plate the next time you visit us </p>
                    <p class="d-none d-lg-block">The restaurant traces its humble beginings to <i>The Frying Pan</i>,a successful chain started by our CEO, Mr.Peter Pan, that eatures some of the World's best cuisines in a pan.</p>
                </div>
            </div>
            <div class="col-sm">
                <Card>
                    <Card.Body>
                    <Card.Title class="card-header bg-primary text-white">Facts at a Glance</Card.Title>
                    <Card.Text>
                        <dl class="row">
                            <dt class="col-6">  Started</dt>
                            <dd class="col-6">3,Feb 2017</dd>
                            <dt class="col-6">  Major Stake Holder</dt>
                            <dd class="col-6">HK Fine Foods Inc.</dd>
                            <dt class="col-6">  Last Year's turnover</dt>
                            <dd class="col-6">$3,000,000</dd>
                            <dt class="col-6">  Employees</dt>
                            <dd class="col-6">45</dd>
                            
                        </dl>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    </div>   
    <hr />
    <ShowLeaders leaders={leaders}/>
    <hr/>

        <div class="row row-content">
            <div class="col-12 col-sm-9">
                <h2>Facts &amp; Figures</h2>
                <div class="table-responsive sm-9">
                    <Table responsive stripped>
                     <thead className="bg-dark text-white">
                         <tr>
                             <th>&nbsp;</th>
                             <th>2017</th>
                             <th>2018</th>
                             <th>2019</th>
                         </tr>
                     </thead>
            
                     <tbody>
                         <tr>
                             <th>Employees</th>
                             <td>15</td>
                             <td>30</td>
                             <td>40</td>
                         </tr>
                         <tr>
                             <th>Guests Served</th>
                             <td>15000</td>
                             <td>45000</td>
                             <td>100,000</td>
                         </tr>
                         <tr>
                              <th>Special Events</th>
                              <td>3</td>
                              <td>20</td>
                              <td>45</td>
                          </tr>
                          <tr>
                              <th>Annual Turnover</th>
                              <td>$251,325</td>
                              <td>$1,250,375</td>
                              <td>$3,000,000</td>
                          </tr>

                     </tbody>
                     
                    </Table>
                   </div>
            </div>
            <div class="col-12 col-sm-3">
            </div>
        </div>
    </div>

    );
}

export default About;