import axios from "axios";

function Goallist(props) {
  const deletegoal = async (goalid) => {
    try {
      await axios.delete(`http://localhost:3000/goals/${goalid}`);
    } catch (error) {
      console.error("Error deleting goals:", error);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-[10px] ">
        {props.items.map((goal) => {
          return (
            <div
              className="p-[10px] py-[15px] flex justify-between items-center  bg-gray-300 rounded-lg"
              key={goal.id}>
              <div> {goal.title}</div>
              <div>
                <div
                  onClick={() => {
                    deletegoal(goal.id);
                  }}
                  className="cursor-pointer bg-[#f87171] p-[10px] rounded-md hover:text-white">
                  Delete
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Goallist;
