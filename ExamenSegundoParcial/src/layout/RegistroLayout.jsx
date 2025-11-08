import React, { useEffect, useState } from "react";
import Navegacion from "../components/Navegacion";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";

const RegistroLayout = () => {
    const [avatares, setAvatares] = useState([]);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [twitter, setTwitter] = useState("");
    const [ocupacion, setOcupacion] = useState("");
    const [avatar, setAvatar] = useState(0);
    const [terminos, setTerminos] = useState(false);

    useEffect(() => {
        ObtenerAvatares();
    }, []);
    
    const ObtenerAvatares = async () => {
        const response = await axios.get("http://localhost:5112/api/avatar");
        setAvatares(response.data);
    }

    const Guardar = async () => {
        if (nombre === "" || nombre === null){
            return alert("El nombre no puede ir vacío");
        }
        if (apellido === "" || apellido === null){
            return alert("Los apellidos no pueden ir vacíos");
        }
        if (correo === "" || correo === null){
            return alert("El correo no puede ir vacío");
        }
        if (twitter === "" || twitter === null){
            return alert("El usuario de Twitter no puede ir vacío");
        }
        if (ocupacion === "" || ocupacion === null){
            return alert("La ocupación no puede ir vacía");
        }
        if (avatar === 0){
            return alert("El avatar no puede ir vacío");
        }
        if (terminos === false){
            return alert("Debes aceptar los terminos y condiciones para continuar");
        }

        const data = {
            RegistroId: 0,
            AvatarId: avatar,
            Nombres: nombre,
            Apellidos: apellido,
            Correo: correo,
            Twitter: twitter,
            Ocupacion: ocupacion,
            Terminos: terminos ? 1 : 0
        }

        const response = await axios.post("http://localhost:5112/api/asistentes", data);
        alert(response.data);
        window.location.href = "/participantes";
    }

    return(
        <div className="fondo-color-altura">
            <Navegacion/>
            <Container className="pb-4">
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">
                                    Registro de Participantes
                                </Card.Title>
                                <Form className="mt-2">
                                    <Form.Group className="mb-2" controlId="nombre">
                                        <Form.Label>
                                            Nombre:
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="Ingrese sus nombre:" onChange={ (e) => setNombre(e.target.value) }/>
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="apellidos">
                                        <Form.Label>
                                            Apellidos:
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="Ingrese sus apellidos:" onChange={ (e) => setApellido(e.target.value) }/>
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="correo">
                                        <Form.Label>
                                            Correo:
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="Ingrese su correo:" onChange={ (e) => setCorreo(e.target.value) }/>
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="twitter">
                                        <Form.Label>
                                            Twitter:
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="Ingrese su usuario de twitter:" onChange={ (e) => setTwitter(e.target.value) }/>
                                    </Form.Group>
                                    <Form.Group controlId="ocupacion">
                                        <Form.Label>
                                            Ocupaci&oacute;n:
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="Ingrese su ocupación:" onChange={ (e) => setOcupacion(e.target.value) }/>
                                    </Form.Group>
                                </Form>
                                <Row className="mt-3">
                                    <h3 className="text-center">
                                        Selecciona un avatar
                                    </h3>
                                </Row>
                                <Row className="mt-3">
                                    {
                                        avatares.map((a) => {
                                            return(
                                                <Col key={a.AvatarId} lg="4" md="4" sm="12" className="text-center mb-3">
                                                    <img src={ a.UrlImagen } alt="Imagen del avatar" className="rounded-circle avatar-img img-fluid"/>
                                                    <Form.Check
                                                        type="radio"
                                                        id={ `avatar-${ a.AvatarId }` }
                                                        name="avatarGroup"
                                                        label={ a.Nombre }
                                                        value={ a.AvatarId }
                                                        checked={ avatar === a.AvatarId }
                                                        onChange={ (e) => setAvatar(parseInt(e.target.value)) }
                                                        className="mt-2 d-flex justify-content-center"
                                                    />
                                                </Col>
                                            );
                                        })
                                    }
                                </Row>
                                <Row>
                                    <Col className="px-5">
                                        <Form.Check
                                            type="checkbox"
                                            label="Leí y acepto los términos  y condiciones"
                                            checked={ terminos }
                                            onChange={ () => setTerminos(!terminos) }
                                        />
                                    </Col>
                                </Row>
                                <Row className="mt-3 px-3">
                                    <Button variant="success" onClick={ Guardar }>
                                        Guardar
                                    </Button>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default RegistroLayout;