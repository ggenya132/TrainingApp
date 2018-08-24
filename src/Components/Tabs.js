import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { data } from "../sampleData";
import Workout from "./Workout";
export default class TabsNav extends Component {
  constructor(props) {
    super(props);
    this.workouts = data;
    console.log(this.workouts);
  }
  render() {
    return (
      <div>
        <Tabs defaultActiveKey={0} id="uncontrolled-tab-example">
          {this.workouts.map((currentWorkout, index) => {
            return (
              <Tab
                key={index}
                eventKey={index}
                title={currentWorkout.title.toUpperCase()}
              >
                <Workout selectedWorkout={currentWorkout} />
              </Tab>
            );
          })}
        </Tabs>
        ;
      </div>
    );
  }
}
