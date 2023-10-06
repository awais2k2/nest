import { TypeAnimation } from "react-type-animation";
import img from "../../assets/card2.jpeg";
import { NavLink } from "react-router-dom";

function Dummymain() {
  return (
    <div>
      <div className=" flex xl:items-center xl:flex-row flex-col xl:justify-between gap-[2rem]">
        <div className=" flex flex-col ">
          <div className=" flex flex-col   animate-maintext">
            <span className="font-medium xl:text-[55px] text-[35px] text-p">
              Say goodbye to
            </span>
            <div className="xl:text-[55px] text-[35px] text-teal font-medium">
              <TypeAnimation
                sequence={[
                  "paper forms",
                  2000,
                  "Annual fees",
                  2000,
                  "ATM fees",
                  2000,
                  "long term holds",
                  2000,
                  "waiting in line",
                  2000,
                ]}
                speed={10}
                repeat={Infinity}
              />
            </div>
          </div>
          <div className="animate-mainpara">
            <p className="xl:w-[460px]  text-gray-400 text-left mt-[2rem]">
              Sign up now for your debit Mastercard and digital wallet. Spend,
              send and withdraw cash without fees.
            </p>
          </div>
          <div className="pt-[3rem] animate-mainbutton">
            <NavLink
              to="/register"
              className="inline-block text-[14px] bg-primary lg:px-[1.2rem] px-[0.8rem] lg:py-[0.8rem] py-[0.5rem] rounded-lg text-white hover:bg-white hover:text-black font-medium duration-300 ring-2 ring-offset-2 ring-primary transition-all">
              Signup Now
            </NavLink>
          </div>
        </div>
        <div>
          <div className="animate-mainimg">
            <img
              className="xl:h-[700px] w-full xl:w-[800px] h-[500px]  transition-all  "
              src={img}
              alt="main"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dummymain;
