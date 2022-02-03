import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainScreen/MainContainer';

function App() {
  return (
    <div>
      <header className="header-content">
        <div className="header-overlay content-wrapper">
          <img src={logo} className="header-logo" alt="logo" />
          <nav className="main_nav">
            <ul>
              <li><a href="#">Main</a></li>
              <li><a href="#">Balance</a></li>
              <li><a href="#">Budget</a></li>
              <li><a href="#">Market</a></li>
              <li><a href="#">Nft</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <MainContainer />

    </div>
  );
}

export default App;
