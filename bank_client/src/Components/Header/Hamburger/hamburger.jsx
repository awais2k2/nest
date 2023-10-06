import { useDispatch } from "react-redux";
import { navAction } from "../../../store/index";
import { NavLink } from "react-router-dom";

function Hamburger() {
  const dispatch = useDispatch();
  const showMenu = () => {
    dispatch(navAction.toggleMenu());
  };

  return (
    <div
      className={`absolute bg-white left-0 top-[5rem] w-full z-50 shadow-lg  animate-navtrans`}>
      <ul
        className={`w-[90%] mx-auto h-full items-start  flex flex-col gap-[10px]  `}>
        <NavLink
          onClick={showMenu}
          className="w-full before:-z-10 relative before:absolute before:inset-0 before:bg-bgtrans before:block before:w-0 hover:before:w-full   before:transition-all before:duration-500 px-[0.5rem]  py-[1rem] text-primary font-semibold hover:text-pri-hover "
          to="/"
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#dc2626",
                  backgroundColor: "#f4f4f5",
                }
              : { color: "#f87171" }
          }>
          Home
        </NavLink>

        <div className="w-full mx-auto bg-border h-[0.1px] opacity-30 -m-2"></div>
        <NavLink
          onClick={showMenu}
          className="w-full before:-z-10 relative before:absolute before:inset-0 before:bg-bgtrans before:block before:w-0 hover:before:w-full   before:transition-all before:duration-500 px-[0.5rem]  py-[1rem] text-primary font-semibold hover:text-pri-hover "
          to="/transaction"
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#dc2626",
                  backgroundColor: "#f4f4f5",
                }
              : { color: "#f87171" }
          }>
          Transation
        </NavLink>
        <div className="w-full mx-auto bg-border h-[0.1px] opacity-30 -m-2"></div>

        <NavLink
          onClick={showMenu}
          className="w-full before:-z-10 relative before:absolute before:inset-0 before:bg-bgtrans before:block before:w-0 hover:before:w-full   before:transition-all before:duration-500 px-[0.5rem]  py-[1rem] text-primary font-semibold hover:text-pri-hover "
          to="/faq"
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#dc2626",
                  backgroundColor: "#f4f4f5",
                }
              : { color: "#f87171" }
          }>
          FAQ
        </NavLink>
        <div className="w-full mx-auto bg-border h-[0.1px] opacity-30 -m-2"></div>

        <NavLink
          onClick={showMenu}
          className="w-full before:-z-10 relative before:absolute before:inset-0 before:bg-bgtrans before:block before:w-0 hover:before:w-full   before:transition-all before:duration-500 px-[0.5rem]  py-[1rem] text-primary font-semibold hover:text-pri-hover "
          to="/support"
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#dc2626",
                  backgroundColor: "#f4f4f5",
                }
              : { color: "#f87171" }
          }>
          Support
        </NavLink>
        <div className="w-full mx-auto bg-border h-[0.1px] opacity-30 -m-2"></div>

        <NavLink
          onClick={showMenu}
          className="w-full before:-z-10 relative before:absolute before:inset-0 before:bg-bgtrans before:block before:w-0 hover:before:w-full   before:transition-all before:duration-500 px-[0.5rem]  py-[1rem] text-primary font-semibold hover:text-pri-hover "
          to="/contact"
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#dc2626",
                  backgroundColor: "#f4f4f5",
                }
              : { color: "#f87171" }
          }>
          Contact
        </NavLink>
        <div className="w-full mx-auto bg-border h-[0.1px] opacity-30 -m-2"></div>
        <div className="my-[2rem]">
          <NavLink
            to="/register"
            className="text-[14px] bg-primary  px-[0.8rem]  py-[0.5rem] rounded-lg text-white hover:bg-white hover:text-black font-medium duration-300 ring-2 ring-offset-2 ring-primary transition-all">
            Signup Now
          </NavLink>
        </div>
      </ul>
    </div>
  );
}

export default Hamburger;
