import { NavLink, Link } from "react-router-dom"

function Navbar() {
  
  return (
    <nav className="flex justify-between px-6 items-center h-[10vh]">
      <ul className="flex list-none gap-7 p-5">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "selected-link" : "")}
          >
            Home
          </NavLink>
        </li>
          <li>
          <NavLink
            to="/createPost"
            className={({ isActive }) => (isActive ? "selected-link" : "")}
          >
            Create Post
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
