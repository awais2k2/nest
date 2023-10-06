import Dummymain from "./dummymain";
import Usermain from "./usermain";
import { useEffect } from "react";
import { useraction } from "../../store/index";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const res = await axios.get("/api/user");
    if (res.data) {
      dispatch(useraction.updateUser(res.data));
    }
  };
  const user = useSelector((state) => state.user.user);

  return (
    <div className="mx-auto xl:w-[80%] w-[90%]  font-main mt-[3rem]">
      {user.name ? <Usermain /> : <Dummymain />}
    </div>
  );
}

export default Main;
