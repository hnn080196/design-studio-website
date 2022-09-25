import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "assets/images/layout/logo.png";
import Enums from "config/enums";
import { FacebookIcon, InstagramIcon, BehanceIcon } from "./social";
const PublicLayout = (props) => {
  const { children, handleRedirect } = props;
  return (
    <header className="public-layout">
      <Container fluid>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand className="public-layout--brand " onClick={(e) => handleRedirect(Enums.PATH.HOME)}>
            <img src={Logo} alt="" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="public-layout--nav">
            <Nav>
              {/* <Nav.Link>PROJECTS</Nav.Link> */}
              <NavDropdown className="public-layout--dropdown" title="PROJECTS" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={(e) => handleRedirect(Enums.PATH.RESIDENTIAL._)}>
                  Residential
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={(e) => handleRedirect(Enums.PATH.COMMERCIAL._)}>Commercial</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={(e) => handleRedirect(Enums.PATH.ABOUT)}>ABOUT-US</Nav.Link>
              <Nav.Link onClick={(e) => handleRedirect(Enums.PATH.TEAM)}>PEOPLE</Nav.Link>
              {/* <Nav.Link onClick={(e) => handleRedirect(Enums.PATH.NEWS)}>NEWS</Nav.Link> */}
              <Nav.Link onClick={(e) => handleRedirect(Enums.PATH.CONTACT)}>CONTACTS</Nav.Link>

              <div className="social-button">
                <iframe
                  src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fx11designstudio%2F&width=100&layout=button&action=like&size=large&share=false&height=65&appId"
                  width={80}
                  height={30}
                  style={{
                    border: "none",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  scrolling="no"
                  frameBorder={0}
                  title="header"
                  // allowFullScreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
                <a href="https://www.facebook.com/x11designstudio/" target={"_blank"} rel="noreferrer">
                  <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/tuananhtran2801/" target={"_blank"} rel="noreferrer">
                  <InstagramIcon />
                </a>
                <a href="https://www.behance.net/tuananhnd22fdc" target={"_blank"} rel="noreferrer">
                  <BehanceIcon />
                </a>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>

      <div className="content">{children}</div>
    </header>
  );
};

export default PublicLayout;
