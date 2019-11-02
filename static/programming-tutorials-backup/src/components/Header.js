import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink
} from "reactstrap";

// import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <NavLink href="/" style={{ color: "#606060" }}>
              Home
            </NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about" style={{ color: "#606060" }}>
                  About
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Articles
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/articles" style={{ color: "#606060" }}>
                      Articles Directory
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/introduction" style={{ color: "#606060" }}>
                      Introduction
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/ide" style={{ color: "#606060" }}>
                      Integrated Development Environment vs. Source Code Editor
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Languages
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/languages" style={{ color: "#606060" }}>
                      Programming Languages Directory
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/404" style={{ color: "#606060" }}>
                      Python
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/javascript/articles/setup" style={{ color: "#606060" }}>
                      JavaScript
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/404" style={{ color: "#606060" }}>
                      Java
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Projects
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/projects" style={{ color: "#606060" }}>
                      Project Directory
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/frontend" style={{ color: "#606060" }}>
                      Front End Web Development
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export { Header };
