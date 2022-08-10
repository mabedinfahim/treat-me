import React, { createContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';


export const DataContext=createContext(<div></div>);
const ServicesHeader = () => {

  const [data,setData]=useState()
    return (
        <DataContext.Provider value={data}>
            <div className="my-5">
           <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mx-auto">
                    <Nav.Link className="text-uppercase fw-bold">Lab Test</Nav.Link>
                    <Nav.Link className="text-uppercase fw-bold">OPD Consultants</Nav.Link>
                    <Nav.Link className="text-uppercase fw-bold">Day Care</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </DataContext.Provider>
    );
};

export default ServicesHeader;