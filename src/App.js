import logo from './img/logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonNavbar from "./components/bottomNavbar";

function App() {
    const token = localStorage.getItem('token');
    console.log(token)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Ma0 is cooking something here
      </header>
        {token && <ButtonNavbar/>}
    </div>
  );
}

export default App;
