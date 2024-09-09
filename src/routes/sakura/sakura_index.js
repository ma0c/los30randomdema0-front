import {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import ButtonNavbar from "../../components/bottomNavbar";

const CAPTURED_CARDS_PATH = `sakura/captured-cards`
export default function SakuraIndex() {

    const [cards, setCards] = useState([]);
    const [solvedCards, setSolvedCards] = useState([]);
    const [unsolvedCards, setUnsolvedCards] = useState([]);

    useEffect(() => {
        fetch(
            `${process.env.REACT_APP_BASE_URL}/${CAPTURED_CARDS_PATH}/`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Token ' + localStorage.getItem('token')
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

    useEffect(() => {
        setSolvedCards(cards.filter(card => card.solved));
        setUnsolvedCards(cards.filter(card => !card.solved));
    }, [cards]);

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Captured Cards {solvedCards.length}/100</h1>
                    <Link to="captured" state={{cards: solvedCards}}><Button variant="primary">Captured Cards </Button></Link>
                </Col>
                <Col>
                    <h1>Unsolved Cards {unsolvedCards.length}</h1>
                    <Link to="unsolved" state={{cards: unsolvedCards}} ><Button variant="primary">Unsolved Cards </Button></Link>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Link to="add" ><Button variant="primary">Capture Card</Button></Link>
                </Col>
            </Row>
            <ButtonNavbar/>
        </Container>
    )
}