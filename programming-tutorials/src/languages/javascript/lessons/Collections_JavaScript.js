import React, { Component } from "react";
import {
  LessonHeader,
  LessonBody,
  LessonFooter
} from "../../language-components";

class Collections_JavaScript extends Component {
  render() {
    return (
      <div>
        <LessonHeader title="4. Collection Data Types" />
        <LessonBody />
        <LessonFooter
          PrevLocation="/javascript/controlflow"
          NextLocation="/javascript/iteration"
        />
      </div>
    );
  }
}

export { Collections_JavaScript };
