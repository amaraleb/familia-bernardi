import React from "react";
import familyicon from "../../img/enc.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function AppHeader(props){
    return(
    
    <Navbar expand="lg" className="nav">
          <Container>
            <Navbar.Brand id="title" href="/">
                <img
                  alt="Logo"
                  src={familyicon}
                   width="40"
                   height="40"
                   className="d-inline-block align-top"
                 />{' '}
                Fam&iacute;lia Bernardi
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/noticias">Not&iacute;cias</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    
    );
    }

    