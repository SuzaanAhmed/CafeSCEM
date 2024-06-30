import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeComponent = () => {
  const cafeItems = [
    {
      id: 1,
      name: 'Ambient Aesthetic',
      description: 'A look and feel that oozes ambience and makes you want to stay just by the essence it carries.',
      image: 'Look.jpg'
    },
    {
      id: 2,
      name: 'Top Grade Chefs',
      description: 'The best chefs to be foudn around the world are found in Sahyadri cafeteria.',
      image: 'chefs.jpg'
    },
    {
      id: 3,
      name: 'Delicious Eatings',
      description: 'Mouth watering, savoury, top of the quality dishes for reasonable prices',
      image: 'food.jpg'
    },
    {
      id: 4,
      name: 'Brotherly Customer Service',
      description: 'The most kind, patient and considerate wiating staff are found in the halls of our cafeteria.',
      image: 'employee.jpg'
    }
  ];

  return (
    <Container className="HomeCont" fluid>
      <Carousel >
        {cafeItems.map((item, index) => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100 carousel-image"
              src={item.image}
              alt={item.name}
              style={{ opacity: 0.7 }} // add opacity style here
            />
            <Carousel.Caption>
              <h3 className='item'>{item.name}</h3>
              <p className='desc'>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="welcome-message">
        <h2 className='Welcome'>Welcome to Sahyadri Cafeteria!</h2>
        < p className='enjoy'>
        Enjoy fresh, healthy meals with diverse global flavors, catering to all dietary needs. Conveniently located on campus, our cafeteria offers affordable pricing and a vibrant community atmosphere. Join us for a delightful dining experience! Open daily from early morning to late evening. Don't miss our special themed dining events and live music nights!        </p>
      </div>
    </Container>
  );
};

export default HomeComponent;