import './App.css';
import NavBar from './components/NavBar/NavBar';
import Carousel from './components/Carousel';
import Menu from './components/Menu/Menu';
import Alert from './components/Alert';
import { menuItems } from "./components/Menu/menuItems";

function App() {
  return (
    <div className="h-full">
    <NavBar></NavBar>
    <Alert></Alert>
    <Carousel></Carousel>
    <Menu items={menuItems}></Menu>
    </div>
  );
}

export default App;