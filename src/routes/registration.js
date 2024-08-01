import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


export default function Registration() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const name = watch("name")
    const onSubmit = data => console.log(data);
    return (
        <Container>
          <Row>
            <Col>
              <Card className={'mt-5'}>
                <Card.Body className={'text-center'}>
                  <Card.Title>Register</Card.Title>
                  <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Plus</Form.Label>
                    <Form.Control type="email"/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Alcohol</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Weed</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>

                  <Button as="a" variant="primary">
                    Save
                  </Button>
                </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        /*<div>

            <h1>Register</h1>

            <p> Name: {name} </p>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name:</label>
        <input {...register("name")} />
        <label htmlFor="phone">Phone:</label>
        <input {...register("phone")} />
        <label htmlFor="plus_one">Plus:</label>
        <input {...register("plus_one")} />
        <label htmlFor="alcohol">Alcohol:</label>
        <select {...register("alcohol")} >
            <option value="lots">Lots</option>
            <option value="not_a_lot">Not a lot</option>
            <option value="none">I'm sober</option>
        </select>
        <label htmlFor="weed">Weed:</label>
            <select {...register("weed")} >

                <option value="lots">Lots</option>
                <option value="not_a_lot">Not a lot</option>
                <option value="none">I'm sober</option>
            </select>
            <Button as="a" variant="primary">
                Button as link
            </Button>
            <Button as="a" variant="success">
                Button as link
            </Button>
            <button type="submit">Register</button>
        </Form>
        </div>
*/    );
}