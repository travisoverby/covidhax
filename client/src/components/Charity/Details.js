import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      description: props.description,
    }
  }

  render() {
    const { description, name } = this.state;

    return (
      <Row>
        <Col>
          <Card>
            <Card.Header>
              {name}
            </Card.Header>
            <Card.Body>
              {description}
            </Card.Body>
            <Button>Go to {name}</Button>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Details;
