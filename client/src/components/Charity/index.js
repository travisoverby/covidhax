import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { v1 } from 'uuid';
import Alert from 'react-bootstrap/Alert';

class Charity extends React.Component {
  render() {
    const { charities } = this.props;

    if (charities !== undefined) {
      return (
        <ListGroup>
          {charities.map((charity) => {
            return <ListGroup.Item key={v1()}>{charity.name}</ListGroup.Item>
          })}
        </ListGroup>
      );
    } else {
      return <Alert variant="secondary">There are no charities in our database!</Alert>;
    }
  }
}

export default Charity;

