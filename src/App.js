import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './reset.css';
import './App.css';
import MainContainer from './components/MainScreen/MainContainer';
import store from './redux/redux-store';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/"exact element={<MainContainer />} />
      <Route path="dashboard/*" element={<Dashboard />} />
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
