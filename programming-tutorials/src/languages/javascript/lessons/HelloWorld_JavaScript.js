import React from "react";

import {
  LessonHeader,
  LessonBody,
  LessonFooter,
  Activity,
  Debrief
} from "../../language-components";

import { Paragraph } from "../../../components";
import { Code } from '../../../components/common';

const HelloWorld_JavaScript = () => (
  <div>
    <LessonHeader title="1. Hello World" />
    <LessonBody>
      <Activity task="Write a Hello World Program.">
        <li>
          In Atom, type in the line: <br/><Code>console.log("Hello World");</Code>
        </li>
      </Activity>
      <Debrief>
        <Paragraph>So what does this do?</Paragraph>
      </Debrief>
    </LessonBody>
    <LessonFooter
      PrevLocation="/javascript/articles/setup"
      NextLocation="/javascript/datatypes"
    />
  </div>
);

export { HelloWorld_JavaScript };
