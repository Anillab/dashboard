import React from 'react';
import {Nav,Form,FormControl,Button, Navbar,Brand,Toggle,Collapse } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const NavigationBar = (props)=>{
  return(
    <>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Credbook</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Contact Us hello@credbook.com</Nav.Link>
      <Nav.Link href="#link">TEL:+2331345761</Nav.Link>
      
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</>
)
}
export default NavigationBar;
