import React from 'react'
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'

export default function FieldGroup({ id, label, help, ...props }) {
   return (
     <FormGroup controlId={id} validationState={props.validationState}>
       <ControlLabel>{label}</ControlLabel>
       <FormControl {...props} />
       {help && <HelpBlock>{help}</HelpBlock>}
     </FormGroup>
   );
}
