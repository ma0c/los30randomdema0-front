import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {Modal} from "react-bootstrap";
import NotFound from "../../NotFound";

const POSSIBLE_ATTENDEE_PATH = `registration/possible_attendees`

const Invitation = () => {
    const { slug } = useParams();

    const [profile, setProfile] = useState(null);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);
    const handleExit = () => {
        window.open("about:blank", "_self");
        window.close();
    }

    const navigate = useNavigate();


    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}/${POSSIBLE_ATTENDEE_PATH}/${slug}/`)
        .then(response => {
            console.log(response)
            if (response.ok) {
                console.log("Response ok")
                return response.json()
            }
            else {
                console.log(response.status)
                if (response.status === 400) {
                    console.log('Redirecting');
                    navigate(`/profile/${slug}`)
                }
                console.log('Not FOUND');
                setProfile(null)
            }
        })
        .then(data => setProfile(data))
        .catch(error => {
            console.log("Catching error directly")
            console.log('Error:', error);
            console.log('Not FOUND');
            setProfile(null)
        });
    }
    , [navigate, slug]);

  return profile ? ( <Container>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>:( Está bien</Modal.Title>
            </Modal.Header>
              <Modal.Body>
                  <Card className={'mt-5'}>
                      <Card.Img style={{width: '50%', margin: 'auto'}}
                         src="https://i.gifer.com/8KO.gif" />
                      <Card.Body className={'text-center'}>
                          <Row>
                              <Col>
                            Si cambias de opinion puedes volver a esta url y confirmar hasta el 25 de agosto
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                  Volver
                  </Button>
                  <Button variant="primary" onClick={handleExit}>
                      Salir
                  </Button>
            </Modal.Footer>
          </Modal>
          <Row>
              <Col>
                  <Card className={'mt-5'}>
                      <Card.Title>
                          Te invito a mi fiesta random de cumpleaños
                      </Card.Title>
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
                          <Row>
                              <Col>
                              <Link to="confirm" state={{profile: profile}}><Button>Si voy</Button></Link>
                              </Col>
                              <Col>
                              <Button variant="danger" onClick={handleOpen}>Pailas</Button>
                              </Col>
                          </Row>
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
          </Container>) : ( <NotFound />)

}

export default Invitation;
