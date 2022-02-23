import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './header.css'

const Header = () => {

    const location = useLocation();

    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand><Link to="/" className="custom-navbar-brand-link">Iremme Newborn Photography</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/" className={`header-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                        <Link to="/portofolio" className={`header-link ${location.pathname === '/portofolio' ? 'active' : ''}`}>Portofoliu</Link>
                        <Link to="/booking" className={`header-link ${location.pathname === '/booking' ? 'active' : ''}`}>Programări</Link>
                        <Link to="/contact" className={`header-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;