import { useDispatch, useSelector } from "react-redux";
import { modalaction } from "../../store/index";
function Alert(props) {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.modal.transactionmsg);
  const hidealertbtn = () => {
    dispatch(modalaction.hidetransactionmsg());
  };

  if (alert) {
    setTimeout(() => {
      hidealertbtn();
    }, 4000);
  }

  return (
    <div>
      {alert && (
        <div
          id="alert-border-1"
          className={`fixed  w-[320px] animate-maintext flex  p-4 mb-4  text-${props.alert.msgcolor} border-t-4   border-${props.alert.bordercolor} bg-blue-50 `}
          role="alert">
          <svg
            className="flex-shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <div className="ml-3 text-sm font-medium">{props.alert.msg}</div>
          <button
            onClick={hidealertbtn}
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200  h-8 w-8 "
            data-dismiss-target="#alert-border-1"
            aria-label="Close">
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default Alert;
