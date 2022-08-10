import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../../assets/images/logo.png'
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <div>
             {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand as={Link} to='/'> <img className="img-fluid ms-3" style={{width: '100%', height: '30px'}} src={logo} alt="" srcset="" /> </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img className="img-fluid" style={{width: '100%', height: '30px'}} src={logo} alt="" srcset="" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/">About us</Nav.Link>
                  <Nav.Link as={Link} to="/">Blogs</Nav.Link>
                  <Nav.Link as={Link} to="/">Contact us</Nav.Link>
                  <Nav.Link as={Link} to="/">Sign in</Nav.Link>
                  <Nav.Link as={Link} to="/">Sign up</Nav.Link>
                  
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </div>
    );
};

export default Header;