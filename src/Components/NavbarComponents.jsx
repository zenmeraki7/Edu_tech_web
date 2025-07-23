import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import zenlogo from "../assets/zenlogo.png";

function NavbarComponent() {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: '#EFF9F9' }} className="px-4">
        <Navbar.Brand href="#home" className="ms-3 d-flex align-items-center">
          <img src={zenlogo} width="30" height="30" className="d-inline-block align-top" alt="logo" />
          <strong className="ms-2">ZEN MERAKI</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto align-items-center text-center">
            <Nav.Link href="#home" className="fw-bold fs-5 text-dark">Home</Nav.Link>
            <NavDropdown title={<span className="fw-bold fs-5">Expertise</span>} id="expertise-dropdown">
              <NavDropdown.Item href="#design" className="border-top border-bottom border-dark">Shopify App Development</NavDropdown.Item>
              <NavDropdown.Item href="#development">Custom Shopify App Development</NavDropdown.Item>
              <NavDropdown.Item href="#custom">Custom App Development</NavDropdown.Item>
              <NavDropdown.Item href="#website">Website Development</NavDropdown.Item>
              <NavDropdown.Item href="#digital">Digital Marketing</NavDropdown.Item>
              <NavDropdown.Item href="#ecom">E-Commerce Account Management</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about" className="fw-bold fs-5 text-dark">About Us</Nav.Link>
            <Nav.Link href="#apps" className="fw-bold fs-5 text-dark">Apps</Nav.Link>
            <Nav.Link href="#projects" className="fw-bold fs-5 text-dark">Projects</Nav.Link>
            <Nav.Link href="#careers" className="fw-bold fs-5 text-dark">Careers</Nav.Link>
          </Nav>
          <div className="d-flex">
            <Button
              href="#contact"
              variant="success"
              className="d-none d-md-flex ms-2 fw-bold px-4"
              style={{ boxShadow: 'none', backgroundColor: '#198754', borderColor: '#198754' }}
            >
              CONTACT US
            </Button>


          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
