import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {Link, useLocation} from "react-router-dom";
import {Accordion} from "react-bootstrap";

export default function CardList(props) {

    const {state} = useLocation();
    const cards = state ? state.cards : null;
    const {captured} = props;
    console.log("Captured", captured)

    const groupedCards = cards.reduce((acc, card) => {
        (acc[card.card.category.name] = acc[card.card.category.name] || []).push(card);
        return acc;
    }, {})
    console.log("Grouped", groupedCards)

    return (
        <Container>
            <Row>
                <Col>
                    <h1>{captured?'Captured Cards':'Unsolved Cards'}</h1>

                </Col>
            </Row>
            <Row>
                {captured ? (
                    <Accordion defaultActiveKey="0"> {Object.keys(groupedCards).map((card, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>

                        <Accordion.Header>{card} {groupedCards[card].length}/{groupedCards[card][0].card.category.question_in_category}</Accordion.Header>
                        <Accordion.Body>
                            <Row>

                                {groupedCards[card].map((card, index) => (
                                    <Col>
                                    <Card key={`card-${index}`}>
                                        <Card.Img variant="top" src={card.card.category.image} />
                                    </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
                    </Accordion>) : cards.map((card, index) => (
                    <Col sm={4} xs={4} key={`col-${index}`}>
                        <Card>
                            <Link to={`/sakura/card/${card.card.slug}`} state={{card: card}}><Card.Img variant="top" src={card.card.category.image} /></Link>
                        </Card>
                    </Col>
                    ))}
            </Row>
        </Container>
    )
}