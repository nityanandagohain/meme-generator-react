import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

export default class AppNavbar extends Component {
  state = {
    isOpoen: false
  };

  toggle = () => {
    this.setState({
      isOpoen: !this.state.isOpoen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">
              <h1>MEME GENERATOR</h1>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpoen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">GitHub</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
