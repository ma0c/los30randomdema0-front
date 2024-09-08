import QrReader from "../../components/qr-scanner/qrScanner";
import "../../components/qr-scanner/qrStyles.css";
import {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import loading from "../../img/loading_sakura.webp";
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";

const SAKURA_ADD_PATH = `sakura/capture-card/`
const SAKURA_GET_PATH = `sakura/card`

export default function SakuraAdd() {
    const [scannedResult, setScannedResult] = useState("");
    const [connectionErrors, setConnectionErrors] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        navigate('/sakura');
    }
    const navigate = useNavigate();
    const callback = (result) => {
        console.log('Success read QR:', result);
        setScannedResult(result?.data);
    }


    useEffect(() => {
        if (!scannedResult) return;
        fetch(`${process.env.REACT_APP_BASE_URL}/${SAKURA_GET_PATH}/${scannedResult}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + (localStorage.getItem('token') || 'asd')
            },
            method: 'GET',
        }).then(function (response) {
            if (response.ok) {
                response.json().then(data => {
                    console.log(data)
                    navigate(`/sakura/card/${data.slug}`, {state: {card: {card: data, solved: false, isFirstTime: true}}})
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