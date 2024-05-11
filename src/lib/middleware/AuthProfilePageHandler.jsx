import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { authset } from "../../lib/store/slice/auth.slice";
import { Navigate } from "react-router-dom";
import ProfilPage from "@/pages/Profil";

const AuthProfilePageHandler = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);
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

  return <div className="min-h-screen">{isLoading ? <p className="flex-grow text-center font-bold">Loading...</p> : isAuth ? <ProfilPage /> : <Navigate to="/login" replace={true} />}</div>;
};

export default AuthProfilePageHandler;
