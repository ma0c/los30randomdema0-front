import QrReader from "../../components/qr-scanner/qrScanner";
import "../../components/qr-scanner/qrStyles.css";
import {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import loading from "../../img/loading_pikachu.gif";
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";

const POKEDEX_ADD_PATH = `pokedex/connection`

export default function PokedexAdd() {
    const [scannedResult, setScannedResult] = useState("");
    const [connectionErrors, setConnectionErrors] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        navigate('/pokedex');
    }
    const navigate = useNavigate();
    const callback = (result) => {
        console.log('Success read QR:', result);
        setScannedResult(result?.data);
    }


    useEffect(() => {
        if (!scannedResult) return;
        fetch(`${process.env.REACT_APP_BASE_URL}/${POKEDEX_ADD_PATH}/`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem('token')
            },
            method: 'POST',
            body: JSON.stringify({
                followed: scannedResult
            })
        }).then(function (response) {
            if (response.ok) {
                response.json().then(data => {
                    console.log(data)
                    navigate(`/pokedex`)
                })
            }
            else {
                console.log('Error:', response);
                console.log('Error:', response.body);
                console.log('Not FOUND');
                response.text().then(text => {
                    console.log(text);
                    setConnectionErrors(text);
                    setShow(true);
                })
                setScannedResult(null);
            }

        }).catch(function (error) {
            // handle error
            console.log(error);
        }).finally(function () {
            // scanner.current?.stop();
        });
    }, [scannedResult])

    return (
        <Container>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Algo salió mal :(</Modal.Title>
            </Modal.Header>
            <Modal.Body>{connectionErrors}</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
            <div className="qr-reader">
                <QrReader callback={callback}/>
                {scannedResult && (
                <div className="qr-result">
                    <p style={{
                        display: "inline-block",
                        color: "white",
                    }}>
                        Scanned Result: {scannedResult}
                    </p>
                    <img style={{
                        position: "relative",
                        width: "100%"
                    }} src={loading} alt="Ma0"/>
                </div>

            )}
            </div>
        </Container>
)
}