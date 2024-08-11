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
    <Container className={"p-4"}>
      
      <div className="logo">
            <img src="../cabecera.png" />
          </div>
      <Row className={"justify-content-center"}>
        <Col sm={8}>
          <Card className={'mt-2 px-5 py-3'}>
            <Card.Body className={'text-center'}>
              <Card.Title>
                <h1 className="form-title">Register</h1>
              </Card.Title>
              <Form>

                <Row>
                  <Col sm={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className={"form-label"}>Name</Form.Label>
                      <Form.Control className={"form-control"} type="text" required/>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className={"form-label"}>Phone</Form.Label>
                      <Form.Control className={"form-control"} type="number" required/>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className={"form-label"}>Plus one</Form.Label>
                      <Form.Control className={"form-control"} type="email" required/>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className={"form-label"}>Email</Form.Label>
                      <Form.Control className={"form-control"} type="email" required/>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className={"form-label"}>Alcohol</Form.Label>
                      <Form.Select className={"form-select"} aria-label="Default select example" required>
                        <option disabled>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className={"form-label"}>Weed</Form.Label>
                      <Form.Select className={"form-select"} aria-label="Default select example" required>
                        <option disabled>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Button as="a" className={"btn-mao-1 mt-5"}>
                  Enviar registro
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    /*<div>
    <div className="container p-4">
        <div className="logo">
            <img src="../cabecera.png" />
        </div>
        <h1 className="form-title">Register</h1>
        <div className="row justify-content-center">
            <div className="col-sm-8">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-sm-6 mb-3">
                            <label className="form-label" htmlFor="name">Name:</label>
                            <input className="form-control" {...register("name")} required/>
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label className="form-label" htmlFor="phone">Phone:</label>
                            <input className="form-control" {...register("phone")} type="number" required/>
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label className="form-label" htmlFor="plus_one">Plus:</label>
                            <input className="form-control" {...register("plus_one")} required/>
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label className="form-label" htmlFor="email">Email:</label>
                            <input className="form-control" {...register("email")} type="email" aria-required />
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label className="form-label" htmlFor="alcohol">Alcohol:</label>
                            <select className="form-select" {...register("alcohol")} required >
                                <option value="lots">Lots</option>
                                <option value="not_a_lot">Not a lot</option>
                                <option value="none">I'm sober</option>
                            </select>
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label className="form-label" htmlFor="weed">Weed:</label>
                            <select className="form-select" {...register("weed")} required>

                                <option value="lots">Lots</option>
                                <option value="not_a_lot">Not a lot</option>
                                <option value="none">I'm sober</option>
                            </select>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center py-4">  
                        <button className="btn btn-mao-1 btn-lg" type="submit">Enviar registro</button>
                    </div>
                </Form>
            </div>

        <p> Name: {name} </p>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className={"form-label"}>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className={"form-label"}>Example textarea</Form.Label>
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
);
        </div>

    </div>
*/
  );
}