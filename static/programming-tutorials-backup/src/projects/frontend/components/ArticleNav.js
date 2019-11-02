import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class ArticleNav extends Component {
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
          <DropdownToggle caret>Articles</DropdownToggle>
          <DropdownMenu>
            <DropdownItem eventKey="1">
              <Link to={"/frontend/articles/introduction"}>Introduction</Link>
            </DropdownItem>
            <DropdownItem eventKey="2">
              <Link to={"/frontend/articles/programminglanguages"}>
                Markup vs. Stylesheet vs. Programming Languages
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
export { ArticleNav };
