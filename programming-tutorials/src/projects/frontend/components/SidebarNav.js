import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class SidebarNav extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
  toggle() {
    this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));
  }
  render() {
      return (
          <div>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>FrontEnd Web Lessons</DropdownToggle>
              <DropdownMenu>
                  <DropdownItem eventKey="1">
                      <Link to={"/frontend/differences"}>1. HTML, CSS, JS differences</Link>
                  </DropdownItem>
                  <DropdownItem eventKey="2">
                      <Link to={"/frontend/dom"}>2. HTML5 Definition of Document Oriented Model [DOM]</Link>
                  </DropdownItem>
                  <DropdownItem eventKey="3">
                      <Link to={"/frontend/tags"}>3. HTML5 Tag System</Link>
                  </DropdownItem>
                  <DropdownItem eventKey="4">
                      <Link to={"/frontend/attributes"}>4. HTML5 Attributes</Link>
                  </DropdownItem>
                  <DropdownItem eventKey="5">
                      <Link to={"/frontend/htmlclasses"}>5. HTML5 Classes and IDs</Link>
                  </DropdownItem>
                  <DropdownItem eventKey="6">
                      <Link to={"/frontend/styles"}>6. CSS3 Styles</Link>
                  </DropdownItem>
                  <DropdownItem eventKey="7">
                      <Link to={"/frontend/cssdifferences"}>7. CSS3 Inline vs. Document vs. Tag</Link>
                  </DropdownItem>
                  <DropdownItem eventKey="8">
                      <Link to={"/frontend/jsbasics"}>8. JavaScript Basics</Link>
                  </DropdownItem>
                  <DropdownItem eventKey="9">
                      <Link to={"/frontend/jqueryselectors"}>9. jQuery Selectors</Link>
                  </DropdownItem>
                  <DropdownItem eventKey="10">
                      <Link to={"/frontend/jqueryanimations"}>10. jQuery Animations</Link>
                  </DropdownItem>
                  <DropdownItem eventKey="11">
                      <Link to={"/frontend/javascript-jquery-connection"}>11. JavaScript and jQuery Connection</Link>
                  </DropdownItem>
                  <DropdownItem eventKey="12">
                      <Link to={"/frontend/bootstrap"}>12. Bootstrap 4</Link>
                  </DropdownItem>
                  <DropdownItem eventKey="13">
                      <Link to={"/frontend/frameworks"}>13. JavaScript Front End frameworks</Link>
                  </DropdownItem>
              </DropdownMenu>
              </Dropdown>
          </div>
      )
  }
}

export { SidebarNav };