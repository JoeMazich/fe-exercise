import React, { useEffect } from "react";
import "./styleSheet.css";
import { useAppSelector, useAppDispatch } from "./hooks/hooks";
import { getStatesAndOccupations, clearToast } from "./redux/actions";
import { ToastContainer, toast } from "react-toast";
import { ERROR, SUCCESS } from "./constants/constants";

import UserCreationForm from "./components/forms/UserCreationForm";

function App() {
  const dispatch = useAppDispatch();
  const toastNotifactions = useAppSelector((state) => state.toast);

  // handle toast messages
  useEffect(() => {
    if (toastNotifactions.message) {
      switch (toastNotifactions.theme) {
        case ERROR:
          toast.error(toastNotifactions.message);
          break;
        case SUCCESS:
          toast.success(toastNotifactions.message);
          break;
        default:
          toast(toastNotifactions.message);
      }
      dispatch(clearToast());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toastNotifactions]);

  useEffect(() => {
    dispatch(getStatesAndOccupations());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <ToastContainer position="bottom-left" delay={10} />
      <UserCreationForm />
    </div>
  );
}

export default App;
