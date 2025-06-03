import React from 'react';
import { Card,Row ,Col} from 'react-bootstrap';
import AddToCart from './AddToCart';
const FastFoods = () => {
  return (
      <>
        <Row className="p-4 m-3">
            <Col className="d-flex certainCol" md={4}>
              <Card className="w-100 card-hover">
                    <Card.Img src='/pizza.jpg' variant='top' className='custom-img'/>
                    <Card.Body className='d-flex flex-column'>
                      <Card.Title>Pizza</Card.Title>
                      <Card.Text>Freshly baked pizza with a crispy golden crust, rich tomato sauce, and melty cheese, topped with your favourite flavours - from classic Margherita to bold nyama choma fusion. Perfect for sharing or not.</Card.Text>
                      <Card.Text className="price">Ksh 750</Card.Text>
                  <div className="Pizza" id="750"><AddToCart/></div> 
                    </Card.Body>
                  </Card>  
            </Col>
             <Col className="d-flex certainCol" md={4}>
              <Card className="w-100 card-hover" id='Hot Dog'>
                    <Card.Img src='/hotdog.jpg' variant='top' className='custom-img'/>
                    <Card.Body className='d-flex flex-column'>
                      <Card.Title>Hot Dog</Card.Title>
                      <Card.Text>A juicy grilled sausage nestled in a soft bun, topped with tangy mustard, ketchup, onions, and optional pickles. Our Kenyan style hot dogs bring the street vibe into your plate.</Card.Text>
                      <Card.Text className="price">Ksh.250</Card.Text>
                     <div className="Hot Dog" id="250"><AddToCart/></div> 
                    </Card.Body>
                
                  </Card>  
            </Col>
             <Col className="d-flex certainCol" md={4}>
              <Card className="w-100 card-hover">
                    <Card.Img src='/chips.jpg' variant='top' className='custom-img'/>
                    <Card.Body className='d-flex flex-column'>
                      <Card.Title>Chips</Card.Title>
                      <Card.Text>Crispy golden fries, perfectly salted and fried to perfection. Served hot and fresh - just how Kenyans love them. Add some ketchup or go local with a side of Kachumbari.</Card.Text>
                      <Card.Text className='price'>Ksh.100</Card.Text>
                    <div className="Chips" id="100"><AddToCart/></div> 
                    </Card.Body>
                  </Card>  
            </Col>
         </Row>
        <Row className="p-4 m-3">
             <Col className="d-flex certainCol" md={4}>
              <Card className="w-100 card-hover">
                    <Card.Img src='/sausage.jpg' variant='top' className='custom-img'/>
                    <Card.Body className='d-flex flex-column'>
                      <Card.Title>Sausage</Card.Title>
                      <Card.Text>Deep fried or grilled to a tasty brown, our sausages are savoury, satisfying, and pair perfectly with chips, bread, or eaten on their own. A true street-food favourite with a premium touch.</Card.Text>
                      <Card.Text className="price">Ksh.100</Card.Text>
                     <div className="Sausage" id="100"><AddToCart/></div> 
                    </Card.Body>
                  </Card>  
            </Col>
             <Col className="d-flex certainCol" md={4}>
              <Card className="w-100 card-hover">
                    <Card.Img src='/hamburger.jpg' variant='top' className='custom-img'/>
                    <Card.Body className='d-flex flex-column'>
                      <Card.Title>Hamburgers</Card.Title>
                      <Card.Text>Thick, juicy beef patty stacked in a toasted bun with crisp lettuce, tomatoes, onions, and creamy sauces. Its your classic burger, done the Kenyan way - satisfying, bold, and unforgettable.</Card.Text>
                     <Card.Text className='price'>Ksh.250</Card.Text>
                   <div className="Hamburgers" id="250"><AddToCart/></div>
                    </Card.Body>
                  </Card>  
            </Col>
             <Col className="d-flex certainCol" md={4}>
              <Card className="w-100 card-hover">
                    <Card.Img src='/onion ring.jpg' variant='top' className='custom-img'/>
                    <Card.Body className='d-flex flex-column'>
                      <Card.Title>Onion Rings</Card.Title>
                      <Card.Text>Crispy on the outside, sweet and tender inside - our onion rings are coated in a light, seasoned butter and fried to a golden crunch. Great as a side or tasty sanck on their own.</Card.Text>
                      <Card.Text className='price'>Ksh.400</Card.Text>
                    <div className='Onion Rings' id="400"><AddToCart/></div> 
                    </Card.Body>
                  </Card>  
            </Col>
          </Row>
        </>
  )
}
export default FastFoods;
