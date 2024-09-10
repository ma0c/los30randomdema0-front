import {Navbar} from "react-bootstrap";

import favicon from "../img/favicon.ico";
import Container from "react-bootstrap/Container";

export default function TopNavbar() {
    return (
        <div className="fixed-top " sticky="top">
            <Navbar bg="dark" >
                <Container className="justify-content-center">
                    <Navbar.Brand>
                        <img src={favicon} alt="los30randomdema0" width={50}/>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}