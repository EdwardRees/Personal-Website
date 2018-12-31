import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container } from "reactstrap";
import { Ide, Introduction, Articles } from "./articles";
import { Introduction as FrontEndIntroduction } from "./projects/frontend/articles";
import { ProgrammingLanguageDifferences } from "./projects/frontend/articles/";
import { Header } from "./components";
import { Languages, About, Home, Projects, Error404 } from "./pages";
import { PythonHome } from "./languages/python";
import { JavaHome } from "./languages/java";
import { JavaScriptHome } from "./languages/javascript";
import { FrontEndHome } from "./projects/frontend";
import {
  HelloWorld_Python,
  DataTypes_Python,
  ControlFlow_Python,
  Collections_Python,
  Iteration_Python,
  Functions_Python,
  Exceptions_Python,
  Oop_Python,
  Examples_Python
} from "./languages/python/lessons";

import {
  HelloWorld_Java,
  DataTypes_Java,
  ControlFlow_Java,
  Collections_Java,
  Iteration_Java,
  Functions_Java,
  Exceptions_Java,
  Oop_Java,
  Examples_Java
} from "./languages/java/lessons";

import {
  HelloWorld_JavaScript,
  DataTypes_JavaScript,
  ControlFlow_JavaScript,
  Collections_JavaScript,
  Iteration_JavaScript,
  Functions_JavaScript,
  Exceptions_JavaScript,
  Oop_JavaScript,
  Examples_JavaScript
} from "./languages/javascript/lessons";

import {
  Bootstrap,
  CSSDifferences,
  CSSStyles,
  Frameworks,
  HTMLAttributes,
  HTMLCSSJSDifferences,
  HTMLClassesIDs,
  HTMLDom,
  HTMLTags,
  JQAnimations,
  JQSelectors,
  JSBasics,
  JSJQConnection
} from "./projects/frontend/lessons";

import { Setup as JavascriptSetup } from './languages/javascript/articles'

const App = () => (
  <Router>
    <div>
      <Header />
      <Container>
        <Route exact path="/" component={Home} />
        <Route path="/introduction" component={Introduction} />
        <Route path="/ide" component={Ide} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
        <Route path="/languages" component={Languages} />
        <Route path="/java" component={JavaHome} />
        <Route path="/python" component={PythonHome} />
        <Route path="/javascript" component={JavaScriptHome} />
        <Route path="/projects" component={Projects} />
        <Route path="/frontend" component={FrontEndHome} />
        <Route path="/404" component={Error404} />

        <Route path="/python/helloworld" component={HelloWorld_Python} />
        <Route path="/python/datatypes" component={DataTypes_Python} />
        <Route path="/python/controlflow" component={ControlFlow_Python} />
        <Route path="/python/collections" component={Collections_Python} />
        <Route path="/python/iteration" component={Iteration_Python} />
        <Route path="/python/functions" component={Functions_Python} />
        <Route path="/python/exceptions" component={Exceptions_Python} />
        <Route
          path="/python/objectorientedprogramming"
          component={Oop_Python}
        />
        <Route path="/python/examples" component={Examples_Python} />

        <Route path="/java/helloworld" component={HelloWorld_Java} />
        <Route path="/java/datatypes" component={DataTypes_Java} />
        <Route path="/java/controlflow" component={ControlFlow_Java} />
        <Route path="/java/collections" component={Collections_Java} />
        <Route path="/java/iteration" component={Iteration_Java} />
        <Route path="/java/functions" component={Functions_Java} />
        <Route path="/java/exceptions" component={Exceptions_Java} />
        <Route path="/java/objectorientedprogramming" component={Oop_Java} />
        <Route path="/java/examples" component={Examples_Java} />

        <Route
          path="/javascript/helloworld"
          component={HelloWorld_JavaScript}
        />
        <Route path="/javascript/datatypes" component={DataTypes_JavaScript} />
        <Route
          path="/javascript/controlflow"
          component={ControlFlow_JavaScript}
        />
        <Route
          path="/javascript/collections"
          component={Collections_JavaScript}
        />
        <Route path="/javascript/iteration" component={Iteration_JavaScript} />
        <Route path="/javascript/functions" component={Functions_JavaScript} />
        <Route
          path="/javascript/exceptions"
          component={Exceptions_JavaScript}
        />
        <Route
          path="/javascript/objectorientedprogramming"
          component={Oop_JavaScript}
        />
        <Route path="/javascript/examples" component={Examples_JavaScript} />

        <Route path="/frontend/differences" component={HTMLCSSJSDifferences} />
        <Route path="/frontend/dom" component={HTMLDom} />
        <Route path="/frontend/tags" component={HTMLTags} />
        <Route path="/frontend/attributes" component={HTMLAttributes} />
        <Route path="/frontend/htmlclasses" component={HTMLClassesIDs} />
        <Route path="/frontend/styles" component={CSSStyles} />
        <Route path="/frontend/cssdifferences" component={CSSDifferences} />
        <Route path="/frontend/jsbasics" component={JSBasics} />
        <Route path="/frontend/jqueryselectors" component={JQSelectors} />
        <Route path="/frontend/jqueryanimations" component={JQAnimations} />
        <Route
          path="/frontend/javascript-jquery-connection"
          component={JSJQConnection}
        />
        <Route path="/frontend/bootstrap" component={Bootstrap} />
        <Route path="/frontend/frameworks" component={Frameworks} />

        <Route
          path="/frontend/articles/introduction"
          component={FrontEndIntroduction}
        />
        <Route
          path="/frontend/articles/programminglanguages"
          component={ProgrammingLanguageDifferences}
        />

        <Route path="/javascript/articles/setup" component={JavascriptSetup} />
      </Container>
    </div>
  </Router>
);

export default App;
