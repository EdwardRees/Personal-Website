import React from "react";
import {
  LessonHeader,
  LessonFooter,
  LessonBody
} from "../../language-components";

const Examples_JavaScript = () => (
  <div>
    <LessonHeader title="9. Examples" />
    <LessonBody />

    <LessonFooter
      PrevLocation={"/javascript/objectorientedprogramming"}
      end
    />
  </div>
);

export { Examples_JavaScript };
