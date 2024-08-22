import {Link, useLocation, useParams} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {Clock, GeoAlt, Instagram, Whatsapp} from "react-bootstrap-icons";
import NotFound from "../NotFound";
import {useEffect, useState} from "react";


const POKEDEX_PROFILE_PATH = `pokedex/profile`

export default function PokedexProfile() {
    const { slug } = useParams();
    const {state} = useLocation();
    const givenProfile = state.profile;
    const [profile, setProfile] = useState(givenProfile);

    useEffect(() => {
        fetch(
            `${process.env.REACT_APP_BASE_URL}/${POKEDEX_PROFILE_PATH}/${slug}/`,
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
    , []);

    return profile ? ( <Container>
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
          </Container>) : ( <NotFound />)


}