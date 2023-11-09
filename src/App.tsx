import '../src/App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { Login } from './components/Login/Login'; 
import { Home } from './components/Home/Home';


export function App () {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={ <Login />} />
      <Route path='/home' Component={Home} />
      </Routes>
      </BrowserRouter>
  );
};
