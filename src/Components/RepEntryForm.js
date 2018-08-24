import React, { Component } from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Form,
  Button
} from "react-bootstrap";

export default class RepEntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = { repValue: 0 };
  }

  onChange = e => {
    this.setState({ repValue: e.target.value });
  };
  render() {
    return (
      <div>
        <Form inline>
          <FormGroup
            validationState={this.props.getGenericValidationHandlr(
              this.state,
              "repValue"
            )}
            controlId="formInlineName"
          >
            <span> Set {this.props.repIndex + 1}</span>
            <ControlLabel>Reps performed: </ControlLabel>
            <FormControl
              value={this.state.repValue}
              onChange={this.onChange}
              type="text"
            />
          </FormGroup>
        </Form>
      </div>
    );
  }
}
