import { useEffect, useRef, useState } from "react";

import QrScanner from "qr-scanner";
import scan from "../../img/scan.png";
import logo from "../../img/logo.png";





const QrReader = (props) => {
    // Props
    const { callback } = props;
    // QR States
    const scanner = useRef(null);
    const videoEl = useRef(null);
    const qrBoxEl = useRef(null);
    const [qrOn, setQrOn] = useState(true);
    const [cameraAccessible, setCameraAccessible] = useState(true);



    // Result
    const [scannedResult, setScannedResult] = useState("");

    // Success
    const onScanSuccess = (result) => {
        console.log('Success read QR:', result);
        setScannedResult(result?.data);
        setQrOn(false);
        callback(result);
        scanner.current.stop();
    };

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
                .then(() => setQrOn(true) && setCameraAccessible(true))
                .catch((err) => {
                    if (err) setCameraAccessible(false);
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
    // useEffect(() => {
    //     if (!qrOn) {}
    // }, [qrOn]);

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
        </div>
    );
};

export default QrReader;
