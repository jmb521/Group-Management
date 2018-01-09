import React from 'react'
import { Grid, Row, Col} from 'react-bootstrap'


export const Family = (props) => {


    return(
      <div>
      <Grid>
      <Row>
        <Col xs={4} md={2}></Col>
        <Col xs={12} md={8}>
          <h3>Family Info</h3>
          
        </Col>
        <Col xs={4} md={2}></Col>
      </Row>
      </Grid>
      </div>
    )
  }
