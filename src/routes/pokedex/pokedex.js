import {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import favicon from "../../img/favicon.ico";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import ButtonNavbar from "../../components/bottomNavbar";

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
        .then(data => {setProfiles(data); console.log(data)})
        .catch(error => {
            console.log('Error:', error);
            console.log('Not FOUND');
            setProfiles([])
        });
    }
    , []);

    return (
        <Container>
            <Row>
                {profiles.map((profile, index) => (
                    <Col sm={4} xs={4} key={`col-${index}`}>
                        <Card>
                            {profile.attendee ? (
                                <Link to={`profile/${profile.attendee.slug}`} state={{profile: profile}}><Card.Img variant="top" src={profile.attendee.profile_pic} /></Link>
                            ) : (
                                <Card.Img variant="top" src={favicon} />
                            )}

                        </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col>
                    <Link to="add" ><Button variant="primary">Scan</Button></Link>
                </Col>
            </Row>
            <ButtonNavbar/>
        </Container>
    )
}