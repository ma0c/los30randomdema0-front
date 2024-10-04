import {Navbar} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import {Diagram2Fill, Instagram, PersonCircle, TypeItalic} from "react-bootstrap-icons";

export default function ButtonNavbar() {
    return (
        <div className="fixed-bottom" sticky="bottom">
            <Navbar bg="dark" >
                <Container>
                    <Nav.Link href="/pokedex"><Diagram2Fill color="white"/> </Nav.Link>
                    <Nav.Link href="/sakura"><TypeItalic color="white"/></Nav.Link>
                    <Nav.Link href="/fotos"><Instagram color="white"/></Nav.Link>
                    {/*<Nav.Link href="/me"><PersonCircle color="white"/></Nav.Link>*/}
                </Container>
            </Navbar>
        </div>
    )
}