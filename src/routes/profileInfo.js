import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import {Modal} from "react-bootstrap";

const POSSIBLE_ATTENDEE_PATH = `registration/possible_attendees`

const ProfileInfo = () => {
    const { slug } = useParams();

    const [profile, setProfile] = useState(null);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);
    const handleExit = () => {
        window.open("about:blank", "_self");
        window.close();
    }


    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}/${POSSIBLE_ATTENDEE_PATH}/${slug}/`)
        .then(response => response.json())
        .then(data => setProfile(data))
        .catch(error => {
            console.log('Error:', error);
            console.log('Not FOUND');
            setProfile(null)
        });
    }
    , []);

  return profile ? ( <Container>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>:( Está bien</Modal.Title>
            </Modal.Header>
            <Modal.Body>Si cambias de opinion puedes volver a esta url y confirmar hasta el 25 de agosto</Modal.Body>
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
          </Container>) : ( <div>Profile not found</div>)

}

export default ProfileInfo;
