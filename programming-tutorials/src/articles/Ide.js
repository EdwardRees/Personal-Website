import React from "react";
import { ArticleHeader, ArticleBody, Paragraph } from "../components";

const Ide = () => (
  <div>
    <ArticleHeader
      title="Integrated Development Environment vs. Source Code Editors"
      author="Edward Rees"
    />
    <ArticleBody>
      <Paragraph>
        What’s the difference between an Integrated Development Environment
        [IDE] and a Source Code Editor? Source Code Editors exist within
        Integrated Development Environments, but an Integrated Development
        Environment does not usually exist inside a Source Code Editor. It’s
        similar to the idea of a classification of a Rectangle and a Square. A
        square is a rectangle, but a rectangle isn’t a square. In this case, the
        Integrated Development Environment is the Rectangle and the Source Code
        Editor is the Square. Source Code Editors are the primary code editing
        platform that exists within an IDE. Source Code Editors can exist
        outside of an IDE and be used as a standalone product. An example of a
        source code editor is the editor called Visual Studio Code. It’s a new
        editor but it’s slowly become a favorite among the Programming
        community. Another example is the editor, Sublime Text. Standalone
        source code editors usually, by default, do not have the capability to
        run code. However, with the help of add-ons and extensions, running code
        quickly becomes possible. Instead, with an Integrated Development
        Environment, or an IDE for short, a code runner is integrated into the
        software along with the Source Code Editor, without the need of any
        extensions, simplifying the setup.{" "}
      </Paragraph>
      <Paragraph>
        There are a number of source code editors that do come with some code
        running capability. For example, Brackets, a popular code editor for
        writing websites, comes with a built in runner for HTML, CSS, and
        JavaScript code. For beginning programmers, there is this conflicting
        advice. Some will say to start with a Source Code Editor, without any
        debugging and code running capabilities to teach the beginner how to use
        the console, while others will say to start with an IDE, to simplify the
        setup and explaining. I personally side with the former, suggesting to
        start with an IDE, as it simplifies the setup and allows the beginner to
        start programming.
      </Paragraph>
      <Paragraph>
        It’s really up to the programmer over which direction they’ll go.
        Personally, I started with Eclipse for Java, PyCharm for Python, and
        Brackets for Web Development. As I programmed more and more, I moved
        into Visual Studio Code and have been using that since for all my
        projects. It has been set up with a number of extensions to run, debug,
        and provide snippets for each programming language I write in. I would
        not advise doing the same until the programmer is more confident and in
        the intermediate stage, to which programming comes natural to them.
      </Paragraph>
      <Paragraph>
        The important takeaway is that an IDE has more packaged inside
        initially, without any extensions, whereas a standalone source code
        editor is only a code editor. An IDE has a source code editor inside to
        allow the programmer to code. A standalone source code editor normally
        only gives the programmer the ability to code, but not run or debug
        code.
      </Paragraph>
      <Paragraph>
        Integrated Development Environments and Source Code Editors are both
        extremely helpful when it comes to writing and running code. Finding the
        right one for a programmer can be hard, but that really comes with trial
        and error.
      </Paragraph>
    </ArticleBody>
  </div>
);

export { Ide };
