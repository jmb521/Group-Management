import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap'

class Membership extends Component {
  constructor() {
    super();

    this.state = {
      member: [],
    };

  }
  componentWillMount() {

  };
  
  render() {
    return (
    <div>
      <Grid>
      <Row className="show-grid">
        <Col xs={16} md={12}>
          <h1>Membership list grid</h1>
        </Col>
      </Row>
     </Grid>
    </div>
    )
  }
}
export default Membership
