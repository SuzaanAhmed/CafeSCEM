import React, { useState } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Modal, Button, Form } from 'react-bootstrap';
const menuItems = [
  {
    id: 1,
    name: 'Gobi Manchurian',
    description: 'Crispy delicately spiced.',
    price: 55,
    image: 'gobi.jpg'
  },
  {
    id: 2,
    name: 'Masala dosa',
    description: 'Golden, spiced, savory delicacy.',
    price: 75,
    image: 'masala-dosa.jpeg'
  },
  {
    id: 3,
    name: 'Dal Rice',
    description: 'Healthy delicious delight',
    price: 55,
    image: 'dalrice.jpg'
  },
  {
    id: 4,
    name: 'Veg Biryani',
    description: 'Aromatic, flavorful, vibrant, spiced perfection.',
    price: 120,
    image: 'veg.jpg'
  },
  {
    id: 5,
    name: 'Palak Paneer',
    description: 'Creamy spinach curry with Indian cheese.',
    price: 80,
    image: 'palak-paneer.jpg '
  },
  {
    id: 6,
    name: 'Chana Masala',
    description: 'North Indian style chickpea curry.',
    price: 60,
    image: 'chana-masala.jpg  '
  },
  {
    id: 7,
    name: 'Samosas',
    description: 'Crispy fried or baked pastries filled with spiced potatoes.',
    price: 40,
    image: 'samosas.jpg'
  },
  {
    id: 8,
    name: 'Rajma Masala',
    description: 'Spicy kidney bean curry.',
    price: 70,
    image: 'rajma-masala.jpg'
  },
  {
    id: 9,
    name: 'Tandoori Chicken',
    description: 'Marinated chicken cooked in a clay oven.',
    price: 100,
    image: 'tandoori-chicken.jpg'
  },
  {
    id: 10,
    name: 'Garlic Naan',
    description: 'Leavened, buttery flatbread flavored with garlic.',
    price: 30,
    image: 'garlic-naan.jpg'
  },
  {
    id: 11,
    name: 'Mixed Vegetable Curry',
    description: 'Assortment of vegetables cooked in a flavorful curry sauce.',
    price: 90,
    image: 'mixed-veg-curry.jpg'
  },
  {
    id: 12,
    name: 'Lassi',
    description: 'Yogurt-based drink popular in North India.',
    price: 20,
    image: 'lassi.jpg'
  }
];


const MenuComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [order, setOrder] = useState({
    menuItemId: '',
    quantity: 1
  });

  const handleCardClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
    setShowModal(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOrder({ menuItemId: selectedMenuItem.id, quantity: order.quantity });
    console.log('Order submitted:', order);
    setShowModal(false);
  };

  const handleIncrement = () => {
    setOrder({ ...order, quantity: parseInt(order.quantity) + 1 });
  };
  
  const handleDecrement = () => {
    if (parseInt(order.quantity) > 1) {
      setOrder({ ...order, quantity: parseInt(order.quantity) - 1 });
    }
  };

  return (
    <Container className='Menus'>
      <div style={{ backgroundColor: '#256600', padding: '20px', color: '#fe4800', textAlign: 'center', fontSize: '30px' }}>
        <h1> Sahyadri Cafeteria</h1>
        <p> Order from the finest College's, finest menu</p>
      </div>
      <Row>
        {menuItems.map((item, index) => (
          <Col xs={12} md={4} lg={3} key={item.id}>
            <Card onClick={() => handleCardClick(item)}>
              <CardImg src={item.image} alt={item.name} className="card-image" />
              <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
                <CardText>Price: ₹{item.price}</CardText>
              </CardBody>
            </Card>
            </Col>
        ))}
      </Row>
      <Modal size="lg" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMenuItem ? selectedMenuItem.name : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMenuItem && (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="image">
                <CardImg src={selectedMenuItem.image} alt={selectedMenuItem.name} className="card-image" />
              </Form.Group>
              <Form.Group controlId="quantity">
                <Form.Label>Quantity</Form.Label>
                <div className="d-flex">
                  <Button onClick={handleDecrement}>-</Button>
                  <Form.Control type="number" value={order.quantity} onChange={(event) => setOrder({...order, quantity: event.target.value })} style={{ width: '50px', textAlign: 'center' }} />
                  <Button onClick={handleIncrement}>+</Button>
                </div>
              </Form.Group>
             
              <Button type="submit" style={{ float: 'right' }}>
                Place Order (₹{selectedMenuItem.price * order.quantity})
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default MenuComponent;