import '../src/App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { Login } from './components/Login/Login';


export function App () {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' Component={Login} />
      </Routes>
      </BrowserRouter>
  );
};
