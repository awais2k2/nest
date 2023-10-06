import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/loding";
import { navAction } from "../../store/index";
import axios from "axios";

function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [isloading, setIsloading] = useState(false);
  const [errormsg, setErrormsg] = useState("");
  const [showerrormsg, setShowerrormsg] = useState(false);
  const [user, setuser] = useState({ pin: "", phone: "" });

  const inputchangehandler = (e) => {
    setShowerrormsg(false);
    setErrormsg("");
    setuser((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };
  const loginhandler = async (e) => {
    e.preventDefault();
    setIsloading(true);
    if (user.pin.trim() == "" || user.phone.trim() == "") {
      setShowerrormsg(true);
      setIsloading(false);
      setErrormsg("Input the feilds");
      return;
    } else {
      const data = { ...user };
      await axios
        .post("/api/login", data)
        .then((res) => {
          setIsloading(false);
          dispatch(navAction.togglelogin());
          navigation("/");
        })
        .catch((error) => {
          setIsloading(false);
          setShowerrormsg(true);
          setErrormsg(error.response.data.message);
        });
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-primary w-full to-teal h-screen ">
      <div className=" absolute top-[50%] left-[50%]  -translate-x-[50%] -translate-y-[50%] mx-auto md:w-[75%] lg:w-[65%] xl:w-[45%] 2xl:w-[35%] w-[90%]  font-main bg-white shadow-lg rounded-md p-[3rem] transition-all duration-500">
        {isloading && <Loading />}
        <form>
          <div className="mb-[2rem]  italic text-[40px] font-semibold bg-gradient-to-r inline-block from-primary bg-clip-text text-transparent to-teal">
            Login
          </div>
          <div className="relative z-0  mb-6 group ">
            <input
              onChange={inputchangehandler}
              type="tel"
              name="phone"
              id="number"
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                showerrormsg && "border-red-600"
              }`}
              placeholder=""
              required
            />
            <label
              htmlFor="number"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Phone Number
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={inputchangehandler}
              type="password"
              name="pin"
              id="pin"
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                showerrormsg && "border-red-600"
              }`}
              placeholder=" "
              required
            />
            <label
              htmlFor="pin"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Pincode
            </label>
          </div>
          {showerrormsg && <div className="text-red-600">{errormsg}</div>}
          <button
            onClick={loginhandler}
            className="inline-block text-[14px] mt-2 bg-primary lg:px-[1.5rem] px-[0.8rem] lg:py-[0.8rem] py-[0.8rem] rounded-lg text-white hover:bg-white hover:text-black  duration-300 ring-2 ring-offset-2 ring-primary transition-all    font-medium w-full sm:w-auto text-center ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
