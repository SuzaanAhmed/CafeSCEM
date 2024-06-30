import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const FeedbackComponent = () => {
  const [feedback, setFeedback] = useState({
    rating: 0,
    comment: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send feedback to server
  };

  return (
    <Container className="feedback-container feedback-centered">
          <Form onSubmit={handleSubmit}>
          <p style={{ color: '#fe4800', fontSize: '18px' }} className="feedback-intro">
  Thank you for eating with us at Cafe Sahyadri, tell us the best part of your dining experience and the worst parts. Each user experience is of immense value to us.
</p>
            <Form.Group controlId="rating" className="feedback-form-group">
              <Form.Label className="feedback-form-label">Rating</Form.Label>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <span key={index}>
                    <input
                      type="radio"
                      id={`star-${star}`}
                      name="rating"
                      value={star}
                      checked={feedback.rating === star}
                      onChange={(event) => setFeedback({ ...feedback, rating: event.target.value })}
                    />
                    <label htmlFor={`star-${star}`}>
                      {feedback.rating >= star ? (
                        <FontAwesomeIcon icon={faStar} />
                      ) : (
                        <FontAwesomeIcon icon={faStarRegular} />
                      )}
                    </label>
                  </span>
                ))}
              </div>
            </Form.Group>
            <Form.Group controlId="comment" className="feedback-form-group">
              <Form.Label className="feedback-form-label">Comment</Form.Label>
              <Form.Control as="textarea" value={feedback.comment} onChange={(event) => setFeedback({ ...feedback, comment: event.target.value })} className="feedback-form-control" />
            </Form.Group>
            <Button type="submit" className="feedback-button">Submit Feedback</Button>
          </Form>
    </Container>
  );
};

export default FeedbackComponent;