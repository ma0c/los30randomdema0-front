import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ButtonNavbar from "../../components/bottomNavbar";
import TopNavbar from "../../components/topNavbar";

const INSTAGRAM_PATH = `instagram/photos`
export default function Instagram() {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(
            `${process.env.REACT_APP_BASE_URL}/${INSTAGRAM_PATH}/`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Token ' + localStorage.getItem('token')
                }
            }
        )
            .then(response => response.json())
            .then(data => { setPhotos(data); console.log(data) })
            .catch(error => {
                console.log('Error:', error);
                console.log('Not FOUND');
                setPhotos([])
            });
    }
        , []);



    return (
        <Container className={"p-4"} id="pokedex">
            <TopNavbar/>
            <Row className="mb-4 margin-top-header">
            </Row>
            <Row className="align-items-center justify-content-between">
                {photos.map((photo, index) => (
                    <Col sm={12} xs={12} key={`col-${index}`} className="pokedex-card justify-content-center">
                        <Card>
                            <Card.Img src={photo.image} />
                            <Card.Body>
                                <Card.Text>{photo.description}</Card.Text>
                            </Card.Body>

                        </Card>
                    </Col>
                ))}
            </Row>
            <ButtonNavbar/>
        </Container>
    )
}