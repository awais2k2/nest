import Bankmodal from "./bankmodal";
import Sendmodal from "./sendmodel";
import Pinmodel from "./pinmodel";
import Recipentmodal from "./recipentmodel";
import { useSelector } from "react-redux";

function Model() {
  const showsend = useSelector((state) => state.modal.showsend);
  const showbank = useSelector((state) => state.modal.showbank);
  const showrecipent = useSelector((state) => state.modal.showrecipent);
  const showpin = useSelector((state) => state.modal.showpin);
  const checkmodel = showbank || showsend || showrecipent || showpin;

  return (
    <>
      {checkmodel && (
        <div className=" fixed inset-0  flex justify-center items-center h-full bg-black/40 z-50 transition-all duration-300 ">
          {showsend && <Sendmodal />}
          {showbank && <Bankmodal />}
          {showrecipent && <Recipentmodal />}
          {showpin && <Pinmodel />}
        </div>
      )}
    </>
  );
}

export default Model;
