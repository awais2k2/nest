import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowForward } from "react-icons/io";
import { AiOutlineArrowDown, AiOutlinePullRequest } from "react-icons/ai";
import Transactionchart from "../Transactions/transactionchart";
import { modalaction } from "../../../store/index";
import Model from "../Mainmodels/model";

function Userbalance() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const shoesendmodal = () => {
    dispatch(modalaction.togglesendmodel());
  };

  return (
    <div className="">
      <Model />
      <div>
        <div className="flex gap-[30px] xl:flex-row flex-col ">
          <div className="flex items-center xl:gap-[30px] gap-[20px] text-white">
            <div className="bg-teal flex flex-col flex-1 rounded-lg py-[1.5rem] px-[1rem] lg:h-[500px] h-[350px] lg:w-[400px] w-[300px]  ">
              <div className="font-semibold md:text-[25px] text-[20px]  mt-[5px]">
                Name: {user.name}
              </div>
              <div className="md:text-[25px] text-[20px] font-medium ">
                Current Balance
              </div>
              <div className="font-semibold md:text-[30px] text-[25px]  mt-[5px]">
                RS:{user.balance}
              </div>

              <div className="mt-auto">
                <div className="flex items-center justify-between ">
                  <div className="flex ">
                    <div className="animate-iconleft w-[40px] h-[40px] bg-red-600 rounded-full opacity-80"></div>
                    <div className="animate-iconright w-[40px] h-[40px] bg-orange-600 rounded-full -translate-x-4"></div>
                  </div>
                  <div className="cursor-pointer hover:text-pri-hover  transition-all duration-300 hover:scale-[1.2]">
                    <IoMdArrowForward size={30} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-stretch flex-col gap-[20px]   ">
              <div className="flex-1">
                <div className="lg:w-[350px] md:w-[300px] w-[150px] flex lg:h-[240px] h-[165px] bg-blue-600 rounded-lg py-[1.5rem] px-[1rem] flex-col justify-between">
                  <div className="">
                    <AiOutlineArrowDown size={25} />
                  </div>
                  <div className="">
                    <div className="md:text-[25px] text-[20px]">Load Money</div>
                  </div>
                </div>
              </div>
              <div onClick={shoesendmodal} className="flex-1 cursor-pointer">
                <div className="lg:w-[350px] md:w-[300px]  w-[150px] flex  lg:h-[240px] h-[165px] bg-pri-hover rounded-lg py-[1.5rem] px-[1rem] flex-col justify-between">
                  <div className="">
                    <AiOutlinePullRequest size={25} />
                  </div>
                  <div className="">
                    <div className="md:text-[25px] text-[20px]">
                      Send & Request
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex-1 ">
            <div className="bg-teal flex flex-col text-white rounded-lg py-[1.5rem] px-[1rem] xl:h-[500px] h-[300px]  ">
              <div className="md:text-[25px] text-[20px]  font-medium ">
                Loan request
              </div>
              <div className="font-semibold md:text-[30px] text-[25px] mt-[5px]">
                RS. {user.loan}
              </div>
              <div className="mt-auto">
                <div>
                  <button className=" text-[14px] bg-primary xl:px-[1.5rem] px-[0.8rem] xl:py-[1rem] py-[0.5rem] rounded-lg text-white hover:bg-white hover:text-black font-medium duration-300 ring-2 ring-offset-2 ring-primary transition-all">
                    Get Loan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mt-[80px] mt-[50px]">
        <Transactionchart />
      </div>
    </div>
  );
}

export default Userbalance;
