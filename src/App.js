import logo from './img/logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import QrReader from './components/qr-scanner/qrScanner.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a>
          Ma0 is cooking something here
        </a>
        <QrReader />
      </header>

    </div>
  );
}

export default App;
