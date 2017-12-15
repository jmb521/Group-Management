import React from 'react'
import UserInfo from './UserInfo'
import { Grid, Row, Col} from 'react-bootstrap'


const AddMember = (props) => {

    return(
      <div>
        <Grid>
        <Row>
          <Col xs={4} md={2}></Col>
          <Col xs={8} md={8}>
            <h1>Add Member</h1>
          </Col>
          <Col xs={4} md={2}></Col>
        </Row>
        <br />
        <Row className="show-grid">
          <Col xs={4} md={2}></Col>
          <Col xs={8} md={8}>
            <UserInfo submit="Submit" clear="Clear"/>
            </Col>
            <Col xs={4} md={2}></Col>
          </Row>
        </Grid>
      </div>
    )
  }


export default AddMember
