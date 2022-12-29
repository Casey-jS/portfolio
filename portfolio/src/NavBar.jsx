import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default function NavBar(){

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Casey Sytsema</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='me-auto'>
                            <LinkContainer to="/">
                                <Nav.Link>About Me</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/skills/">
                                <Nav.Link>My Skills</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        
        
        </div>
    )
}

