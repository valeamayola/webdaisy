import { NavBar } from "./NavBar";
import { Alert } from "./Alert";
import { Carousel } from "./Carousel";
import { Menu } from "./Menu/Menu";
import { menuItems } from "./Menu/menuItems";

export function Home () {
  return (
    <div>
      <NavBar />
      <Alert />
      <Carousel />
      <Menu items={menuItems}/>
    </div>
  );
};

