import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap'


export default function NavBar(){

    return (
        <>
            <Navbar expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Casey Sytsema</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Nav className='me-auto'>
                        <Nav.Link to="/about/" />
                        <Nav.Link to="/skills/" />
                        <Nav.Link to="/education/" />
                        <Nav.Link to="/projects/" />

                    </Nav>
                </Container>
            </Navbar>
        
        
        </>
    )
}

