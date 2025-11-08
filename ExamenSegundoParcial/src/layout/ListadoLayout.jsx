import React, { useEffect, useState } from "react";
import Navegacion from "../components/Navegacion";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

const MainLayout = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const buscador = searchParams.get("q") || "";

    useEffect(() => {
        ObtenerUsuarios(buscador);
    }, [buscador]);

    const ObtenerUsuarios = async (query) => {
        let url = "http://localhost:5112/api/asistentes";
        if (query){
            url = url + "/" + query;
        }
        try{
            const response = await axios.get(url);
            setUsuarios(response.data);
        } catch(error){
            console.log(error);
            setUsuarios([]);
        }
    }

    const ManejarBusqueda = (e) => {
        const query = e.target.value;
        if (query){
            setSearchParams({ q: query });
        } else{
            setSearchParams({});
        }
    }

    return(
        <div className="fondo-color-altura">
            <Navegacion/>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">
                                    Asistentes Registrados
                                </Card.Title>
                                <div className="d-flex align-items-center justify-content-center">
                                    <Button as={ Link } to="/registro" variant="success">
                                        Registro
                                    </Button>
                                </div>
                                <Form className="mt-0">
                                    <Form.Group controlId="nombre">
                                        <Form.Label>
                                            Nombre:
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="Ingresa el nombre a buscar" onChange={ (e) => ManejarBusqueda(e) }/>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-3">
                    {
                        usuarios.map((u) => {
                            return(
                                <Col className="pb-3" lg="4" md="4" sm="12">
                                    <Card>
                                        <Card.Img src={ u.Avatar.UrlImagen } alt="Imagen del avatar"/>
                                        <Card.Body className="text-center">
                                            <Card.Title>
                                                { u.Nombres + " " + u.Apellidos }
                                            </Card.Title>
                                            <Card.Text>
                                                <strong>
                                                    @{ u.Twitter }
                                                </strong>
                                            </Card.Text>
                                            <Card.Text>
                                                { u.Ocupacion }
                                            </Card.Text>
                                            <Card.Text>
                                                { u.Correo }
                                            </Card.Text>
                                            <div className="d-flex align-items-center justify-content-center mt-3">
                                                <Button>
                                                    Ver Gafete
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })
                    }
                </Row>
            </Container>
        </div>
    );
}

export default MainLayout;