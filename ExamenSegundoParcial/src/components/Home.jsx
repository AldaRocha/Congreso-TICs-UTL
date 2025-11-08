import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="fondo">
            <Container className="py-5">
                <Row className="justify-content-center align-items-center">
                    <Col lg="4" md="6" sm="12" >
                        <Card className="justify-content-center align-items-center">
                            <Card.Img className="mt-3" variant="top" src="/icon.png" alt="Logo del Congreso" style={{ width: "250px", height: "250px" }}/>
                            <Card.Body>
                                <Card.Title className="text-center">
                                    Congreso de Tecnolog&iacute;as de la Informaci&oacute;n
                                </Card.Title>
                                <div className="d-flex align-items-center justify-content-center mt-3">
                                    <Button as={ Link } to="/participantes">
                                        Entrar
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
