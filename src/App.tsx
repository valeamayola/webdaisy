import '../src/App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { Login } from './components/Login/Login'; 
import { Home } from './components/Home/Home';
import { Welcome } from './components/Welcome/Welcome';
import { Register } from './components/Register/Register';
import { Profile } from './components/Profile/Profile';
import { Report } from './components/Report/Report';
import { Info } from './components/Info/Info';

export function App () {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={ <Welcome />} />
      <Route path='/login' element={ <Login />} />
      <Route path='/register' element={ <Register />} />
      <Route path='/home' element={ <Home />} />
      <Route path='/profile' element={ <Profile />} />
      <Route path='/report' element={ <Report />} />
      <Route path='/info' element={ <Info />} />
      </Routes>
      </BrowserRouter>
  );
};
