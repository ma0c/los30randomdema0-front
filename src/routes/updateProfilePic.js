import React from "react";
import {Controller, useForm} from "react-hook-form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {useLocation, useNavigate} from "react-router-dom";
import {Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import {Input} from "../styles";

const UPDATE_PROFILE_PIC_PATH = `registration/update_profile_pic`


const Field = ({ label, htmlFor, error, children }) => {
  const id = htmlFor || getChildId(children);

  return (
    <div className="form-field">
      {label && <label htmlFor={id}>{label}</label>}
      {children}
      {error && (
        <div role={"alert"} className="error">
          {error}
        </div>
      )}
    </div>
  );
};

function getChildId(children) {
  const child = React.Children.only(children);

  if ("id" in child?.props) {
    return child.props.id;
  }
}
export default function UpdateProfilePic() {

    const {state} = useLocation();
    const profile = state.profile;
  const {
      handleSubmit,
      formState: { errors },
      control
    } = useForm();
    const [registrationErrors, setRegistrationErrors] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const navigate = useNavigate();
   const onSubmit = (data) => {
       console.log("Sending data");
       console.log(data);
       console.log(data.profile_pic);
        console.log(data.profile_pic[0]);
        const formData = new FormData();

        formData.append("profile_pic", data.profile_pic);
        fetch(
            `${process.env.REACT_APP_BASE_URL}/${UPDATE_PROFILE_PIC_PATH}/${profile.slug}/`,
            {
                headers: {
                    'Accept': 'application/json',
                },
                method: 'PUT',
                body: formData,
            }
        )
        .then(response => {
                if (response.ok) {
                    response.json().then(data => {
                        console.log(data)
                        navigate(`/profile/${profile.slug}`)
                    })
                }
                else {
                    console.log('Error:', response);
                    console.log('Error:', response.body);
                    console.log('Not FOUND');
                    response.text().then(text => {
                        setRegistrationErrors(text);
                        setShow(true)
                    })
                }
            }
        )
        .catch(error => {
            console.log('Error:', error);
            console.log('Not FOUND');
            setRegistrationErrors(error);
            setShow(true)

        });
   }

  return (
    <Container className={"p-4"}>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Algo salió mal :(</Modal.Title>
            </Modal.Header>
            <Modal.Body>{registrationErrors}</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col>
                  <Card className={'mt-5'}>
                      <Card.Img style={{width: '50%', margin: 'auto'}}
                                src={profile.profile_pic || "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/240px-User-avatar.svg.png"}></Card.Img>
                      <Card.Body className={'text-center'}>
                          <Row>
                              <Col>
                                  {profile.name}
                              </Col>
                          </Row>
                            <Row>
                                <Col xs={4} s={4} md={4}>
                                    <Field label="Picture" error={errors.picture}>
                                      <Controller
                                        control={control}
                                        name={"profile_pic"}
                                        rules={{ required: "Recipe picture is required" }}
                                        render={({ field: { value, onChange, ...field } }) => {
                                          return (
                                            <Input
                                              {...field}
                                              value={value?.fileName}
                                              onChange={(event) => {
                                                onChange(event.target.files[0]);
                                              }}
                                              type="file"
                                              id="profile_pic"
                                            />
                                          );
                                        }}
                                      />
                                    </Field>
                                </Col>
                            </Row>
                      </Card.Body>
                  </Card>
              </Col>
            </Row>
            <Button type="submit" className={"btn-mao-1 mt-5"}>
                  Guardar
                </Button>
        </Form>
    </Container>
  );
}