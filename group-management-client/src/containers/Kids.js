import React from 'react'
import { Row, Col, Button} from 'react-bootstrap'


export const Kids = (props) => {

    return(
      <div>
      <p>Here is the kids component</p>
      <Button onClick={() => {props.onRemoveClick(props.id)}}>Remove</Button>
      </div>
    )
  }
