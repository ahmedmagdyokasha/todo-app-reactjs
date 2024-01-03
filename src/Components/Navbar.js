import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navBar">
      <p className="logo-tittle">TODO LIST APP</p>
      {/* <ul className="nav-sec-links">
        <li>
          <Link to="/"> All Tasks</Link>
        </li>
        <li>
          <Link to="/Completed">Completed</Link>
        </li>
        <li>
          <Link to="/Uncompleted">UnCompleted</Link>
        </li>
        <li>
          <Link to="/Important">Important</Link>
        </li>
      </ul> */}
    </div>
  );
}

export default Navbar;
