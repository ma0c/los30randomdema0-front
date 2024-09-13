import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Form, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ButtonNavbar from "../../components/bottomNavbar";
import TopNavbar from "../../components/topNavbar";

const CAPTURE_PATH = `sakura/capture-card`

export default function CardDetail(props) {
    const { state } = useLocation();
    const { slug } = useParams();
    const card = state.card;
    console.log("CARD", card);
    const [show, setShow] = useState(false);
    const [captureErrors, setCaptureErrors] = useState(null);
    const handleClose = () => {
        setShow(false);
        navigate('/sakura');
    }
    const {
        register,
        handleSubmit,
    } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log("Sending data");
        let url = `${process.env.REACT_APP_BASE_URL}/${CAPTURE_PATH}/${slug}/`;
        if (card.isFirstTime) {
            data.card = slug;
            url = `${process.env.REACT_APP_BASE_URL}/${CAPTURE_PATH}/`;
        }
        console.log(data);
        fetch(
            url,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Token ' + localStorage.getItem('token')
                },
                method: card.isFirstTime ? 'POST' : 'PATCH',
                body: JSON.stringify(data),
            }
        )
            .then(response => {
                if (response.ok) {
                    response.json().then(data => {
                        console.log(data)
                        if (data.solved) {
                            setCaptureErrors("Respuesta Correcta");
                            setShow(true)
                        }
                        else {
                            setCaptureErrors("Respuesta incorrecta");
                            setShow(true)
                        }
                    })
                }
                else {
                    console.log('Error:', response);
                    console.log('Error:', response.body);
                    console.log('Not FOUND');
                    response.text().then(text => {
                        setCaptureErrors(text);
                        setShow(true)
                    })
                }
            }
            )
            .catch(error => {
                console.log('Error:', error);
                console.log('Not FOUND');
                setCaptureErrors(error);
                setShow(true)

            });
    }
    return (
        <Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Algo salió mal :(</Modal.Title>
                </Modal.Header>
                <Modal.Body>{captureErrors}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
            <TopNavbar />
            <Row className="margin-top-header">
                <Col>
                    <h1 className="text-naranja">Pregunta:</h1>
                    <p className="pregunta">
                        {card.card.question}
                    </p>
                    {!card.solved && (
                        <Form onSubmit={handleSubmit(onSubmit)} >
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} {...register("answer")} />
                            </Form.Group>
                            <Row>
                                <Col className="d-flex justify-content-end">
                                    <Button type="submit" className={"btn-mao-2 mt-3"}>
                                        Capturar
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    )}
                </Col>
            </Row>
            <ButtonNavbar />
        </Container>
    )
}