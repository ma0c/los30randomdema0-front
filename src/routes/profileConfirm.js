import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ProfileConfirm() {
  return (
    <Container>
      <div style={{ display: 'flex', }}>
        <Link to='..' relative="path">Back</Link>
      </div>
      <Row className='text-center'>
        <Col>
          <Button>Confirm</Button>
        </Col>
        <Col>
          <Button>Deny</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfileConfirm;
