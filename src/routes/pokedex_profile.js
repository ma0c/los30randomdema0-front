import { useLocation, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Instagram, Whatsapp } from "react-bootstrap-icons";
import NotFound from "../NotFound";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import QRCode from "react-qr-code";
import logo from '../img/logo.png';


const POKEDEX_PROFILE_PATH = `pokedex/profile`
const POKEDEX_ME_PATH = `pokedex/me`

export default function PokedexProfile(props) {
    const { slug } = useParams();
    const { state } = useLocation();
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
            .then(data => { setProfile(data); console.log(data) })
            .catch(error => {
                console.log('Error:', error);
                console.log('Not FOUND');
                setProfile(null)
            });
    }
        , [FETCH_PROFILE_URL]);

    return profile ? (<Container id="pokedex-profile">
        {me && <Modal show={show} onHide={handleClose}>
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
        <Row className="profile-card g-0">
            <Col className="profile">
                <Row className="g-0">
                    <Col className="card-header">
                        <div className="d-flex align-items-start">
                            <Badge pill className="header-badge">
                                HBD Ma0
                            </Badge>
                            <h1 className={'profile-name'}>{profile.attendee.name}</h1>
                        </div>
                        <img src={logo} className="profile-logo" alt="logo" />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col className="profile-pic">
                        <Card.Img style={{ width: '60%', margin: 'auto', borderRadius: '10px' }}
                            src={profile.attendee.profile_pic}></Card.Img>
                    </Col>
                </Row>

                <Row>
                    <Col className={'redes'}>
                        <div className={'whatsapp'}>
                            <Whatsapp />
                        </div>
                        <a href={`https://wa.me/${profile.attendee.phone.replace(/[+\s]/g, '')}`} target="_blank"><span>{profile.attendee.phone}</span></a>
                    </Col>
                </Row>
                <Row>
                    <Col className={'redes '}>

                        <div className={'instagram'}>
                            <Instagram />
                        </div><a href={`https://www.instagram.com/${profile.attendee.instagram}`} target="_blank"><span>@{profile.attendee.instagram}</span></a>
                    </Col>
                </Row>
                <Row className="mt-4 profile-badges">

                    {profile.badges && profile.badges.map(badge => (
                        <Col className={'profile-badge'}>
                            <img src={badge.image} alt={badge.name} width={35} />

                        </Col>

                    ))}
                </Row>
                {me && <Row className={'mt-4'}><Col><Button onClick={handleOpen} className={'btn-mao-1'}>Mostrar QR</Button></Col></Row>}
            </Col>
        </Row>

    </Container>) : (<NotFound />)


}