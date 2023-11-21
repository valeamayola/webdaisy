import { MenuProps } from './Menu.types';

  export function Menu( props: MenuProps ) : JSX.Element {
    return (
      <ul className="btm-nav justify-center bg-base-200 fixed bottom-0 left-0 right-0 width-full h-fit p-2 flex items-center">
        {props.items.map((item) => (
          <li key={item.key}>
            <a href={item.href} className='h-12' onClick={(event) => {
              if (item.disabled) {
                event.preventDefault();
                const alert = document.createElement("div");
                alert.className = "alert alert-info fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
                alert.innerHTML = `
                <button type="button" className="close" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-0" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                </button>
                <span>Aún no está disponible</span>
                `;

                document.body.appendChild(alert);

                const closeButton = alert as HTMLElement;
                if (closeButton) {
                    
                    closeButton.addEventListener("click", () => {
                        alert.remove();
                    });
                }
                
                setTimeout(() => {
                  alert.remove();
                }, 5000);
              }
            }}>
              {item.children}
            <div className="indicator">
            {(item.hasNotification && item.notificationCount) && (
              <span className="badge badge-xs badge-secondary rounded-box indicator-item" style={{ fontSize: "12px", top: "-50px",
              right: "-50px",
              transform: "translate(-20px, -20px)",}}>
                {item.notificationCount}
              </span>
            )}
            </div>
            </a>
        </li>
      ))}
    </ul>
  );
};