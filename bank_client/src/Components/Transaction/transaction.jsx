import { useSelector } from "react-redux";

function Transaction() {
  const user = useSelector((state) => state.user.user);

  if (user) {
    return (
      <div className="mx-auto xl:w-[80%] w-[90%]  font-main mt-[3rem]">
        <ul className="flex flex-col gap-[15px] bg-green-100 p-[20px] ">
          {user.transactions.map((item, i) => {
            return (
              <li
                className="bg-green-400 p-[20px] rounded-lg flex flex-col gap-[20px]"
                key={i}>
                <div className="flex justify-between">
                  <div>{item.amount}</div>
                  <div>{item.timestamp}</div>
                </div>
                <div className="flex justify-between">
                  <div>{item.transactiontype}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="mx-auto xl:w-[80%] w-[90%]  font-main mt-[3rem]">
        <div>Loading</div>
      </div>
    );
  }
}

export default Transaction;
