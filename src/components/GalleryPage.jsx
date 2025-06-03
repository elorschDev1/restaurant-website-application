import React from 'react';
import { Card,Row ,Col} from 'react-bootstrap';
const GalleryPage = () => {
  return (
  <section className='d-flex flex-column justify-content-center align-items-center p-3 m-3 text-center' id="galleryPageSection">
    <div className="d-flex flex-column p-3 m-3">
      <h2>Via Our Gallery</h2>
      <p>Before you show up hungry, take a sneak peek at what's cooking. From juicy burgers to fire-grilled steak, crispy fries to our beloved Swahili dishes-we're all about good food, good vibes life.</p>
      <p>Swipe through the snaps, feel the energy, smell the flavours(okay, maybe not that one...yet), and picture yourself digging in with your people.</p>
      <p>This isn't just food-its a vibe.</p>
      <p>Uko ready? Karibu sana.</p>
    </div>
    <Row className='p-4 m-3'>
      <Col  className='d-flex certainCol' md={4}>
      <Card className="w-100 card-hover" id='Chicken Drum Sticks'>
        <Card.Img src='/Chicken.jpg' variant='top' className='custom-img'/>
        <Card.Body className='d-flex flex-column'>
          <Card.Title>Nyama Fiesta-Drumstick Edition</Card.Title>
          <Card.Text>Fresh off the grill, our chicken drumsticks pack that flavoural punch you love. Perfectly spiced, perfectly Kenyan.</Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col  className='d-flex certainCol' md={4}>
      <Card className="w-100 card-hover">
        <Card.Img src='/Chill zone 3.jpg' variant='top' className='custom-img'/>
        <Card.Body className='d-flex flex-column'>
          <Card.Title>Poolside Paradise</Card.Title>
          <Card.Text>Dip,sip, and relax. Whether you're cooling off or catching vibes, our poolside spot is your perfect weekend getaway-right in the heart of Fedha</Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col  className='d-flex certainCol' md={4}>
      <Card className="w-100 card-hover">
        <Card.Img src='/Chill zone1.jpg' variant='top' className='custom-img'/>
        <Card.Body className='d-flex flex-column'>
          <Card.Title>Relaxation, the Kenyan Way</Card.Title>
          <Card.Text>Catch the breeze,kick back in comfort, and enjoy great company by the pool. No reservation needed- just good vibes</Card.Text>
        </Card.Body>
      </Card>
      </Col>
    </Row>
<Row  className='p-4 m-3'>
  <Col className='d-flex certainCol' md={4}>
  <Card className='w-100 card-hover'>
    <Card.Img src='/Chill zone2.jpg' variant='top' className='custom-img'/>
    <Card.Body className='d-flex flex-column'>
    <Card.Title>Dine,Chill,Repeat</Card.Title>
    <Card.Text>Lights low,vibes high. Our indoor dining area is the heart of the experience - crafted for comfort, flavor and connection</Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <Col className='d-flex certainCol' md={4}>
  <Card className='w-100 card-hover'>
    <Card.Img src='/Dish1.jpg' variant='top' className='custom-img'/>
    <Card.Body className='d-flex flex-column'>
    <Card.Title>Fuel Your Day Right</Card.Title>
    <Card.Text>Start your morning with a glass of fresh juice, juicy straw berries, a citrus twist, and a perfectly brewed cup of coffee. Whether its breakfast or a well-deserved break, this is the treat you've been craving.</Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <Col className='d-flex certainCol' md={4}>
  <Card className='w-100 card-hover'>
    <Card.Img src='/Dish2.jpg' variant='top' className='custom-img'/>
    <Card.Body className='d-flex flex-column'>
    <Card.Title>A Cut Above the Rest</Card.Title>
    <Card.Text>Elegantly plated and expertly prepared, our gourmet sausages deliver a bold blend of spices and flavor in every precise slice. Elevate your dining experience - fork, knife and finesse.</Card.Text>
    </Card.Body>
  </Card>
  </Col>
</Row>
<Row  className='p-4 m-3'>
  <Col className='d-flex certainCol' md={4}>
  <Card className='w-100 card-hover'>
    <Card.Img src='/engBreakfast.jpg' variant='top' className='custom-img'/>
    <Card.Body className='d-flex flex-column'>
    <Card.Title>A Hearty Breakfast Awaits</Card.Title>
    <Card.Text>Kickstart your day with our mouthwatering breakfast platter. Enjoy a delicious mix of freshly scrambled eggs, hearty beans, crispy sausage slices, and a side of perfectly toasted bread triangles. Its the perfect way to fuel up for a busy day ahead. Whether you're here to relax or work, our beakfast will have you energized and ready for anything.  </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <Col className='d-flex certainCol' md={4}>
  <Card className='w-100 card-hover'>
    <Card.Img src='/Harry.jpg' variant='top' className='custom-img'/>
    <Card.Body className='d-flex flex-column'>
    <Card.Title>Cuts Cooked To Perfection</Card.Title>
    <Card.Text>Indulge in our succulent grilled cuts, perfectly cooked to perfection. Paired with vibrant greens for that refreshing balance, this dish is a feast for both the eyes and the palate. A luxurious dining experience that promises to satisfy your cravings in style. </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <Col className='d-flex certainCol' md={4}>
  <Card className='w-100 card-hover'>
    <Card.Img src='/menuCover.jpg' variant='top' className='custom-img'/>
    <Card.Body className='d-flex flex-column'>
    <Card.Title></Card.Title>
    <Card.Text>Juicy Grilled Meat with Savory Dipping Sauce</Card.Text>
    </Card.Body>
  </Card>
  </Col>
</Row>
<Row  className='p-4 m-3'>
  <Col className='d-flex certainCol' md={4}>
  <Card className='w-100 card-hover'id="Chocolate Smoothie">
    <Card.Img src='/Ice-cream.jpg' variant='top' className='custom-img'/>
    <Card.Body className='d-flex flex-column'>
    <Card.Title>Indulgent Chocolate Bliss</Card.Title>
    <Card.Text>Treat yourself to a sweet escape with our rich and creamy chocolate ice-cream, topped with a decent swirl of velvety cream, just like the indulgence of a Black Forest cake. Perfectly paired with a playful straw for a sip of pure happiness. Ready for your next craving?</Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <Col className='d-flex certainCol' md={4}>
  <Card className='w-100 card-hover'>
    <Card.Img src='/Sandwich.jpg' variant='top' className='custom-img'/>
    <Card.Body className='d-flex flex-column'>
    <Card.Title>Sunny Morning Delight</Card.Title>
    <Card.Text>Start your day right with a fresh, sunny-side-up egg resting on a bed of vibrant greens and juicy tomatoes, all nestled on a warm slice of bread. Paired with a side of crispy, jam-spread toast, its the perfect breakfast to kickstart your morning with energy and flavour.</Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <Col className='d-flex certainCol' md={4}>
  <Card className='w-100 card-hover'>
    <Card.Img src='/Dad.jpg' variant='top' className='custom-img'/>
    <Card.Body className='d-flex flex-column'>
    <Card.Title>Meet the Visionary Behind Our Success</Card.Title>
    <Card.Text>At the helm of our restaurant is Mister Edwin, the CEO and proud owner, whose dedication and passion for exceptional hospitality drive every aspect of our business. With years of experience and deep commitment to quality, Mr. Edwin has cultivated a space where guests feel like family and every dining experience is one to remember. His leadership and vision continue to inspire and shape our values of warmth, service and community.</Card.Text>
    </Card.Body>
  </Card>
  </Col>
</Row>
<Row className="p-4 m-3">
  <Col className='d-flex certainCol' md={4}>
  <Card className="w-100 card-hover">
    <Card.Img src='/Mummy.jpg' variant='top' className='custom-img'/>
    <Card.Body className='d-flex flex-column'>
    <Card.Title>Meet Our Driving Force</Card.Title>
    <Card.Text>Behind the scenes, we are proudly supported by Mrs.Christine, our Operations Director and co-owner. Her relentless drive, combined with her strong leadership and organizational expertise, ensures that every operation runs smoothly and every guest receives top-tier service. Mrs. Christine plays a crucial role in propelling the restaurant's vision forward, assisting in management decisions, and fostering an environment where both our team and customers thrive. Her dedication is the backbone of our ongoing success.</Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <Col className='d-flex certainCol' md={4}>
  <Card className='w-100 card-hover'>
    <Card.Img src="/Trader.png" variant='top' className='custom-img'/>
    <Card.Body className='d-flex flex-column'>
      <Card.Title>Our Strategic Growth Partner</Card.Title>
      <Card.Text>We are honoured to have Julian as a key contributor to our success. With expertise in online trading and a keen  eye for market trends, Julian has helped guide our restaurant through some of the most strategic decisions. By leveraging his skills in trading and business analysis, he's played a pivotal role in boosting our growth, and ensuring a sound financial future for our restaurant. His innovative approach to business has opened new doors, creating opportunities for expansion and ensuring we stay ahead in a competitive market. </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <Col className='d-flex certainCol' md={4}>
  <Card className='w-100 card-hover'>
    <Card.Img src="/Software Developer.jpg" variant='top' className='custom-img'/>
    <Card.Body className='d-flex flex-column'>
    <Card.Title>The Visionary Behind The Success</Card.Title>
    <Card.Text>At the heart of our restaurant's digital growth is Edgar,a dedicated and talented full stack developer. With a passion for technology and a drive to push boundaries, Edgar has played an instumental role in shaping our online presence and streamlining operations. By combining both frontend and backend operations, Edgar has brought the restaurant's website to life, ensuring it runs smoothly and looks stunning for our guests. His efforts have not only made ordering and reservations easier for customers, but also contributed to our overall business growth. Through continuos innovation and a commitment to excellence, Edgar is driving us forward into a future where technology and hospitality meet seamlessly.</Card.Text>
    </Card.Body>
  </Card>
  </Col>
</Row>
  </section>
  )
}
export default GalleryPage
