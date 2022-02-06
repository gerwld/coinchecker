import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './reset.css';
import './App.css';
import MainContainer from './components/MainScreen/MainContainer';
import store from './redux/redux-store';
import DashContainer from './components/Dashboard/DashContainer';
import LoginContainer from './components/Login/LoginContainer';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<MainContainer />} />
      <Route path="dashboard/*" element={<DashContainer />} />
      <Route path="login/*" element={<LoginContainer />} />
      </Routes>
    </div>
  );
}


const AppContainer = App;

let CryptoChecker = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default CryptoChecker;
