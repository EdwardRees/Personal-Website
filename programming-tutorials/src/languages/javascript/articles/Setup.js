import React from "react";
import {
  ArticleHeader,
  ArticleBody,
  Paragraph,
  Instructions,
  Sidenote
} from "../../../components";
import { Link } from "react-router-dom";
import { LessonFooter } from "../../language-components";

const Setup = () => (
  <div>
    <ArticleHeader title="Setup for JavaScript" author="Edward Rees" />
    <ArticleBody>
      <Paragraph>
        In the upcoming lessons, I am going to teach you all the basics of
        programming in JavaScript. The concepts covered in these lessons will
        range in difficulty from the easiest concept of a simple "Hello World"
        program to more complicated topics, such as Classes and Objects. Right
        now, I understand these sound like gibberish, but these terms will make
        more sense shortly.
      </Paragraph>
      <Paragraph>
        As covered in the article on{" "}
        <Link to={"/ide"}>
          Integrated Development Environment vs. Source Code Editors
        </Link>
        , there is a different between an IDE and a simple code editor. I advise
        you to read through this article as it covers the difference between the
        two. However, for these lessons, it's important to have at least a code
        editor to work out of. I recommend using the editor of{" "}
        <a href="http://atom.io/" target="_blank">
          Atom
        </a>{" "}
        as it's simple to setup and use. Of course, you can use any edtor you
        want, however, I'm going to explain the process to setting up Atom to
        run JavaScript code. If you choose to use another editor or an IDE, you
        can skip the rest of this and begin the lessons.
      </Paragraph>
      <Sidenote>
        As a sidenote, this tutorial is for Mac OS users. If you're using a
        Windows computer, the set up is probably similar but I don't have a
        Windows computer to use for now. I'll update this for Windows users
        later.
      </Sidenote>
      <br />
      <Instructions number>
        <li>
          Go to{" "}
          <a href="http://atom.io" target="_blank">
            atom.io
          </a>{" "}
          and download the application
        </li>
        <li>
          Once the file has downloaded, open the zip file and drag it to your
          Applications folder
        </li>
        <li>Open the Application &#123;Atom.app&#125;</li>
        <li>
          Inside of &#123;Atom&#125;, Press (Command and ,) or (&#8984; ,) and
          open the Settings page.{" "}
        </li>
        <li>
          In the Settings page, Go to &#123;Install&#125;, Search up
          &#123;script&#125;
        </li>
        <li>Press &#123;Install&#125;</li>
        <li>Once it has installed, restart Atom.</li>
        <li>
          If you've set it up correctly, you can now run code with the press of
          Command (&#8984;) I.
        </li>
        <li>Now you are done and ready to go!</li>
      </Instructions>

      <Paragraph>Now let's begin! Press the button on the Bottom Right going to the First Lesson!</Paragraph>

      <LessonFooter NextLocation="/javascript/helloworld" start/>
    </ArticleBody>
  </div>
);

export { Setup };
