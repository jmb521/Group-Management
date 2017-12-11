//gets a list of clubs and adds them to state
import React from 'react';

import { Form, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export const GetClubs = function(props) {
  console.log("getclub props", props)
    return(
      <div>

        <Form>
          <Row>
           <Col xs={12} md={4}>
             <FormGroup controlId="formControlsSelect">
                   <ControlLabel>Select</ControlLabel>
                     <FormControl componentClass="select" placeholder="select" onChange={props.handleOnChange} name="club_id">
                      <option value="test">...</option>
                       {props.clubs.map((club, key) => <option name="club_id" id={club.id} key={club.id}>{club.name}</option>)}
                     </FormControl>
              </FormGroup>
          </Col>
          </Row>
        </Form>
      </div>
    )
  }
