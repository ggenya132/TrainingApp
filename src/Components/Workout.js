import React, { Component } from "react";
import ExerciseForm from "./ExerciseForm";

export default class Workout extends Component {
  constructor(props) {
    super(props);
    this.selectedWorkout = props.selectedWorkout;
    console.log(this.selectedWorkout);
  }
  render() {
    return (
      <div>
        {this.props.selectedWorkout.exercises.map(exercise => (
          <ExerciseForm selectedExercise={exercise} />
        ))}
      </div>
    );
  }
}
