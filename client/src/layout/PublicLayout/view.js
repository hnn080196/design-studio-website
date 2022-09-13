import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "assets/images/layout/logo.png";
import Enums from "config/enums";
const PublicLayout = (props) => {
  const { children, handleRedirect } = props;
  return (
    <header className="public-layout">
      <Container fluid>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home" className="public-layout--brand me-auto">
            <img src={Logo} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="public-layout--nav">
            <Nav>
              <NavDropdown title="PROJECTS" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={(e) => handleRedirect(Enums.PATH.RESIDENTIAL._)}>
                  Residential
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={(e) => handleRedirect(Enums.PATH.COMMERCIAL._)}>Commercial</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={(e) => handleRedirect(Enums.PATH.ABOUT)}>ABOUT</Nav.Link>
              <Nav.Link onClick={(e) => handleRedirect(Enums.PATH.TEAM)}>PEOPLE</Nav.Link>
              <Nav.Link onClick={(e) => handleRedirect(Enums.PATH.NEWS)}>NEWS</Nav.Link>
              <Nav.Link onClick={(e) => handleRedirect(Enums.PATH.CONTACT)}>CONTACTS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>

      <div className="content">{children}</div>
    </header>
  );
};

export default PublicLayout;
