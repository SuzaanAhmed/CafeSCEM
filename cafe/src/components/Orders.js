import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const menuItems = [
  { id: 1, name: 'Gobi Manchurian' },
  { id: 2, name: 'Masala Dosa' },
  { id: 3, name: 'Pepsi' },
  { id: 4, name: 'Veg Biryani' },
  { id: 5, name: 'Dal Rice' },
];

const OrderComponent = () => {
  const [order, setOrder] = useState({
    menuItemId: '',
    quantity: 1
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send order to server
    console.log('Order submitted:', order);
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="menuItemId">
              <Form.Label>Menu Item</Form.Label>
              <Form.Control as="select" value={order.menuItemId} onChange={(event) => setOrder({...order, menuItemId: event.target.value })}>
                <option value="">Select a menu item</option>
                {menuItems.map((menuItem) => (
                  <option key={menuItem.id} value={menuItem.id}>{menuItem.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" value={order.quantity} onChange={(event) => setOrder({...order, quantity: event.target.value })} />
            </Form.Group>
            <Button type="submit">Place Order</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderComponent;