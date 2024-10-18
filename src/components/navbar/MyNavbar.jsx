import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import "./MyNavbar.css";
import { Col, Row } from "react-bootstrap";

function MyNavbar() {
  const expand = "md";
  return (
    <div style={{ backgroundColor: "#344955" }}>
      <Container className="py-0 my-0">
        <Row>
          <Col>
            <Navbar expand={expand}>
              <Container fluid>
                <Navbar.Brand
                  style={{ fontSize: "28px" }}
                  className="serif text-white"
                >
                  Article blog
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header
                    style={{ backgroundColor: "#344955" }}
                    closeButton
                  >
                    <Offcanvas.Title
                      className="text-white"
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      Menu
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body style={{ backgroundColor: "#344955" }}>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <NavLink to="/" className="nav-link text-white">
                        Home
                      </NavLink>

                      <NavLink
                        to="/add-article"
                        className="nav-link text-white"
                      >
                        Add article
                      </NavLink>
                      <NavLink to="/about" className="nav-link text-white">
                        About us
                      </NavLink>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyNavbar;
