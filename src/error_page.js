import { useRouteError } from "react-router-dom";
import ohno from "./img/ohno.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center align-items-center text-center" id="error-page">
        <div>
      <img
        src={ohno}
        alt="Oh no!"
        width={150}
        class="mb-3"
      />
      <h1>Oops!</h1>
      <p>Mao is sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>

        </Col>
      </Row>
    </Container>
    
  );
}