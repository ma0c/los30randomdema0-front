import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Whatsapp, Instagram, Clock, GeoAlt} from "react-bootstrap-icons";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { Link, useParams } from 'react-router-dom';
import NotFound from "../../NotFound";

const REGISTRATION_PATH = `registration/registration`

const Invitation = () => {
    const { slug } = useParams();

    const [profile, setProfile] = useState(null);

    const [show, setShow] = useState(true);




    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}/${REGISTRATION_PATH}/${slug}/`)
        .then(response => response.json())
        .then(data => {setProfile(data); console.log(data)})
        .catch(error => {
            console.log('Error:', error);
            console.log('Not FOUND');
            setProfile(null)
        });
    }
    , [slug]);

    const readableDate = (date) => {
        const dateObj = new Date(date);
        return dateObj.toLocaleString(undefined, {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'});
    }

  return profile ? ( <Container>
      <Alert variant={'success'} className={'mt-5'} onClose={() => setShow(false)} dismissible>
            Tu foto va a ser usada para varias actividades, si no te gusta la que escogí, por favor actualizala <Link to="profile-pic" state={{profile: profile}}>aquí</Link>
      </Alert>
          <Row>
              <Col>
                  <Card className={'mt-5'}>
                      <Card.Header>
                          Tu invitación está confirmada
                      </Card.Header>
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
                                  <Whatsapp />{profile.phone}
                              </Col>
                          </Row>
                          <Row>
                              <Col>
                                  <Instagram />{profile.instagram}
                              </Col>
                          </Row>
                          <Row>
                            <Col>
                                <Clock />{readableDate(profile.entry_hour)}
                            </Col>
                          </Row>
                          <Row>
                              <Col>
                                  <a href="https://maps.app.goo.gl/Dbkrb2aBrCmGmWvr7">
                                    <GeoAlt/> Finca el Oasis
                                  </a>
                              </Col>
                          </Row>
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
          </Container>) : ( <NotFound />)

}

export default Invitation;
