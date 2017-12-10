//gets a list of clubs and adds them to state
import React from 'react';

import { Grid, Table, Button, Form, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export const GetClubs = function(props) {
  console.log("getclub props", props)
    return(
      <div>
      <h1>can you see me</h1>
        <Form>
          <Row>
           <Col xs={12} md={4}>
             <FormGroup controlId="formControlsSelect">
                   <ControlLabel>Select</ControlLabel>
                     <FormControl componentClass="select" placeholder="select" onChange={props.handleOnChange} name="club_id">
                       {props.clubs.map((club, key) => <option name="club_id" id={club.id} key={club.id}>{club.name}</option>)}
                       <option value="test">...</option>
                     </FormControl>
              </FormGroup>
          </Col>
          </Row>
        </Form>
      </div>
    )
  }
