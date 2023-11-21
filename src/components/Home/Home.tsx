import { NavBar } from "./NavBar";
import { Menu } from "./Menu/Menu";
import { menuItems } from "./Menu/menuItems";
import { useNavigate } from "react-router-dom";

export function Home () {
  const navigate = useNavigate ();
  return (
    <div>
      <NavBar />
      <button className="btn" onClick={() => navigate('/markers')}>MARCADOR EJEMPLO</button>
      <Menu items={menuItems}/>
    </div>
  );
};

