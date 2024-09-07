import {useLocation, useParams} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {Instagram, Whatsapp} from "react-bootstrap-icons";
import NotFound from "../../NotFound";
import {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import QRCode from "react-qr-code";


const POKEDEX_PROFILE_PATH = `pokedex/profile`
const POKEDEX_ME_PATH = `pokedex/me`

export default function PokedexProfile(props) {
    const { slug } = useParams();
    const {state} = useLocation();
    const givenProfile = state ? state.profile : null;
    const [profile, setProfile] = useState(givenProfile);
    const { me } = props;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const FETCH_PROFILE_URL = me ? POKEDEX_ME_PATH : `${POKEDEX_PROFILE_PATH}/${slug}/`

    useEffect(() => {
        fetch(
            `${process.env.REACT_APP_BASE_URL}/${FETCH_PROFILE_URL}`,
            {
                headers: {
                    'Authorization': 'Token ' + (localStorage.getItem('token') || 'asd')
                }
            }
        )
        .then(response => response.json())
        .then(data => {setProfile(data); console.log(data)})
        .catch(error => {
            console.log('Error:', error);
            console.log('Not FOUND');
            setProfile(null)
        });
    }
    , [FETCH_PROFILE_URL]);

    return profile ? ( <Container>
        { me && <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>QR(</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <QRCode value={profile.attendee.slug} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        }
          <Row>
              <Col>
                  <Card className={'mt-5'}>
                      <Card.Header>
                          {profile.attendee.name}
                      </Card.Header>
                      <Card.Img style={{width: '50%', margin: 'auto'}}
                                src={profile.attendee.profile_pic}></Card.Img>
                      <Card.Body className={'text-center'}>
                          <Row>
                              <Col>
                                  <Whatsapp />{profile.attendee.phone}
                              </Col>
                          </Row>
                          <Row>
                              <Col>
                                  <Instagram />{profile.attendee.instagram}
                              </Col>
                          </Row>
                          <Row>
                            <Col>
                                {profile.badges && profile.badges.map(badge => (
                                    <img src={badge.image} alt={badge.name} width={30} />

                                ))}
                            </Col>
                          </Row>
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
        {me&&<Row><Col><Button onClick={handleOpen}>Mostrar QR</Button></Col></Row>}

          </Container>) : ( <NotFound />)


}