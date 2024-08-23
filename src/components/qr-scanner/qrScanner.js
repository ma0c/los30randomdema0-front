import { useEffect, useRef, useState } from "react";
import "./qrStyles.css";
import QrScanner from "qr-scanner";
import scan from "../../img/scan.png";
import logo from "../../img/logo.png";
import loading from "../../img/loading.gif";


const POKEMON_ADD_PATH = `pokedex/connection`

const QrReader = () => {
    // QR States
    const scanner = useRef(null);
    const videoEl = useRef(null);
    const qrBoxEl = useRef(null);
    const [qrOn, setQrOn] = useState(true);

    // Result
    const [scannedResult, setScannedResult] = useState("");

    // Success
    const onScanSuccess = (result) => {
        console.log('Success read QR:', result);
        setScannedResult(result?.data);
    };

    useEffect(() => {
        if (!scannedResult) return;
        fetch(`${process.env.REACT_APP_BASE_URL}/${POKEMON_ADD_PATH}/`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + (localStorage.getItem('token') || 'asd')
            },
            method: 'POST',
            body: JSON.stringify({
                followed: scannedResult
            })
        }).then(function (response) {
            // handle success
            console.log('Success axios:', response);
        }).catch(function (error) {
            // handle error
            console.log(error);
        }).finally(function () {
            scanner.current?.stop();
        });
    }, [scannedResult])

    // Fail
    const onScanFail = (err) => {
        console.log('Error:', err);
    };

    useEffect(() => {
        if (videoEl.current && !scanner.current) {
            // Instantiate the QR Scanner
            scanner.current = new QrScanner(videoEl.current, onScanSuccess, {
                onDecodeError: onScanFail,
                preferredCamera: "environment",
                highlightScanRegion: true,
                highlightCodeOutline: true,
                overlay: qrBoxEl.current || undefined,
            });

            // Start QR Scanner
            scanner.current
                .start()
                .then(() => setQrOn(true))
                .catch((err) => {
                    if (err) setQrOn(false);
                });
        }

        // Clean up on unmount
        return () => {
            if (!videoEl.current) {
                scanner.current?.stop();
            }
        };
    }, []);

    // Show alert if camera is blocked or not accessible
    useEffect(() => {
        if (!qrOn)
            alert(
                "Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload."
            );
    }, [qrOn]);

    return (
        <div className="qr-reader">
            <video ref={videoEl}></video>
            <div ref={qrBoxEl} className="qr-box">
                {!videoEl.current && (
                    <div className="qr-container">
                        <img
                            src={logo}
                            alt="logo"
                            width={100}
                            height={100}
                            className="qr-logo"
                        />
                        <img
                            src={scan}
                            alt="Qr Frame"
                            width={256}
                            height={256}
                            className="qr-border"
                        />
                    </div>
                )}

            </div>

            {/* Show Data Result if scan is success */}
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
    );
};

export default QrReader;
