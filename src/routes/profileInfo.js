import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ProfileInfo() {
  return (
    <Container>
      <div style={{display: 'flex', }}>
        <Link to='..'>Back</Link>
      </div>
      <Row>
        <Col>
          <Card className={'mt-5'}>
            <Card.Img style={{width: '50%', margin: 'auto'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/240px-User-avatar.svg.png'></Card.Img>
            <Card.Body className={'text-center'}>
              <Row>
                <Col>
                  Name
                </Col>
              </Row>
              <Row>
                <Col>
                  Phone
                </Col>
                <Col>
                  Plus
                </Col>
              <Row>
              </Row>
                <Col>
                  Alcohol
                </Col>
                <Col>
                  Weed
                </Col>
              </Row>
              <Row>
                <Link to="confirm"><Button>Confirm</Button></Link>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfileInfo;
