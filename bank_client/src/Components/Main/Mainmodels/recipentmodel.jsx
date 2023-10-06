import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { modalaction } from "../../../store/index";
import { useState, useEffect } from "react";
import { transactionaction } from "../../../store/index";
import Loading from "../../Loading/loding";

function Recipentmodal() {
  const [isloading, setIsloading] = useState(false);
  const [usersendinput, setUsersendinput] = useState("");
  const [showerrormessage, setShowerrormessage] = useState(false);
  const [errormessage, Seterrormessage] = useState("");
  const dispatch = useDispatch();
  const inputchangehandler = (e) => {
    setUsersendinput(e.target.value);
  };

  const selectrecipent = (e) => {
    e.preventDefault();
    if (usersendinput.trim() == "") {
      Seterrormessage("Enter the Number");
      setShowerrormessage(true);
      return;
    }
    if (usersendinput.length < 11) {
      Seterrormessage("Invalid Number");
      setShowerrormessage(true);
      return;
    }
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
      dispatch(modalaction.showpinmodal());
      dispatch(transactionaction.addrecipent(usersendinput));
    }, 1000);
  };
  const hiderecipentmodal = () => {
    dispatch(modalaction.hiderecipentmodal());
  };

  useEffect(() => {
    if (usersendinput.length > 11) {
      Seterrormessage("Invalid Credentails");
      setShowerrormessage(true);
    }
    if (usersendinput.length === 11) {
      Seterrormessage("");
      setShowerrormessage(false);
    }
    if (usersendinput.length >= 1) {
      if (usersendinput <= 0) {
        Seterrormessage("Invalid credentials");
        setShowerrormessage(true);
      }
    }
    if (
      usersendinput.split("").find((character) => isNaN(character)) !==
      undefined
    ) {
      Seterrormessage("Invalid credentials");
      setShowerrormessage(true);
    }
  }, [inputchangehandler]);

  return (
    <div className="">
      <div className="relative bg-white px-[3rem] py-[2rem] shadow-lg rounded-lg w-[380px]">
        {isloading && <Loading />}
        <div
          onClick={hiderecipentmodal}
          className="hover:text-red-600 font-bold cursor-pointer absolute right-4">
          <AiOutlineClose size={20} />
        </div>
        <div className="mt-[10px]">
          <form>
            <label htmlFor="browser">Enter recipent No:</label>
            <div className="relative z-0  mb-4 group mt-[20px]">
              <input
                onChange={inputchangehandler}
                type="text"
                pattern="[0-9]{4}[0-9]{7}"
                name="nam"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Enter the recipent no:
              </label>
            </div>
            {showerrormessage && (
              <div className="text-red-600 font-medium text-[14px] transition-all duration-700">
                {errormessage}
              </div>
            )}
            <button
              onClick={selectrecipent}
              className={`inline-block text-[14px] mt-4 bg-primary lg:px-[1.5rem] px-[0.8rem] lg:py-[0.8rem] py-[0.8rem] rounded-lg text-white hover:bg-white hover:text-black  duration-300 ring-2 ring-offset-2 ring-primary transition-all    font-medium w-full sm:w-auto text-center  `}>
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Recipentmodal;

// ${
//     showerrormessage
//       ? "opacity-50 cursor-not-allowed hover:bg-primary hover:text-white"
//       : ""
//   }
