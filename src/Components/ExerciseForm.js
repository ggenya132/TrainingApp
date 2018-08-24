import React, { Component } from "react";
import RepEntryForm from "./RepEntryForm";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Form,
  Button,
  Panel
} from "react-bootstrap";

export default class ExerciseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadValue: "",
      loadHasBeenTouched: false
    };
  }

  getGenericValidationHandlr(state, property) {
    return (state, property) => {
      console.log("being called");
      let length = state[property].length;
      if (length === 0 && state.loadHasBeenTouched) {
        return "error";
      } else if (parseInt(state[property]) !== NaN && length > 0) {
        return "success";
      }
    };
  }

  onChange = e => {
    this.setState({ loadValue: e.target.value, loadHasBeenTouched: true });
  };

  getValidationState = () => {
    let length = this.state.loadValue.length;
    if (length === 0 && this.state.loadHasBeenTouched) {
      return "error";
    } else if (parseInt(this.state.loadValue) !== NaN && length > 0) {
      return "success";
    }
  };
  render() {
    return (
      <div>
        <Panel>
          <Panel.Heading>{this.props.selectedExercise.title}</Panel.Heading>
          <Panel.Body>
            <span>{this.props.selectedExercise.suggestedSets}</span>*
            <span>{this.props.selectedExercise.suggestedReps}</span>@
            <span>{this.props.selectedExercise.rpe}</span>
            RPE
            <div>
              <Form inline>
                <FormGroup
                  validationState={this.getValidationState()}
                  controlId="formInlineName"
                >
                  <ControlLabel>Load</ControlLabel>
                  <FormControl
                    value={this.state.loadValue}
                    onChange={this.onChange}
                    type="text"
                  />
                </FormGroup>
              </Form>

              {this.props.selectedExercise.performedReps.map(
                (performedRep, index) => {
                  return (
                    <RepEntryForm
                      onChange={this.onChange}
                      getValidationState={this.getValidationState}
                      repIndex={index}
                      getGenericValidationHandlr={
                        this.getGenericValidationHandlr
                      }
                      value={performedRep}
                    />
                  );
                }
              )}
            </div>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}
