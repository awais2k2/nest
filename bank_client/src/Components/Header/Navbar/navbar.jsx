import { AiOutlineBank } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { navAction } from "../../../store/index";
import Hamburger from "../Hamburger/hamburger";
import { PiCurrencyDollar } from "react-icons/pi";
import axios from "axios";
import Alert from "../../Alert/alter";

function Navbar() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.modal.transactionmsg);

  const show = useSelector((state) => state.navbars.showMenu);
  const showMenu = () => {
    dispatch(navAction.toggleMenu());
  };

  const logouthandler = () => {
    axios.post("/api/logout");
    dispatch(useraction.updateUser({}));
  };

  useEffect(() => {
    const showlog = localStorage.getItem("showlogin");
    if (showlog) {
      dispatch(navAction.hidelogin());
    }
  }, []);

  return (
    <div className="mx-auto xl:w-[80%] w-[90%] py-[1rem] font-main ">
      {alert && (
        <Alert
          alert={{
            msg: "Transaction Succesful",
            msgcolor: "blue-500",
            bordercolor: "blue-500",
          }}
        />
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center  gap-[5px] animate-mainimg">
          <div className="xl:text-[3rem] text-[2.5rem]  ">
            <AiOutlineBank />
          </div>
          <NavLink
            to="/"
            className="cursor-pointer xl:text-[2.5rem] text-[2rem] uppercase tracking-wider mt-[4px] ">
            <div className="flex items-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal">
              Sadapay
            </div>
          </NavLink>
        </div>
        <div className="lg:flex hidden xl:gap-[4rem] gap-[2rem]">
          <ul className=" items-center xl:gap-[2.5rem] gap-[1.5rem] flex ">
            <li className=" text-primary font-semibold hover:text-pri-hover">
              <NavLink
                to="/"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#dc2626",
                      }
                    : { color: "#f87171" }
                }>
                Home
              </NavLink>
            </li>
            {user.name && (
              <li className=" text-primary font-semibold hover:text-pri-hover">
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#dc2626",
                        }
                      : { color: "#f87171" }
                  }
                  to="/transaction">
                  Transactions
                </NavLink>
              </li>
            )}

            <li className=" text-primary font-semibold hover:text-pri-hover">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#dc2626",
                      }
                    : { color: "#f87171" }
                }
                to="/faq">
                FAQ
              </NavLink>
            </li>
            <li className=" text-primary font-semibold hover:text-pri-hover">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#dc2626",
                      }
                    : { color: "#f87171" }
                }
                to="/contact">
                Contact
              </NavLink>
            </li>
            <li className=" text-primary font-semibold hover:text-pri-hover">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#dc2626",
                      }
                    : { color: "#f87171" }
                }
                to="/support">
                Support
              </NavLink>
            </li>
          </ul>
          <div>
            {!user.name ? (
              <NavLink
                to="/register"
                className="text-[14px] bg-primary xl:px-[1.2rem] px-[0.8rem] xl:py-[0.8rem] py-[0.5rem] rounded-lg text-white hover:bg-white hover:text-black font-medium duration-300 ring-2 ring-offset-2 ring-primary transition-all">
                Signup Now
              </NavLink>
            ) : (
              <NavLink
                onClick={logouthandler}
                to="/"
                className="text-[14px] bg-primary xl:px-[1.2rem] px-[0.8rem] xl:py-[0.8rem] py-[0.5rem] rounded-lg text-white hover:bg-white hover:text-black font-medium duration-300 ring-2 ring-offset-2 ring-primary transition-all">
                Logout
              </NavLink>
            )}
          </div>
        </div>

        <div className="lg:hidden block">
          <div
            onClick={showMenu}
            className="text-black hover:text-primary cursor-pointer">
            <GiHamburgerMenu size={32} />
          </div>
          {show && <Hamburger />}
        </div>
      </div>
      <div className="text-red-400 absolute top-[30px] left-0 xl:text-[3rem] text-[2rem] rotate-12 animate-bounce opacity-40">
        <PiCurrencyDollar />
      </div>
      <div className="text-red-400 absolute top-[30px] right-0 xl:text-[3rem] text-[2rem] rotate-12 animate-bounce opacity-40">
        <PiCurrencyDollar />
      </div>
    </div>
  );
}

export default Navbar;
