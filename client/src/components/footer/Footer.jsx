import React from "react"
import { Navbar, Container } from "react-bootstrap";
import './Footer.css';

const Footer = () => (
  <footer className="page-footer font-small blue">
    <Navbar bg="dark" variant='dark'>
      <Container>
        <div className="footer-copyright text-center pt-3">© 2022 Copyright: 
          <a href="https://mdbootstrap.com/"> Onur Bosnac</a>
        </div>
      </Container>
    </Navbar>
    

  </footer>
);

export default Footer