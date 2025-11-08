import React from "react";
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navegacion = () => {
    return(
        <>
            <Navbar key="sm" expand="sm" className="bg-body-tertiary mb-3 py-3" bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand as={ Link } to="/participantes">
                        <img src="/icon.png" alt="Logo del congreso" width="30" height="30" className="d-inline-block align-top"/>
                        {' '}
                        Congreso TICs
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm"/>
                    <Navbar.Offcanvas id="offcanvasNavbar-expand-sm" aria-labelledby="offcanvasNavbarLabel-expand-sm" placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                                Congreso TICs
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link as={ Link } to="/">
                                    Inicio
                                </Nav.Link>
                                <Nav.Link as={ Link } to="/participantes">
                                    Lista de participantes
                                </Nav.Link>
                                <Nav.Link as={ Link } to="/registro">
                                    Registro
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default Navegacion;