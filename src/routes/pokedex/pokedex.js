import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import favicon from "../../img/favicon.ico";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import ButtonNavbar from "../../components/bottomNavbar";
import TopNavbar from "../../components/topNavbar";

const POKEDEX_PATH = `pokedex/pokedex`
export default function Pokedex() {

    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        fetch(
            `${process.env.REACT_APP_BASE_URL}/${POKEDEX_PATH}/`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Token ' + localStorage.getItem('token')
                }
            }
        )
            .then(response => response.json())
            .then(data => { setProfiles(data); console.log(data) })
            .catch(error => {
                console.log('Error:', error);
                console.log('Not FOUND');
                setProfiles([])
            });
    }
        , []);

    return (
        <Container className={"p-4"} id="pokedex">
            <TopNavbar/>
            <Row className="mb-4 margin-top-header">
                <Col className="justify-content-center d-flex">
                    <Link to="add" ><Button className="btn-mao-2" size="lg">Escanear QR</Button></Link>
                </Col>
            </Row>
            <Row className="align-items-center justify-content-between">
                {profiles.map((profile, index) => (
                    <Col sm={4} xs={6} key={`col-${index}`} className="pokedex-card justify-content-center">

                        <Card>
                            {profile.attendee ? (
                                <Link to={`profile/${profile.attendee.slug}`} state={{ profile: profile }}>
                                    <Card.Img src={profile.attendee.profile_pic} />
                                </Link>
                            ) : (
                                <Card.Img src={favicon} />
                            )}

                        </Card>
                    </Col>
                ))}
            </Row>
            <ButtonNavbar/>
        </Container>
    )
}