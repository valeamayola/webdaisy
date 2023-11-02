import React from "react";

interface MenuProps {
    items: Array<{
      key: string;
      href: string;
      children: React.ReactNode;
    }>;
  }
  
  const Menu: React.FC<MenuProps> = ({ items }) => {
    return (
      <ul className="menu menu-horizontal justify-center bg-base-200 fixed bottom-0 left-0 right-0 width-full flex items-center">
        {items.map((item) => (
          <li key={item.key}>
            <span className="text">
            <a href={item.href}>{item.children}</a>
            </span>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Menu;
