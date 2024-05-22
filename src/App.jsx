import 'normalize.css';
import './index.css';

import ReactModal from 'react-modal';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import BasePage from './pages/BasePage/BasePage';
import CadastroPage from './pages/CadastroPage/CadastroPage';

ReactModal.setAppElement('#root');

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<BasePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/cadastro' element={<CadastroPage />} />
            <Route path='/home' element={<HomePage />} />
          </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App;
