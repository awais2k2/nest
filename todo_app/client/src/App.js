import Form from "./Components/Form";
import Goallist from "./Components/goallist.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetchGoals();
  }, [goals]);

  async function fetchGoals() {
    try {
      const response = await axios.get("http://localhost:3000/goals/");
      setGoals(response.data);
    } catch (error) {
      console.error("Error fetching goals:", error);
    }
  }

  return (
    <div className=" w-[40%] mx-auto ">
      <Form />
      <Goallist items={goals} />
    </div>
  );
}

export default App;
