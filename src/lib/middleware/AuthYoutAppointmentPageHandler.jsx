"use client";

import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { authset } from "../../lib/store/slice/auth.slice";
import YourAppointmentsPage from "@/pages/YourAppointmentsPage";
import LoginPage from "@/pages/LoginPage";

const AuthYourAppointmentPageHandler = () => {

    const {isAuth} = useSelector((state)=> state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(authset(true));
            } else {
                dispatch(authset(false));
            }
        });
    }, [dispatch]);

    return ( 
        <div>{isAuth ? <YourAppointmentsPage /> : <LoginPage />}</div>
     );
}
 
export default AuthYourAppointmentPageHandler;