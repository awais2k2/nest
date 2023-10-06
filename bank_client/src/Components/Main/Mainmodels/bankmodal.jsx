import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { modalaction } from "../../../store/index";
import { useState } from "react";
import { transactionaction } from "../../../store/index";

function Bankmodal() {
  const dispatch = useDispatch();
  const [usersendinput, setUsersendinput] = useState("");
  const [showerrormessage, setShowerrormessage] = useState(false);
  const [errormessage, Seterrormessage] = useState("");
  const banks = useSelector((state) => state.transaction.banks);
  const inputchangehandler = (e) => {
    setUsersendinput(e.target.value);
  };

  const selectpin = (e) => {
    e.preventDefault();
    if (usersendinput.trim() == "") {
      Seterrormessage("Select Institute");
      setShowerrormessage(true);
      return;
    }
    if (
      banks.find(
        (item) =>
          usersendinput.split(" ").join("").toLocaleLowerCase() ===
          item.toLocaleLowerCase()
      )
    ) {
      dispatch(transactionaction.addbank(usersendinput));
      dispatch(modalaction.showrecipentmodal());
    }
  };
  const hidebankmodal = () => {
    dispatch(modalaction.hidebankmodal());
  };

  return (
    <div className="">
      <div className="relative bg-white px-[3rem] py-[2rem] shadow-lg rounded-lg w-[380px]">
        <div
          onClick={hidebankmodal}
          className="hover:text-red-600 font-bold cursor-pointer absolute right-4">
          <AiOutlineClose size={20} />
        </div>
        <div className="mt-[10px] ">
          <form>
            <label htmlFor="browser">Choose your Institution</label>
            <div className="relative z-0 w-full mb-[10px] mt-[20px] group">
              <input
                onChange={inputchangehandler}
                list="browsers"
                name="bank"
                id="bank"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />

              <datalist id="browsers">
                <option value="SadaPay" />
                <option value="Jazzcash" />
                <option value="Easypaisa" />
                <option value="Nayapay" />
                <option value="Meezaan Bank" />
                <option value="Allied Bank" />
                <option value="Bnak Al Habib" />
                <option value="Islamic Bank" />
                <option value="Faisal Bank" />
                <option value="HBL" />
                <option value="PayMax" />
                <option value="Silk Bank" />
                <option value="Zindagi" />
                <option value="FirstPay" />
              </datalist>

              <label
                htmlFor="bank"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Institute
              </label>
            </div>
            {showerrormessage && (
              <div className="text-red-600 font-medium text-[14px] transition-all duration-700">
                {errormessage}
              </div>
            )}

            <div>
              <button
                onClick={selectpin}
                className="inline-block text-[14px] mt-4 bg-primary lg:px-[1.5rem] px-[0.8rem] lg:py-[0.8rem] py-[0.8rem] rounded-lg text-white hover:bg-white hover:text-black  duration-300 ring-2 ring-offset-2 ring-primary transition-all    font-medium w-full sm:w-auto text-center ">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Bankmodal;
