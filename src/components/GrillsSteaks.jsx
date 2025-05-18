import React from 'react';
import { Card,Row ,Col} from 'react-bootstrap';
import AddToCart from './AddToCart';
const GrillsSteaks = () => {
  return (
     <>
        <Row className="p-4 m-3">
            <Col className="d-flex certainCol" md={4}>
              <Card className="w-100 card-hover">
                    <Card.Img src='/roasted ribs.jpg' variant='top' className='custom-img'/>
                    <Card.Body className='d-flex flex-column'>
                      <Card.Title>Roasted Ribs</Card.Title>
                      <Card.Text>Nyama Choma- Styled Roasted Ribs, slow roasted to perfection, these juicy ribs are marinated in a smoky,pepper infused sauce inspired by Kenya's love for nyama choma. Grilled to bring out that  fall-off-the bone tenderness, perfect with a side of kachumbari or ugali.</Card.Text>
                      <Card.Text className='price'>Ksh.580</Card.Text>
                   <AddToCart/>
                    </Card.Body>
                  </Card>  
            </Col>
             <Col className="d-flex certainCol" md={4}>
              <Card className="w-100 card-hover">
                    <Card.Img src='/lobstertails.jpg' variant='top' className='custom-img'/>
                    <Card.Body className='d-flex flex-column'>
                      <Card.Title>Lobster Tails</Card.Title>
                      <Card.Text>Succulent lobster tails grilled and glazed in a coconut-chili marinade with a coastal twist. Think Mombasa heat meets ocean-fresh flavour - served with lemon butter and a touch of pilipili ya kukaanga.</Card.Text>
                     <Card.Text className='price'>Ksh.700</Card.Text>
                      <AddToCart/>
                    </Card.Body>
                  </Card>  
            </Col>
             <Col className="d-flex certainCol" md={4}>
              <Card className="w-100 card-hover">
                    <Card.Img src='/roasted salmon.jpg' variant='top' className='custom-img'/>
                    <Card.Body className='d-flex flex-column'>
                      <Card.Title>Roasted Salmon</Card.Title>
                      <Card.Text>Fresh Atlantic salmon gently roasted with garlic, rosemary, and a hint of Kenyan dania (coriander). Moist,flaky, and served with seasonal vegetables or creamy mukimo on the side.</Card.Text>
                    <Card.Text className='price'>Ksh.650</Card.Text>
                    <AddToCart/>
                    </Card.Body>
                  </Card>  
            </Col>
         </Row>
        <Row className="p-4 m-3">
             <Col className="d-flex certainCol" md={4}>
              <Card className="w-100 card-hover">
                    <Card.Img src='/crab cake.jpg' variant='top' className='custom-img'/>
                    <Card.Body className='d-flex flex-column'>
                      <Card.Title>Crab Cake</Card.Title>
                      <Card.Text>Hand crafted crab cakes with a crunchy coconut crust, seasoned with fresh herbs and Kenyan pilipili. Served with a creamy avocado aioli and garden greens.</Card.Text>
                      <Card.Text className='price'>Ksh.800</Card.Text>
                      <AddToCart/>
                    </Card.Body>
                  </Card>  
            </Col>
             <Col className="d-flex certainCol" md={4}>
              <Card className="w-100 card-hover">
                    <Card.Img src='/akaushi meat.jpg' variant='top' className='custom-img'/>
                    <Card.Body className='d-flex flex-column'>
                      <Card.Title>Akaushi Meat</Card.Title>
                      <Card.Text>Premium Akaushi beef hand-rolled into tender meatballs, simmered in a rich tomato and hoho(bell pepper) sauce. A fusion of gourmet quality and Kenyan homestyle comfort.</Card.Text>
                    <Card.Text className="price">Ksh.900</Card.Text>
                   <AddToCart/>
                    </Card.Body>
                  </Card>  
            </Col>
             <Col className="d-flex certainCol" md={4}>
              <Card className="w-100 card-hover">
                    <Card.Img src='/fried calamari.jpg' variant='top' className='custom-img'/>
                    <Card.Body className='d-flex flex-column'>
                      <Card.Title>Fried Calamari</Card.Title>
                      <Card.Subtitle>Crispy Fried Calamary Rings</Card.Subtitle>
                      <Card.Text>Golden-fried squid rings, lightly seasoned with Swahili coastal spices and served with a spicy tamarind dip. Crucnhy,zesty, and a perfect starter to awaken your taste buds.</Card.Text>
                      <Card.Text className="price">Ksh.750</Card.Text>
                     <AddToCart/>
                    </Card.Body>
                  </Card>  
            </Col>
          </Row>
        </>
  )
}

export default GrillsSteaks
