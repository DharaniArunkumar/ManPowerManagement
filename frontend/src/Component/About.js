import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function About() {
    return (
        <div className='container-fluid'>
            <div className='flexItems'>
                <div className='row'>
                    <div className='col-md-6 textFlex'>
                        <p>Welcome to our platform, a premier manpower supplying management system designed to streamline workforce solutions with precision and efficiency. we specialize in delivering innovative staffing solutions tailored to your organization's unique needs. Our commitment is to bridge the gap between talent and opportunity, ensuring seamless workforce management and operational excellence. Explore our website to learn more about how our Manpower Supply Management System can transform the way you manage and leverage your workforce resources.</p>
                        <br></br>
                        <button>Read More</button>
                    </div>
                    <div className=' col-md-6 imageFlex'>
                        <img src='https://img.freepik.com/free-photo/happy-corporate-manager-shaking-hands-with-black-worker-after-staff-meeting-factory_637285-4782.jpg?t=st=1714742442~exp=1714746042~hmac=25c740c0007fab57677a3e0ba5591e14103d9a46c1427b995b239ad0f2b325e1&w=740' alt='fleximg1' width='100%' height='400px' />
                    </div>
                </div>
            </div>
            <div className='chooseText'>
                <h1 className='head1'>Why u Choose Us?</h1>
                <p className='para3'>"Choose us for experienced professionals and reliable staffing solutions."</p>
            </div>


            <div className='row cardData'>
                <div className='col-md-3'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/premium-photo/successful-diverse-business-people-discussing-contract_926199-2163848.jpg?w=826" />
                        <Card.Body>
                            <Card.Title className="cardTitle">Experienced Workforce</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush card-content">
                            <ListGroup.Item>Skilled and qualified professionals</ListGroup.Item>
                            <ListGroup.Item>Extensive industry experience</ListGroup.Item>
                            <ListGroup.Item>Adaptable to diverse work environments</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
                <div className='col-md-3'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-vector/hand-drawn-time-management-concept_23-2148819272.jpg?t=st=1714758711~exp=1714762311~hmac=9c021796c4123bd0cf440fe735c65585c50f97b34000c5008907db51d398e77e&w=740" />
                        <Card.Body>
                            <Card.Title className="cardTitle">Timely Service Delivery</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush card-content">
                            <ListGroup.Item>Quick turnaround times</ListGroup.Item>
                            <ListGroup.Item>Responsive to urgent staffing needs</ListGroup.Item>
                            <ListGroup.Item>Efficient recruitment processes</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
                <div className='col-md-3'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/premium-photo/businessman-stacking-money-coins-with-up-arrow-percentage-symbol-financial-banking_92152-3173.jpg?w=740" />
                        <Card.Body>
                            <Card.Title className="cardTitle">Cost-Effective Hiring Options</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush card-content">
                            <ListGroup.Item>Competitive pricing</ListGroup.Item>
                            <ListGroup.Item>Value-driven recruitment strategies</ListGroup.Item>
                            <ListGroup.Item>Minimize hiring and training costs</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
                <div className='col-md-3'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/designers-team-working-3d-model_23-2149371870.jpg?t=st=1714794052~exp=1714797652~hmac=006fd07a12a13c8f979c0e7034bccff3e23dd62902cd19db1fe6e8033c429cce&w=900" />
                        <Card.Body>
                            <Card.Title className="cardTitle">Flexible Staffing Solution</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush card-content">
                            <ListGroup.Item>Temporary or Permanent Staffing </ListGroup.Item>
                            <ListGroup.Item>Customized Staffing Plans</ListGroup.Item>
                            <ListGroup.Item>Scalable workforce Solutions</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </div>
            <div className='Quotes'>
                <h3 className='head1'>"Unlock your business potential with our tailored staffing solutions.</h3><h3 className='head1'> Quality over quantity. Invest in success."</h3>
            </div>
            <div className='row icons'>
                <div className='col-md-3'>
                   <h1>2009</h1>
                   <p>Established</p>
                </div>
                <div className='col-md-3'>
                    <h1>3000+</h1>
                    <p>Labour Provided</p>
                </div>
                <div className='col-md-3'>
                    <h1>15+</h1>
                    <p>Projects</p>
                </div>
                <div className='col-md-3'>
                    <h1>4.5</h1>
                    <p>Ratings</p>
                </div>
            </div>
        </div>
    );
}

export default About;
