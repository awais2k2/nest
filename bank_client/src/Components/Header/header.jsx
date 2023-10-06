import Navbar from "./Navbar/navbar";
import { Outlet } from "react-router-dom";

function Header() {
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Header;
