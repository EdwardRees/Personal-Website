import React, { Component } from "react";
import { PreviousNextLesson, PrevLessonButton, NextLessonButton } from "./";

class LessonFooter extends Component {
  render() {
    const { start, end, PrevLocation, NextLocation } = this.props;
    if (end) {
      return <PrevLessonButton block Location={PrevLocation} />;
    } else if (start) {
      return <NextLessonButton block Location={NextLocation} />;
    } else {
      return (
        <PreviousNextLesson
          PrevLocation={PrevLocation}
          NextLocation={NextLocation}
        />
      );
    }
  }
}

export { LessonFooter };