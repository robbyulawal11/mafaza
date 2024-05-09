import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { authset } from "../../lib/store/slice/auth.slice";
import YourAppointmentsPage from "@/pages/YourAppointmentsPage";
import { Navigate } from "react-router-dom";

const AuthYourAppointmentPageHandler = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);
  console.log(isAuth);
  const dispatch = useDispatch();

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(authset(true));
      } else {
        dispatch(authset(false));
      }
    });
  }, [dispatch]);

  return <div className="min-h-screen">{isLoading ? <p className="flex-grow text-center font-bold">Loading...</p> : isAuth ? <YourAppointmentsPage /> : <Navigate to="/login" replace={true} />}</div>;
};

export default AuthYourAppointmentPageHandler;
