import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../firebase";
import { Link, Navigate } from "react-router-dom";

const LoginPage = () => {
  const [user, userSet] = useState(false);
  const [userAccount, userAccountSet] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function onHandleLogin(e) {
    try {
      e.preventDefault();
      await signInWithEmailAndPassword(auth, userAccount.email, userAccount.password);
      userSet(true);
    } catch (err) {
      const errorMessage = err.message;
      const errorCode = err.code;

      setError(true);
      console.log(errorCode);

      switch (errorCode) {
        case "auth/invalid-email":
          setErrorMessage("This email address is invalid.");
          break;
        case "auth/user-disabled":
          setErrorMessage("This email address is disabled by the administrator.");
          break;
        case "auth/user-not-found":
          setErrorMessage("This email address is not registered.");
          break;
        case "auth/wrong-password":
          setErrorMessage("The password is invalid or the user does not have a password.");
          break;
        case "auth/invalid-credential":
          setErrorMessage("The password is invalid or this email address is not registered.");
          break;
        default:
          setErrorMessage(errorMessage);
          break;
      }
    }
  }

  return (
    <div className="container flex justify-center mt-[30px] mb-[123px]">
      {user && <Navigate to="/" replace={true} />}
      <Card className="w-[500px] h-[600px]">
        <CardHeader className="text-center">
          <CardTitle className="font-bold text-[36px]">Login to Your Account</CardTitle>
          <CardDescription className="text-[#062126] opacity-40 font-medium text-[16px] px-[50px]">Come on, continue your appointment and change it according to your wishes.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onHandleLogin} className="flex flex-col items-center">
            <div className="grid w-full items-center justify-center gap-4 mb-[16px]">
              <div className="flex flex-col space-y-1.5">
                <Label className="text-[#062126] opacity-70 font-medium text-[16px]" htmlFor="email">
                  Email
                </Label>
                <Input className="w-[400px] bg-white" type="email" id="email" placeholder="" value={userAccount.email} onChange={(e) => userAccountSet((prev) => ({ ...prev, email: e.target.value }))} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="text-[#062126] opacity-70 font-medium text-[16px]" htmlFor="password">
                  Password
                </Label>
                <Input className="w-[400px] bg-white" type="password" id="password" placeholder="" value={userAccount.password} onChange={(e) => userAccountSet((prev) => ({ ...prev, password: e.target.value }))} />
              </div>
            </div>
            <div className="flex justify-end w-[400px] mb-[16px]">
              <a className="text-[#062126] opacity-70 font-medium text-[16px] cursor-pointer hover:underline decoration-solid">Forget password?</a>
            </div>
            <Button className="w-[400px] text-[20px] font-semibold mb-[18px] hover:bg-[#0F97B5]" type="submit">
              Login
            </Button>
            {error && <p className="text-red-500 text-[16px] font-regular">{errorMessage}</p>}
          </form>
        </CardContent>
        <CardFooter className="flex flex-col w-full">
          <Link to="/register" className="flex justify-end w-[400px] mb-[16px]">
            <p className="text-[#062126] opacity-70 font-medium text-[16px] cursor-pointer hover:underline decoration-solid">Dont have an account?</p>
          </Link>
          <Link to={"/register"}>
            <Button className="w-[400px] text-[#24BEE0] border-[#24BEE0] bg-white text-[20px] font-semibold hover:border-[#0F97B5] hover:text-[#0F97B5]" variant="outline">
              Register
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
