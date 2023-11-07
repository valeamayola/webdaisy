import '../App.css';

 export function NavBar() {
    return (
      <div className="navbar bg-accent w-full absolute top-0 left-0 mb-0">
        <div className="flex-1">
          <button className="btn btn-ghost normal-case text-xl">TuVozSuma</button>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div className="container">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="../src/img/icons/profile.svg" />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
