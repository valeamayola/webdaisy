import './App.css';
import { BrowserRouter } from "react-router-dom";
//import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';

export function App() {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
}