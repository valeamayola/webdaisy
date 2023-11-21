import { NavBar } from "./NavBar";
import { Menu } from "./Menu/Menu";
import { menuItems } from "./Menu/menuItems";

export function Home () {
  return (
    <div>
      <NavBar />
      <Menu items={menuItems}/>
    </div>
  );
};

