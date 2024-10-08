import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import ButtonNavbar from "../../components/bottomNavbar";
import TopNavbar from "../../components/topNavbar";
import { Accordion } from "react-bootstrap";
import SakuraImageCard from "./sakura_image_card";
import sakuraResponse from "../../mocked_responses/sakura.json";

// const CAPTURED_CARDS_PATH = `sakura/captured-cards`
export default function SakuraIndex() {

    const [cards, setCards] = useState([]);
    const [solvedCards, setSolvedCards] = useState([]);
    const [unsolvedCards, setUnsolvedCards] = useState([]);

    useEffect(() => {
        // fetch(
        //     `${process.env.REACT_APP_BASE_URL}/${CAPTURED_CARDS_PATH}/`,
        //     {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Accept': 'application/json',
        //             'Authorization': 'Token ' + localStorage.getItem('token')
        //         }
        //     }
        // )
        //     .then(response => response.json())
        //     .then(data => { setCards(data); console.log(data) })
        //     .catch(error => {
        //         console.log('Error:', error);
        //         console.log('Not FOUND');
        //         setCards([])
        //     });
        setCards(sakuraResponse);
    }
        , []);

    useEffect(() => {
        const solvedCards = cards.filter(card => card.solved);
        const groupedCards = solvedCards.reduce((acc, card) => {
            (acc[card.card.category.name] = acc[card.card.category.name] || []).push(card);
            return acc;
        }, {})
        setSolvedCards(groupedCards);
        setUnsolvedCards(cards.filter(card => !card.solved));
    }, [cards]);

    return (
        <Container>
            <TopNavbar />
            <Row className="mb-4 margin-top-header">
                <Col className="justify-content-between d-flex">
                    {/*<Link to="add" >*/}
                        <Button className="btn-mao-2" size="lg" disabled>Escanear QR</Button>
                    {/*</Link>*/}
                    {/*<Link to="unsolved" state={{ cards: unsolvedCards }} >*/}
                        <Button className="btn-mao-2" size="lg" disabled>Cartas no resueltas  <Badge pill className="pill-naranja">
                    {unsolvedCards.length}
                    </Badge> </Button>
                    {/*</Link>*/}
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <Row>
                        <Col className="justify-content-between d-flex">
                        <h1 className="text-naranja">Cartas Capturadas </h1>
                        <h1 className="text-azul">{cards.length - unsolvedCards.length}/100</h1>
                        </Col>
                    </Row>
                    <Accordion defaultActiveKey="0"> {Object.keys(solvedCards).map((card, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index}>

                            <Accordion.Header>{card} {solvedCards[card].length}/{solvedCards[card][0].card.category.question_in_category}</Accordion.Header>
                            <Accordion.Body>
                                <Row>

                                    {solvedCards[card].map((card, index) => (
                                        <Col>
                                            <SakuraImageCard src={card.card.category.front_image} alt={card.card.category.name} text={card.card.question} color={card.card.category.is_special ? "white" : "black"} key={`card-${index}`} />

                                        </Col>
                                    ))}
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                    </Accordion>
                </Col>

            </Row>


            <ButtonNavbar />
        </Container>
    )
}