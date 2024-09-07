import {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import favicon from "../../img/favicon.ico";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const CAPTURED_CARDS_PATH = `sakura/captured-cards`
export default function SakuraIndex() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch(
            `${process.env.REACT_APP_BASE_URL}/${CAPTURED_CARDS_PATH}/`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Token ' + (localStorage.getItem('token') || 'asd')
                }
            }
        )
        .then(response => response.json())
        .then(data => {setCards(data); console.log(data)})
        .catch(error => {
            console.log('Error:', error);
            console.log('Not FOUND');
            setCards([])
        });
    }
    , []);

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Captured Cards {cards.length}/100</h1>

                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="add" ><Button variant="primary">Capture Card</Button></Link>
                </Col>
            </Row>
        </Container>
    )
}