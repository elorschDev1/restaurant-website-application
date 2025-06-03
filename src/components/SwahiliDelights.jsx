import React from 'react';
import { Card,Row ,Col} from 'react-bootstrap';
import AddToCart from './AddToCart';
const SwahiliDelights = () => {
  return (
    <>
    <Row className="p-4 m-3">
        <Col className="d-flex certainCol" md={4}>
          <Card className="w-100 card-hover swahilidelight">
                <Card.Img src='/swahilidelight1.jpg' variant='top' className='custom-img'/>
                <Card.Body className='d-flex flex-column'>
                  <Card.Title>Chapatti & Meat Stew</Card.Title>
                  <Card.Text>A rich fusion of coastal flavours, this meal brings together aromatic spices, tender meat, and coconut infused sauce over a bed of fragrant rice. Its a celebration of the Swahili coast - soulful,spicy and satisfying.</Card.Text>
                  <Card.Text className="price">Ksh.180</Card.Text>
                  <div className="Chapatti & Meat Stew" id="180"> <AddToCart/> </div>
                </Card.Body>
              </Card>  
        </Col>
         <Col className="d-flex certainCol" md={4}>
          <Card className="w-100 card-hover" id='Biryani'>
                <Card.Img src='/biryani.jpg' variant='top' className='custom-img'/>
                <Card.Body className='d-flex flex-column'>
                  <Card.Title>Biryani</Card.Title>
                  <Card.Text>Layered with long grain rice, marinated meat, and slow-cooked spices, our Biryani is bursting with bold flavour. Inspired by Swahili and Indian heritage, every bite is a warm comforting experience with just the right amount of heat.</Card.Text>
                   <Card.Text className="price">Ksh.200</Card.Text>
                 <div className="Biryani" id='200'><AddToCart/></div> 
                </Card.Body>
            
              </Card>  
        </Col>
         <Col className="d-flex certainCol" md={4}>
          <Card className="w-100 card-hover" id='Urojo'>
                <Card.Img src='/urojo.jpg' variant='top' className='custom-img'/>
                <Card.Body className='d-flex flex-column'>
                  <Card.Title>Urojo (Zanzibar Mix)</Card.Title>
                  <Card.Text> A street food classic from the aisles of Zanzibar. Urojo is a tangy spicy soup made with garm flour, potatoes, bhajias, boiled eggs, and crunchy crisps - all served in a vibramt tumeric broth. Its a flavour bomb in a bowl.</Card.Text>
                   <Card.Text className="price">Ksh.280</Card.Text>
                 <div className="Urojo" id='280'><AddToCart/></div> 
                </Card.Body>
              </Card>  
        </Col>
     </Row>
    <Row className="p-4 m-3">
         <Col className="d-flex certainCol" md={4}>
          <Card className="w-100 card-hover">
                <Card.Img src='/chickenpilau.jpg' variant='top' className='custom-img'/>
                <Card.Body className='d-flex flex-column'>
                  <Card.Title>Chicken Pilau</Card.Title>
                  <Card.Text>Fragrant and flavourful, our chicken pilau is made with perfectly spiced rice, tender chicken, and caramelized onions. A Kenyan famiy favourite, served best with a side of Kachumbari and a cold drink.</Card.Text>
                   <Card.Text className="price">Ksh.400</Card.Text>
                 <div className="Chicken Pilau" id='400'><AddToCart/></div> 
                </Card.Body>
              </Card>  
        </Col>
         <Col className="d-flex certainCol" md={4}>
          <Card className="w-100 card-hover">
                <Card.Img src='/Mukimo.jpg' variant='top' className='custom-img'/>
                <Card.Body className='d-flex flex-column'>
                  <Card.Title>Mukimo</Card.Title>
                  <Card.Text>Straight from Central Kenya, Mukimo is a hearty mash of potatoes, green peas,maize and pumpkin leaves. A comfort dish that's earthy, filling and traditionally served alongside nyama choma or stew.</Card.Text>
                  <Card.Text className="price">Ksh.100</Card.Text>
                 <div className="Mukimo" id='100'><AddToCart/></div> 
                </Card.Body>
              </Card>  
        </Col>
         <Col className="d-flex certainCol" md={4}>
          <Card className="w-100 card-hover">
                <Card.Img src='/anjera.jpg' variant='top' className='custom-img'/>
                <Card.Body className='d-flex flex-column'>
                  <Card.Title>Anjera & Meat Stew</Card.Title>
                  <Card.Text>Soft, spongy Ethiopian style Anjera served with slow-cooked spicy meat stew. The tangy flatbread soaks up all the flavours, making every mouthful deeply satisfying and rich in heritage.</Card.Text>
                 <Card.Text className="price">Ksh.230</Card.Text>
                 <div className="Anjera and Meat Stew" id='230'><AddToCart/></div>
                </Card.Body>
              </Card>  
        </Col>
      </Row>
    </>
  )
}

export default SwahiliDelights
