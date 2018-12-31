import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { DropdownButton, DropdownItem } from 'react-bootstrap';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class RightNav extends Component {
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
    const {
      Language,
      Example,
      title
    } = this.props;
    return (
      <div>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>{title}</DropdownToggle>

          <DropdownMenu>
            <DropdownItem eventKey="1">
              <Link to={`${Language}/helloworld`}>1. Hello World</Link>
            </DropdownItem>
            <DropdownItem eventKey="2">
              <Link to={`${Language}/datatypes`}>2. Data Types</Link>
            </DropdownItem>
            <DropdownItem eventKey="3">
              <Link to={`${Language}/controlflow`}>3. Control Flow</Link>
            </DropdownItem>
            <DropdownItem eventKey="4">
              <Link to={`${Language}/collections`}>4. Collection Data Types</Link>
            </DropdownItem>
            <DropdownItem eventKey="5">
              <Link to={`${Language}/iteration`}>5. Iteration</Link>
            </DropdownItem>
            <DropdownItem eventKey="6">
              <Link to={`${Language}/functions`}>6. Functions</Link>
            </DropdownItem>
            <DropdownItem eventKey="7">
              <Link to={`${Language}/exceptions`}>7. Exceptions</Link>
            </DropdownItem>
            <DropdownItem eventKey="8">
              <Link to={`${Language}/objectorientedprogramming`}>8. Object Oriented Programming</Link>
            </DropdownItem>
            <DropdownItem eventKey="9">
              <Link to={`${Language}/examples`}>9. Examples</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export { RightNav };
