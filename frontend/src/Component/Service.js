import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import image1 from '../Images/banner2.avif'
// import image2 from '../Images/banner1.jpg'

// import per from '../Images/per.jpg'

export default function Service() {
  return (
    <div>
        <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-12'>
            <h1 className="head1">Our Services</h1>
            <p className='para1'>Manpower management, also known as human resource management, is the backbone of any organization, serving as the vital link between the company's objectives and the workforce that drives its success. At its core, manpower management involves the strategic planning, acquisition, development,
      and retention of talent to ensure that the right people are in the right roles at the right time.
<br></br> <br></br></p>
            </div>
        </div>
     
      <img src={image1} className='service-banner' style={{width:'100%',height:'500px'}}/>

      <h1 className='head1'>What we offer?</h1>

      <div className="row">
   <div className=" col-sm-12 col-md-12 col-lg-12 service" >

    <Card  className='card' style={{width: '50rem'}}>
    <Card.Img className='c-img' variant="top" src='https://img.freepik.com/free-photo/beautiful-view-restaurant-with-tables_8353-9878.jpg?t=st=1714892110~exp=1714895710~hmac=1a79a1238f9454a47ac62e59f9d3b4c88ba8aed294cfe6cd011af89284c7b29b&w=996'  height='290px' width="300px"/>
      <Card.Body> <Card.Title className='c-title'>Event Management</Card.Title>
        <Card.Text className='c-content'>
        Providing staff for event setup, coordination, and management.
        </Card.Text>
        <Button className='c-button'  variant="primary">Know More</Button>
      </Card.Body>
    </Card>

    
    <Card style={{ width: '50rem' }}>
    <Card.Img className='c-img' variant="top" src='https://img.freepik.com/free-photo/young-happy-waitress-talking-businessman-cafe_637285-8897.jpg?t=st=1714892159~exp=1714895759~hmac=9d2eeb97c06f3eea1d55b4c2d45ee58b92d31df1cbcadf1dc644e2552e95cbaa&w=996' height='290px' width="300px"/>
      <Card.Body> <Card.Title className='c-title'>Hospitality</Card.Title>
        <Card.Text className='c-content'>
        Supplying staff for hotels, restaurants, and resorts for roles like chefs.
        </Card.Text>
        <Button className='c-button'  variant="primary">Know More</Button>
      </Card.Body>
    </Card>

    
    <Card style={{ width: '50rem' }}>
    <Card.Img className='c-img'  variant="top" src='https://img.freepik.com/premium-photo/healthcare-people-group-professional-doctor-working-hospital-office-clinic-with-other-doctors_662214-407535.jpg?w=740' height='290px' width="300px"/>
      <Card.Body> <Card.Title className='c-title'>Healthcare</Card.Title>
        <Card.Text className='c-content'>
        Supplying healthcare professionals such as nurses, caregivers, and medical assistants.
        </Card.Text>
        <Button className='c-button'  variant="primary">Know More</Button>
      </Card.Body>
    </Card>

    
    <Card style={{ width: '50rem' }}>
    <Card.Img className='c-img' variant="top" src='https://img.freepik.com/free-photo/delivery-man-with-his-van-ai-generated_268835-8276.jpg?t=st=1714892260~exp=1714895860~hmac=3463e8edb0937b58e31d78f63146ff3ad0443ad29f9bf5a20397522abac8e56b&w=996' height='290px' width="300px"/>
      <Card.Body> <Card.Title className='c-title'>Transportation</Card.Title>
        <Card.Text className='c-content'>
        Providing drivers and logistics personnel for transportation companies.
        </Card.Text>
        <Button className='c-button'  variant="primary">Know More</Button>
      </Card.Body>
    </Card>
 
</div>
 </div>

     <div className='main'>
        <h1>Streamline Your Workforce with Our Manpower Management System</h1>
        <p> Our comprehensive Manpower Management System (MMS) is designed to streamline and optimize every aspect of your manpower
             operations,empowering you to focus on your core business objectives while we handle the complexities of Manpower
              management.</p>
       <h2>"Empower your workforce, streamline your success."</h2>
     </div>
  
     <h1 className='head1'>Testimonials</h1>
     <div className='row testimonial'>
    <div className='test1 col-md-3'>
    <p className='para3'>"Efficient and reliable manpower provided for our event. Made the coordination smooth and hassle-free. Highly recommended!"<br></br>-Sanjana</p>
    </div>
    <div className='test2 col-md-3'>
    <p className='para3'>"Impressed with the professionalism and dedication of the manpower supplied for our hotel. Helped enhance our guest experience."<br></br>-Dharani</p>
    </div>
    <div className='test3 col-md-3 '>
    <p className='para3'>"Professional drivers provided for our transportation needs. Helped streamline our logistics operations."<br></br>-Shaanvi</p>
    </div>
   
  
    
</div>

<div className='row'>
    <div className='col-sm-12 col-md-12 col-lg-6 work'>
    
    
    <p className='para3'><b>Training and preparation:</b> Once selected, you provide training to the manpower to ensure they are equipped with the necessary skills and knowledge for the job.</p>
    
    <p className='para3'><b>Deployment:</b> You deploy the manpower to the client's location, ensuring they are well-prepared and briefed about their roles and responsibilities.</p>

    <p className='para3'><b>Supervision and Support:</b> Throughout the deployment, you provide supervision and support to the manpower to ensure they perform their duties effectively and efficiently.!</p>

    <p className='para3'><b>Feedback and Improvement:</b> You collect feedback from both clients and manpower to continuously improve your services and address any issues that may arise.</p>
   
    </div>
</div>

    </div>
  )
}

