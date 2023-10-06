import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navAction } from "../../store/index";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/loding";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [errormsg, setErrormsg] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [showerrormsg, setShowerrormsg] = useState(false);
  const dispatch = useDispatch();
  const [userinput, setUserinput] = useState({
    email: "",
    pin: "",
    firstname: "",
    lastname: "",
    phone: "",
  });

  const inputChangeHandler = (e) => {
    setShowerrormsg(false);
    setUserinput((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const registerUserHandler = async (e) => {
    e.preventDefault();
    setIsloading(true);
    // if (
    //   userinput.firstname.trim().length < 3 ||
    //   userinput.lastname.trim().length < 3 ||
    //   userinput.phone.trim().length < 11 ||
    //   userinput.pin.trim().length < 4
    // ) {
    //   addlocal = false;
    //   setShowerrormsg(true);
    //   setErrormsg(
    //     "First and last name will be more than 3 && Pin should be 4 digit"
    //   );
    // }''
    if (
      userinput.email.trim() == "" ||
      userinput.firstname.trim() == "" ||
      userinput.lastname.trim() == "" ||
      userinput.phone.trim() == "" ||
      userinput.pin.trim() == ""
    ) {
      setIsloading(false);
      setShowerrormsg(true);
      setErrormsg("Input all the Feilds");
    } else if (userinput.pin.trim().length > 4) {
      setShowerrormsg(true);
      setIsloading(false);
      setErrormsg("Pin should be 4 digit");
    } else {
      let fullname = userinput.firstname + " " + userinput.lastname;
      const data = { ...userinput, name: fullname };
      await axios
        .post("/api/register", data)
        .then((res) => {
          console.log(res.data);
          navigate("/login");
          setIsloading(false);
        })
        .catch((error) => {
          console.log(error.response.data.message);
          setIsloading(false);
        });
    }
  };

  const showloginhandler = () => {
    dispatch(navAction.togglelogin());
    navigate("/login");
  };

  return (
    <div className="relative bg-gradient-to-b from-primary w-full to-teal h-screen ">
      <div className=" absolute top-[50%] left-[50%]  -translate-x-[50%] -translate-y-[50%] mx-auto md:w-[75%] lg:w-[65%] xl:w-[45%] 2xl:w-[35%] w-[90%]  font-main bg-white shadow-lg rounded-md p-[3rem] transition-all duration-500">
        {isloading && <Loading />}
        <div className="mb-[2rem]  italic text-[40px] font-semibold bg-gradient-to-r inline-block from-primary bg-clip-text text-transparent to-teal">
          Welcome
        </div>
        <div>
          <form>
            <div className="relative z-0  mb-6 group ">
              <input
                type="email"
                name="email"
                id="floating_email"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  showerrormsg && "border-red-600"
                }`}
                placeholder=" "
                value={userinput.email}
                onChange={inputChangeHandler}
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="password"
                name="pin"
                id="floating_password"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  showerrormsg && "border-red-600"
                }`}
                placeholder=" "
                onChange={inputChangeHandler}
                value={userinput.pin}
                required
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Pin
              </label>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="firstname"
                  id="floating_first_name"
                  className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                    showerrormsg && "border-red-600"
                  }`}
                  placeholder=" "
                  onChange={inputChangeHandler}
                  value={userinput.firstname}
                  required
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  First name
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="lastname"
                  id="floating_last_name"
                  className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                    showerrormsg && "border-red-600"
                  }`}
                  placeholder=" "
                  onChange={inputChangeHandler}
                  value={userinput.lastname}
                  required
                />
                <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Last name
                </label>
              </div>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="tel"
                pattern="[0-9]{4}[0-9]{7}"
                name="phone"
                onChange={inputChangeHandler}
                value={userinput.phone}
                id="floating_phone"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  showerrormsg && "border-red-600"
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Phone number (0300-0000000)
              </label>
            </div>
            {showerrormsg && (
              <div className="text-[16px] font-medium text-red-500">
                {errormsg}
              </div>
            )}
            <div>
              <div className=" text-blue-700 my-[1.2rem] cursor-pointer inline-block ">
                <div onClick={showloginhandler}>Already have an account?</div>
              </div>
              <button
                onClick={registerUserHandler}
                className=" cursor-pointer block  text-[16px] mt-2 bg-primary lg:px-[1.5rem] px-[0.8rem] lg:py-[0.8rem] py-[0.8rem] rounded-lg text-white hover:bg-white hover:text-black  duration-300 ring-2 ring-offset-2 ring-primary transition-all    font-medium w-full sm:w-auto text-center ">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
