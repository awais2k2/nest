import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { modalaction } from "../../../store/index";
import { useState, useEffect } from "react";
import { transactionaction } from "../../../store/index";
import Loading from "../../Loading/loding";

function Sendmodal() {
  const user = useSelector((state) => state.user.user);
  const [isloding, setIsloding] = useState(false);
  const [usersendinput, setUsersendinput] = useState("");
  const [showerrormessage, setShowerrormessage] = useState(false);
  const [errormessage, Seterrormessage] = useState("");
  const dispatch = useDispatch();
  const inputchangehandler = (e) => {
    setUsersendinput(e.target.value);
  };

  const selectbank = (e) => {
    e.preventDefault();
    if (usersendinput.trim() == "") {
      Seterrormessage("Enter the amuont");
      setShowerrormessage(true);
      return;
    }
    setIsloding(true);
    setIsloding(false);
    dispatch(transactionaction.addamount(usersendinput));
    dispatch(modalaction.showbankmodal());
  };
  const hidesendmodal = () => {
    dispatch(modalaction.hidesendmodal());
  };

  useEffect(() => {
    if (usersendinput <= user.balance) {
      Seterrormessage("Balance is low");
      setShowerrormessage(false);
    }
    if (usersendinput > user.balance) {
      Seterrormessage("Balance is low");
      setShowerrormessage(true);
    }
    if (usersendinput.length >= user.balance) {
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
  }, [usersendinput]);

  return (
    <div className="">
      <div className="relative bg-white px-[3rem] py-[2rem] shadow-lg rounded-lg w-[380px]">
        {isloding && <Loading />}
        <div
          onClick={hidesendmodal}
          className="hover:text-red-600 font-bold cursor-pointer absolute right-4">
          <AiOutlineClose size={20} />
        </div>
        <div className="mb-[30px]">
          Current Balance: <span className="font-semibold">{user.balance}</span>
        </div>
        <div className="mt-[10px]">
          <form>
            <div className="relative z-0  mb-6 group mt-[20px]">
              <input
                onChange={inputchangehandler}
                type="text"
                name="nam"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Enter the amount
              </label>
            </div>
            {showerrormessage && (
              <div className="text-red-600 font-medium text-[14px] transition-all duration-700">
                {errormessage}
              </div>
            )}
            <div className="flex items-center gap-[20px] mt-[2rem] mb-[1rem]">
              <button
                disabled={showerrormessage}
                onClick={selectbank}
                className={`inline-block text-[14px] mt-2 bg-primary lg:px-[1.5rem] px-[0.8rem] lg:py-[0.8rem] py-[0.8rem] rounded-lg text-white hover:bg-white hover:text-black  duration-300 ring-2 ring-offset-2 ring-primary transition-all    font-medium w-full sm:w-auto text-center  ${
                  showerrormessage
                    ? "opacity-50 cursor-not-allowed hover:bg-primary hover:text-white"
                    : ""
                }`}>
                Send
              </button>
              <button className="inline-block text-[14px] mt-2 bg-primary lg:px-[1.5rem] px-[0.8rem] lg:py-[0.8rem] py-[0.8rem] rounded-lg text-white hover:bg-white hover:text-black  duration-300 ring-2 ring-offset-2 ring-primary transition-all    font-medium w-full sm:w-auto text-center ">
                Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sendmodal;
