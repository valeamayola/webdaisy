import React from "react";

interface MenuProps {
    items: Array<{
      key: string;
      href: string;
      children: React.ReactNode;
      hasNotification?: boolean;
      notificationCount?: number;
      disabled?: boolean;
    }>;
  }
  
  const Menu: React.FC<MenuProps> = ({ items }) => {
    return (
      <ul className="btm-nav justify-center bg-base-200 fixed bottom-0 left-0 right-0 width-full h-fit p-2 flex items-center">
        {items.map((item) => (
          <li key={item.key}>
            <span className="text">
            <a href={item.href} onClick={() => {
              if (item.disabled) {
                event?.preventDefault();
                const alert = document.createElement("div");
                alert.className = "alert alert-info fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
                alert.innerHTML = `
                    <span>Aún no está disponible</span>
                `;

                document.body.appendChild(alert);

                setTimeout(() => {
                  alert.remove();
                }, 5000);
              }
            }}>
              {item.children}
            </a>
            <div className="indicator">
            {(item.hasNotification && item.notificationCount) && (
              <span className="badge badge-xs badge-secondary rounded-box indicator-item" style={{ fontSize: "12px", top: "-50px",
              right: "-30px",
              transform: "translate(-20px, -20px)",}}>
                {item.notificationCount}
              </span>
            )}
            </div>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Menu;