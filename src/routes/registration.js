import { useForm } from "react-hook-form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {useLocation, useNavigate} from "react-router-dom";
import {Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useState} from "react";

const REGISTRATION_PATH = `registration/registration`

export default function Registration() {
    const {state} = useLocation();
    const profile = state.profile;
  const {
      register,
      handleSubmit,
  } = useForm(
{
          defaultValues: {
            name: profile.name,
            phone: profile.phone,
            whatsapp: profile.phone,
            instagram: profile.instagram,
            possible_attendee: profile.id,
            slug: profile.slug,
          }
      }
  );
    const [registrationErrors, setRegistrationErrors] = useState(null);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

    const navigate = useNavigate();
   const onSubmit = (data) => {
       console.log("Sending data");
       console.log(data);


        fetch(
            `${process.env.REACT_APP_BASE_URL}/${REGISTRATION_PATH}/`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(data),
            }
        )
        .then(response => {
                if (response.ok) {
                    response.json().then(data => {
                        console.log(data)
                        navigate(`/profile/${data.slug}`)
                    })
                }
                else {
                    console.log('Error:', response);
                    console.log('Error:', response.body);
                    console.log('Not FOUND');
                    response.text().then(text => {
                        setRegistrationErrors(text);
                        setShow(true)
                    })
                }
            }
        )
        .catch(error => {
            console.log('Error:', error);
            console.log('Not FOUND');
            setRegistrationErrors(error);
            setShow(true)

        });
   }

  return (
    <Container className={"p-4"}>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Algo salió mal :(</Modal.Title>
            </Modal.Header>
            <Modal.Body>{registrationErrors}</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col>
                  <Card className={'mt-5'}>
                      <Card.Img style={{width: '50%', margin: 'auto'}}
                                src={profile.profile_pic || "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/240px-User-avatar.svg.png"}></Card.Img>
                      <Card.Body className={'text-center'}>
                          <Row>
                              <Col>
                                  {profile.name}
                              </Col>
                          </Row>
                          <Row>
                              <Col>
                                  {profile.phone}
                              </Col>
                          </Row>
                          <Row>
                              <Col>
                                  {profile.instagram}
                              </Col>
                          </Row>
                      </Card.Body>
                  </Card>
              </Col>
                <input type="hidden" {...register("name")}/>
                <input type="hidden" {...register("phone")}/>
                <input type="hidden" {...register("instagram")}/>
                <input type="hidden" {...register("possible_attendee")}/>
            </Row>
            <Row>
                <Col sm={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className={"form-label"}>+1</Form.Label>
                      <Form.Check className={"form-control"} {...register("extra_attendees")} />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className={"form-label"}>Alcohol</Form.Label>
                      <Form.Select className={"form-select"} aria-label="Default select example" required {...register("alcohol")}>
                        <option disabled>Selecciona alguna</option>
                        <option value="1">Voy Manejando</option>
                        <option value="2">Un par de copitas y melo</option>
                        <option value="3">Si gotea repito</option>
                        <option value="4">Voy a hacer una elmada, traigame un balde</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className={"form-label"}>Weed</Form.Label>
                      <Form.Select className={"form-select"} aria-label="Default select example" required {...register("weed")}>
                        <option disabled>Selecciona alguna</option>
                        <option value="1">Nada, mi mama no me deja</option>
                        <option value="2">Par de ploncitos</option>
                        <option value="3">Si sobra me llevo</option>
                        <option value="4">Llevo quien me pilotee que voy al infinito y mas alla</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className={"form-label"}>Tipo de dieta</Form.Label>
                      <Form.Select className={"form-select"} aria-label="Default select example" required {...register("vegetarian")}>
                        <option disabled>Selecciona alguna</option>
                        <option value="1">Vegetariano</option>
                        <option value="2">Me como lo que me pongan</option>
                        <option value="3">Soy judio</option>
                        <option value="4">Soy vegano, fastidioso y voy a llevar mi propia comida</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className={"form-label"}>Llego a las</Form.Label>
                      <Form.Select className={"form-select"} aria-label="Default select example" required {...register("entry_hour")}>
                        <option disabled>Selecciona alguna</option>
                        <option value="2024-09-14T16:00:00-05:00">4</option>
                        <option value="2024-09-14T18:00:00-05:00">6</option>
                        <option value="2024-09-14T20:00:00-05:00">8</option>
                        <option value="2024-09-15T00:00:00-05:00">Al otro dia cuando se me de la gana</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className={"form-label"}>Me voy a ir a las</Form.Label>
                      <Form.Select className={"form-select"} aria-label="Default select example" required {...register("exit_hour")}>
                        <option disabled>Selecciona alguna</option>
                        <option value="2024-09-15T00:00:00-05:00">Media noche como cenicienta</option>
                        <option value="2024-09-15T10:00:00-05:00">Al otro dia después de desayunar</option>
                        <option value="2024-09-15T17:00:00-05:00">Hasta que me saquen de la finca</option>
                        <option value="2024-09-15T17:00:00-05:00">Yo me mando solo y me voy cuando se me de la gana</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                <Button type="submit" className={"btn-mao-1 mt-5"}>
                  Guardar
                </Button>

            </Row>
        </Form>
    </Container>
  );
}