import React from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      url: props.name,
      description: props.describe,
    }
  }

  render() {
    return (
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Charity Name</Form.Label>
              <Form.Control type="text"
                            placeholder="Charity Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>URL</Form.Label>
              <Form.Control type="text"
                            placeholder="URL"
                            value={this.state.url}
                            onChange={(e) => this.setState({ url: e.target.value })} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={5} value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button>Save</Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default Dashboard;
