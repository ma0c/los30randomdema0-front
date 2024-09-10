import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {Link, useLocation} from "react-router-dom";
import {Accordion} from "react-bootstrap";
import SakuraImageCard from "./sakura_image_card";
import ButtonNavbar from "../../components/bottomNavbar";
import TopNavbar from "../../components/topNavbar";

export default function CardList(props) {

    const {state} = useLocation();
    const cards = state ? state.cards : null;
    const {captured} = props;
    console.log("Captured", captured)



    return (
        <Container fluid>
            <TopNavbar/>
            <Row className="margin-top-header">
                <Col>
                    <h1>{captured?'Captured Cards':'Unsolved Cards'}</h1>

                </Col>
            </Row>
            <Row>
                {cards.map((card, index) => (
                    <Col sm={4} xs={4} key={`col-${index}`}>
                        <Card>
                            <Link to={`/sakura/card/${card.card.slug}`} state={{card: card}}><Card.Img variant="top" src={card.card.category.image} /></Link>
                        </Card>
                    </Col>
                    ))}
            </Row>
            <ButtonNavbar/>
        </Container>
    )
}