import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { modalaction, useraction } from "../../../store/index";
import { useState } from "react";
import axios from "axios";
import Loading from "../../Loading/loding";

function Pinmodel() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [showborder, setShowborder] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [showerrormessage, setShowerrormessage] = useState(false);
  const [errormessage, Seterrormessage] = useState("");
  const amount = useSelector((state) => state.transaction.amount);
  const recipent = useSelector((state) => state.transaction.recipent);

  //userEntered pincode
  const [pincode, setPincode] = useState({
    first: null,
    second: null,
    third: null,
    forth: null,
  });

  //userinputchangehandler
  const inputchangehandler = (e) => {
    setPincode((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
    setShowborder(false);
    setShowerrormessage(false);
  };

  //SubmitPinHandler
  const checkpin = async (e) => {
    e.preventDefault();

    if (
      pincode.first === "" ||
      pincode.second === "" ||
      pincode.third === "" ||
      pincode.forth === ""
    ) {
      setShowborder(true);
      Seterrormessage("Fill the inputs");
      setShowerrormessage(true);
      return;
    }
    setIsloading(true);

    const inputpin =
      pincode.first + pincode.second + pincode.third + pincode.forth;

    const formattedDate = new Date();
    const year = formattedDate.getFullYear();
    const month = String(formattedDate.getMonth() + 1).padStart(2, "0");
    const day = String(formattedDate.getDate()).padStart(2, "0");
    const formattedDateString = `${year}-${month}-${day}`;

    await axios
      .post("/api/checkpin", { inputpin })
      .then(async (res) => {
        const trandata = {
          amount: amount,
          transactiontype: "send",
          timestamp: formattedDateString,
          recipent: recipent,
        };
        let id = user.id;
        await axios.post("/transactions", { id, trandata }).then((data) => {
          axios.get("api/user").then((res) => {
            dispatch(useraction.updateUser(res.data));
          });
          setIsloading(false);
          dispatch(modalaction.hidepinmodal());
          dispatch(modalaction.showtransactionmsg());
        });
      })
      .catch((error) => {
        setIsloading(false);
        setShowerrormessage(true);
        Seterrormessage("Invalid pin");
        console.log(error);
        setShowborder(true);
      });

    // localStorage.setItem("currentuser", JSON.stringify(userdata));
    // dispatch(modalaction.hidepinmodal());
    // dispatch(modalaction.showtransactionmsg());
  };

  const hidepinmodal = () => {
    dispatch(modalaction.hidepinmodal());
  };

  return (
    <div className="">
      <div className="relative bg-white px-[3rem] py-[2rem]  rounded-lg w-[380px]">
        {/* Spinner */}
        {isloading && <Loading />}

        {/* spinner end */}
        <div
          onClick={hidepinmodal}
          className="hover:text-red-600 font-bold cursor-pointer absolute right-4">
          <AiOutlineClose size={20} />
        </div>
        <div className="mt-[10px] ">
          <form>
            <label className="font-semibold">Enter your Pincode</label>
            <div className="flex gap-[5px] items-center justify-between mt-[30px]">
              <div className=" ">
                <input
                  className={`w-[50px] h-[50px] ${
                    showborder && "border border-red-500"
                  }`}
                  min="0"
                  max="9"
                  type="text"
                  maxLength="1"
                  name="first"
                  onChange={inputchangehandler}
                />
              </div>
              <div className="">
                <input
                  className={`w-[50px] h-[50px] ${
                    showborder && "border border-red-500"
                  }`}
                  min="0"
                  max="9"
                  type="text"
                  maxLength="1"
                  name="second"
                  onChange={inputchangehandler}
                />
              </div>
              <div className="">
                <input
                  className={`w-[50px] h-[50px] ${
                    showborder && "border border-red-500"
                  }`}
                  min="0"
                  max="9"
                  type="text"
                  maxLength="1"
                  name="third"
                  onChange={inputchangehandler}
                />
              </div>
              <div className="">
                <input
                  className={`w-[50px] h-[50px] ${
                    showborder && "border border-red-500"
                  }`}
                  min="0"
                  name="forth"
                  max="9"
                  type="text"
                  maxLength="1"
                  onChange={inputchangehandler}
                />
              </div>
            </div>
            {showerrormessage && (
              <div className="text-red-600 font-medium text-[14px] mt-[15px] transition-all duration-700">
                {errormessage}
              </div>
            )}
            <button
              onClick={checkpin}
              className="inline-block text-[14px] mt-6 bg-primary lg:px-[1.5rem] px-[0.8rem] lg:py-[0.8rem] py-[0.8rem] rounded-lg text-white hover:bg-white hover:text-black  duration-300 ring-2 ring-offset-2 ring-primary transition-all    font-medium w-full sm:w-auto text-center ">
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Pinmodel;
