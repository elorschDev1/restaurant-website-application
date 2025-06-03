import React from 'react';
import { Card,Row ,Col} from 'react-bootstrap';
import AddToCart from './AddToCart';
const DrinksBeverages = () => {
  return (
   <>
        <Row className="p-4 m-3">
            <Col className="d-flex certainCol" md={4}>
              <Card className="w-100 card-hover" id='Tea'>
                    <Card.Img src='/tea.jpg' variant='top' className='custom-img'/>
                    <Card.Body className='d-flex flex-column'>
                      <Card.Title>Milk Tea (Kenyan Chai)</Card.Title>
                      <Card.Text>Authentic Kenyan chai brewed with black tea, milk, and warming spices like ginger and cardamon. A beloved local classic, steeped in culture and comfort.</Card.Text>
                      <Card.Text className='price'>Ksh.100</Card.Text>
                  <div className="Milk Tea" id='100'><AddToCart/></div> 
                    </Card.Body>
                  </Card>  
            </Col>
             <Col className="d-flex certainCol" md={4}>
              <Card className="w-100 card-hover">
                    <Card.Img src='/cherryalmondsmoothie (1).jpg' variant='top' className='custom-img'/>
                    <Card.Body className='d-flex flex-column'>
                      <Card.Title>Cherry Almond Smoothie</Card.Title>
                      <Card.Text>Rich, creamy, and irresistably fruity- our cherry almond smoothie blends sweet cherries with nutty almond flavour for a drink that's as indulgent as its energizing.</Card.Text>
                     <Card.Text className="price">Ksh.230</Card.Text>
                     <div className="Cherry Almond Smoothie" id='230'><AddToCart/></div> 
                    </Card.Body>
                   </Card>  
            </Col>
             <Col className="d-flex certainCol" md={4}>
              <Card className="w-100 card-hover">
                    <Card.Img src='/latte.jpg' variant='top' className='custom-img'/>
                    <Card.Body className='d-flex flex-column'>
                      <Card.Title>Latte</Card.Title>
                      <Card.Text>Smooth and creamy espresso balanced with steamy milk, topped with light foam. Our latte brings warmth and comfort -ideal for your Nairobi hustle or easy Monday morning.</Card.Text>
                      <Card.Text className='price'>Ksh.150</Card.Text>
                   <div className="Latte" id='150'> <AddToCart/></div>
                    </Card.Body>
                  </Card>  
            </Col>
         </Row>
        <Row className="p-4 m-3">
             <Col className="d-flex certainCol" md={4}>
              <Card className="w-100 card-hover">
                    <Card.Img src='/cranberry.jpg' variant='top' className='custom-img'/>
                    <Card.Body className='d-flex flex-column'>
                      <Card.Title>Cranberry Rosemary Soda</Card.Title>
                      <Card.Text>A bold blend of tart cranberry and aromatic rosemary, sparking with flavour and fizz. This handcrafted soda is a sophisticated twist that'll leave your taste buds dancing.</Card.Text>
                     <Card.Text className='price'>Ksh.270</Card.Text>
                      <div className="Cranberry Rosemary Soda" id="270"><AddToCart/></div>
                    </Card.Body>
                  </Card>  
            </Col>
             <Col className="d-flex certainCol" md={4}>
              <Card className="w-100 card-hover">
                    <Card.Img src='/pineapple iced tea.jpg' variant='top' className='custom-img'/>
                    <Card.Body className='d-flex flex-column'>
                      <Card.Title>Pineapple Iced Tea</Card.Title>
                      <Card.Text>A refreshing tropical fusion of brewed black tea and real pineapple juice, served chill over ice. This zesty quencher captures the sweet tang of the Kenyan coast, perfect for sunny afternoons.</Card.Text>
                       <Card.Text className='price'>Ksh.380</Card.Text>
                  <div className="Pineapple Iced Tea" id="380"><AddToCart/></div> 
                    </Card.Body>
                  </Card>  
            </Col>
             <Col className="d-flex certainCol" md={4}>
              <Card className="w-100 card-hover" id='Fruit Juice'>
                    <Card.Img src='/fruitjuice.jpg' variant='top' className='custom-img'/>
                    <Card.Body className='d-flex flex-column'>
                      <Card.Title>Fruit Juice</Card.Title>
                      <Card.Text>Pure, freshly squeezed sunshine in a glass. Packed with vitamin C and natural sweetness, our fruit juices are a breakfast favourite that never disappoint.</Card.Text>
                     <Card.Text className="price">Ksh.420</Card.Text>
                    <div className="Fruit Juice" id='420'><AddToCart/></div> 
                    </Card.Body>
                  </Card>  
            </Col>
          </Row>
        </>
  )
}

export default DrinksBeverages
