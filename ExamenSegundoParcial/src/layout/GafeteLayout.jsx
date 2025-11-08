import React, { useEffect, useState } from "react";
import Navegacion from "../components/Navegacion";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const GafeteLayout = () => {
    const [usuario, setUsuario] = useState({});
    const { id } = useParams();

    useEffect(() => {
        ObtenerUsuario(id);
    }, [id]);

    const ObtenerUsuario = async (id) => {
        try{
            const response = await axios.get("http://localhost:5112/api/asistentes/buscarbyid/" + id);
            setUsuario(response.data);
        } catch(error){
            console.log(error);
            setUsuario({});
        }
    }

    return(
        <div className="fondo-color-altura">
            <Navegacion/>
            <Container className="pb-3">
                {
                    usuario && usuario.RegistroId ? (
                        <>
                            <Row>
                                <Col lg="6" md="6" sm="12">
                                    <Card>
                                        <Card.Img src={ usuario.Avatar.UrlImagen } className="rounded-circle" alt="Imagen del avatar" />
                                        <Card.Body className="text-center">
                                            <Card.Title>
                                                { usuario.Nombres } { usuario.Apellidos }
                                            </Card.Title>
                                            <Card.Text>
                                                <strong>
                                                    Ocupaci&oacute;n:
                                                </strong>
                                                &nbsp;
                                                { usuario.Ocupacion }
                                            </Card.Text>
                                            <Card.Text>
                                                <strong>
                                                    Twitter:
                                                </strong>
                                                &nbsp;
                                                @{ usuario.Twitter }
                                            </Card.Text>
                                            <hr />
                                            <Card.Text>
                                                { usuario.Correo }
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg="6" md="6" sm="12">
                                    <Card>
                                        <Card.Img src="/icon.png" className="rounded-circle" alt="Imagen del icono del congreso"/>
                                        <Card.Body className="text-center">
                                            <Card.Title>
                                                Congreso de Tecnologías de la Información
                                            </Card.Title>
                                            <Card.Text>
                                                <strong>
                                                    @CongresoTIUTL
                                                </strong>
                                            </Card.Text>
                                            <Card.Text>
                                                https://congresoalda.netlify.app/
                                            </Card.Text>
                                            <hr />
                                            <Card.Text>
                                                Todos los t&eacute;rminos y condiciones fueron aceptados.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Button as={ Link } to="/participantes">
                                    Regresar
                                </Button>
                            </Row>
                        </>
                    ) : (
                        <>
                        
                        </>
                    )
                }
            </Container>
        </div>
    );
}

export default GafeteLayout;