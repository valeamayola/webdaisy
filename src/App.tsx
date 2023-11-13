import '../src/App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { Login } from './components/Login/Login'; 
import { Home } from './components/Home/Home';
import { Welcome } from './components/Welcome/Welcome';
import { Register } from './components/Register/Register';

export function App () {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={ <Welcome />} />
      <Route path='/login' element={ <Login />} />
      <Route path='/register' element={ <Register />} />
      <Route path='/home' element={ <Home />} />
      </Routes>
      </BrowserRouter>
  );
};
