import { useState } from "react";
import axios from "axios";

function Form() {
  const [goal, setGoal] = useState("");
  const [showerror, setshowError] = useState(false);
  const [error, setError] = useState("");
  const inputchangehandler = (e) => {
    setshowError(false);
    setGoal(e.target.value);
  };
  const addgoal = (e) => {
    e.preventDefault();
    if (goal.trim().length === 0) {
      setshowError(true);
      setError("Input feild");
      return;
    }

    fetchGoals(goal);
    setGoal("");
  };
  async function fetchGoals(data) {
    try {
      await axios.post("http://localhost:3000/goals/", {
        title: data,
      });
    } catch (error) {
      console.error("Error fetching goals:", error);
    }
  }

  return (
    <div className="mt-[30px]">
      <div className="text-[32px] font-bold text-[#f87171] ">Goal App</div>
      <div className=" mt-[30px]">
        <div>
          <form>
            <div className="relative z-0  mb-4 group ">
              <input
                onChange={inputchangehandler}
                type="text"
                name="gaoltext"
                value={goal}
                id="goal"
                className={`w-full block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer `}
                placeholder=""
                required
              />
              <label
                htmlFor="goaltext"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Add Goal
              </label>
            </div>
            {showerror && (
              <div className="mb-[5px] text-red-600 font-semibold">{error}</div>
            )}
            <button
              onClick={addgoal}
              type="submit"
              className="mb-[20px] inline-block text-[14px] mt-2 bg-[#f87171] lg:px-[1.5rem] px-[0.8rem] lg:py-[0.8rem] py-[0.8rem] rounded-lg text-white hover:bg-white hover:text-black  duration-300 ring-2 ring-offset-2 ring-primary transition-all font-medium w-full sm:w-auto text-center ">
              Add Goal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
